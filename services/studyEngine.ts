import { Question, UserProgress, QuestionProgress } from '../types';
import { QUESTIONS } from '../data/questions';

const QUESTIONS_PER_SESSION = 20;

// Helper to get color for tags
export const getTagColor = (tag: string) => {
  const map: Record<string, string> = {
    'Emergency': 'bg-red-100 text-red-700 border-red-200',
    'Pharma': 'bg-purple-100 text-purple-700 border-purple-200',
    'Peds': 'bg-pink-100 text-pink-700 border-pink-200',
    'Anatomy': 'bg-blue-100 text-blue-700 border-blue-200',
    'Psych': 'bg-indigo-100 text-indigo-700 border-indigo-200',
    'Community': 'bg-green-100 text-green-700 border-green-200',
    'Surgical': 'bg-orange-100 text-orange-700 border-orange-200',
    'ObsGyn': 'bg-rose-100 text-rose-700 border-rose-200',
  };
  return map[tag] || 'bg-slate-100 text-slate-700 border-slate-200';
};

// Leitner System Logic
export const calculateNewProgress = (
  current: QuestionProgress | undefined,
  isCorrect: boolean
): QuestionProgress => {
  const now = Date.now();
  const stats = current || { box: 0, nextReview: 0, timesAnswered: 0, timesCorrect: 0 };

  let newBox = stats.box;
  let nextReviewInterval = 0;

  if (isCorrect) {
    newBox = Math.min(stats.box + 1, 5); // Max box 5
    // Box intervals: 1=1d, 2=3d, 3=7d, 4=14d, 5=30d
    const intervals = [0, 24, 72, 168, 336, 720]; // hours
    nextReviewInterval = intervals[newBox] * 60 * 60 * 1000;
  } else {
    newBox = 0; // Reset to box 0 on fail (Active Recall principle)
    nextReviewInterval = 10 * 60 * 1000; // Review in 10 minutes
  }

  return {
    box: newBox,
    nextReview: now + nextReviewInterval,
    timesAnswered: stats.timesAnswered + 1,
    timesCorrect: stats.timesCorrect + (isCorrect ? 1 : 0),
  };
};

export const generateQuizSession = (
  allQuestions: Question[],
  userProgress: UserProgress,
  categoryFilter: string | null
): Question[] => {
  const now = Date.now();
  let pool = allQuestions;

  if (categoryFilter) {
    pool = pool.filter(q => q.category === categoryFilter);
  }

  // 1. Priority: Due for review (Spaced Repetition)
  const dueQuestions = pool.filter(q => {
    const stats = userProgress.questionStats[q.id];
    return stats && stats.nextReview <= now;
  });

  // 2. Secondary: New questions (never seen)
  const newQuestions = pool.filter(q => !userProgress.questionStats[q.id]);

  // 3. Fallback: Already mastered but adding for filler
  const masteredQuestions = pool.filter(q => {
    const stats = userProgress.questionStats[q.id];
    return stats && stats.nextReview > now;
  });

  let session: Question[] = [];

  // Mix strategy: 60% Due, 30% New, 10% Filler
  // Adjust based on availability
  
  // Add all due questions first (limit to 15 to allow variety)
  session = [...session, ...dueQuestions.slice(0, 15)];

  // Fill remaining with new questions
  const needed = QUESTIONS_PER_SESSION - session.length;
  if (needed > 0) {
    session = [...session, ...newQuestions.slice(0, needed)];
  }

  // If still needed, add random mastered questions
  const stillNeeded = QUESTIONS_PER_SESSION - session.length;
  if (stillNeeded > 0) {
    const shuffledMastered = [...masteredQuestions].sort(() => 0.5 - Math.random());
    session = [...session, ...shuffledMastered.slice(0, stillNeeded)];
  }

  // Shuffle the final deck
  return session.sort(() => 0.5 - Math.random());
};