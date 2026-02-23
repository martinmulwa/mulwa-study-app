
export type KRNUnit = 
  | "Medical-Surgical" 
  | "Midwifery & Obstetrics" 
  | "Community Health" 
  | "Pediatric Nursing" 
  | "Mental Health" 
  | "Nursing Fundamentals" 
  | "Leadership & Management" 
  | "Anatomy & Physiology";

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  category: string;
  topic: string;
  sourcePaper: string;
  explanation: string;
  whyWrong?: string[];
  memoryTip?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  streak: number;
  correctAnswers: number;
  wrongAnswers: number;
  isFinished: boolean;
  history: { questionId: string; userSelected: number; isCorrect: boolean }[];
}

export enum GameState {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  PLAYING = 'PLAYING',
  RESULTS = 'RESULTS',
}

export interface QuestionProgress {
  box: number; // 0 to 5 (Leitner system)
  nextReview: number; // Timestamp
  timesAnswered: number;
  timesCorrect: number;
  userDifficulty?: number; // 1-5 stars
}

export interface UserProgress {
  xp: number;
  level: number; // Current RPG Level (cosmetic)
  unlockedQuizLevel: number; // The actual quiz level (1-60)
  bestStreak: number;
  questionsAnswered: number;
  questionStats: Record<string, QuestionProgress>; 
  categoryStats: Record<string, { correct: number; total: number }>;
}
