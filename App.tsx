
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { QUESTIONS, PAPER_LEVELS, PAPER_TOTAL_LEVELS } from './data/questions';
import { GameState, QuizState, UserProgress } from './types';
import { QuizCard } from './components/QuizCard';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';
import { calculateNewProgress } from './services/studyEngine';
import { RotateCcw, Trophy, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  // --- State ---
  const [gameState, setGameState] = useState<GameState>(GameState.LOGIN);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  
  const [activeSession, setActiveSession] = useState(QUESTIONS); 
  const [currentPaper, setCurrentPaper] = useState<string>(Object.keys(PAPER_LEVELS)[0] || '');
  const [currentLevelId, setCurrentLevelId] = useState<number>(1);

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    streak: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    isFinished: false,
    history: []
  });

  const defaultProgress: UserProgress = {
    xp: 0,
    level: 1, // RPG Level
    unlockedLevels: Object.keys(PAPER_LEVELS).reduce((acc, paper) => ({ ...acc, [paper]: 1 }), {}),
    bestStreak: 0,
    questionsAnswered: 0,
    categoryStats: {},
    questionStats: {}
  };

  const [userProgress, setUserProgress] = useState<UserProgress>(defaultProgress);

  // UI State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRationale, setShowRationale] = useState(false);
  const [difficultyRating, setDifficultyRating] = useState<number | null>(null);

  // --- Effects ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gameState]);

  useEffect(() => {
    if (currentUser) {
      const savedData = localStorage.getItem(`mulwa_study_progress_${currentUser.toLowerCase()}`);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        // Migration: if old progress exists, convert it
        if (parsed.unlockedQuizLevel && !parsed.unlockedLevels) {
          parsed.unlockedLevels = Object.keys(PAPER_LEVELS).reduce((acc, paper) => ({ ...acc, [paper]: 1 }), {});
          // Maybe assign the old level to the first paper?
          const firstPaper = Object.keys(PAPER_LEVELS)[0];
          if (firstPaper) parsed.unlockedLevels[firstPaper] = parsed.unlockedQuizLevel;
          delete parsed.unlockedQuizLevel;
        }
        setUserProgress(parsed);
      } else {
        setUserProgress(defaultProgress);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`mulwa_study_progress_${currentUser.toLowerCase()}`, JSON.stringify(userProgress));
    }
  }, [userProgress, currentUser]);

  // --- Handlers ---
  const logUserAction = async (username: string) => {
    try {
      await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          score: quizState.score,
          totalQuestions: userProgress.questionsAnswered,
          level: userProgress.level,
          xp: userProgress.xp,
          bestStreak: userProgress.bestStreak
        })
      });
    } catch (err) {
      console.error("Failed to log user action:", err);
    }
  };

  const logGuestLogin = async (username: string) => {
    try {
      await fetch('/api/guests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
      });
    } catch (err) {
      console.error("Failed to log guest login:", err);
    }
  };

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setGameState(GameState.DASHBOARD);
    logGuestLogin(username);
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      setUserProgress(defaultProgress);
      if (currentUser) {
        localStorage.removeItem(`mulwa_study_progress_${currentUser.toLowerCase()}`);
      }
    }
  };

  const startLevel = (paper: string, level: number) => {
    const questions = PAPER_LEVELS[paper]?.[level] || PAPER_LEVELS[paper]?.[1] || [];
    setActiveSession(questions);
    setCurrentPaper(paper);
    setCurrentLevelId(level);
    setGameState(GameState.PLAYING);
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      streak: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      isFinished: false,
      history: []
    });
    resetQuestionState();
  };

  const handleSelectTopic = (topic: string) => {
    // Filter questions by topic and pick 10 random ones
    const topicQs = QUESTIONS.filter(q => q.topic === topic);
    const shuffled = [...topicQs].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    setActiveSession(selected);
    setCurrentPaper(`Drill: ${topic}`);
    setCurrentLevelId(1);
    setGameState(GameState.PLAYING);
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      streak: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      isFinished: false,
      history: []
    });
    resetQuestionState();
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setShowRationale(false);
    setDifficultyRating(null);
  };

  const handleAnswer = (index: number) => {
    const currentQ = activeSession[quizState.currentQuestionIndex];
    const isCorrect = index === currentQ.correctAnswerIndex;

    setSelectedOption(index);
    setShowExplanation(true);
    
    // Update Logic
    const currentQStats = userProgress.questionStats[currentQ.id];
    const newQStats = calculateNewProgress(currentQStats, isCorrect);

    if (isCorrect) {
      confetti({ 
        particleCount: 60, 
        spread: 70, 
        origin: { y: 0.7 }, 
        colors: ['#3b82f6', '#2dd4bf', '#fbbf24'],
        shapes: ['circle', 'square']
      });
      setQuizState(prev => ({
        ...prev,
        score: prev.score + 10 + (prev.streak * 5),
        streak: prev.streak + 1,
        correctAnswers: prev.correctAnswers + 1,
        history: [...prev.history, { questionId: currentQ.id, userSelected: index, isCorrect: true }]
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        streak: 0,
        wrongAnswers: prev.wrongAnswers + 1,
        history: [...prev.history, { questionId: currentQ.id, userSelected: index, isCorrect: false }]
      }));
    }

    setUserProgress(prev => {
      const currentCatStats = prev.categoryStats[currentQ.category] || { correct: 0, total: 0 };
      const newXP = prev.xp + (isCorrect ? 25 : 5);
      const newLevel = Math.floor(newXP / 500) + 1;

      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        questionsAnswered: prev.questionsAnswered + 1,
        bestStreak: Math.max(prev.bestStreak, isCorrect ? quizState.streak + 1 : prev.bestStreak),
        categoryStats: {
          ...prev.categoryStats,
          [currentQ.category]: {
            correct: currentCatStats.correct + (isCorrect ? 1 : 0),
            total: currentCatStats.total + 1
          }
        },
        questionStats: { ...prev.questionStats, [currentQ.id]: newQStats }
      };
    });
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex + 1 >= activeSession.length) {
      finishQuiz();
    } else {
      setQuizState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
      resetQuestionState();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackQuestion = () => {
    if (quizState.currentQuestionIndex > 0) {
      const prevIndex = quizState.currentQuestionIndex - 1;
      const prevHistory = quizState.history.find(h => h.questionId === activeSession[prevIndex].id);
      
      setQuizState(prev => ({ ...prev, currentQuestionIndex: prevIndex }));
      
      if (prevHistory) {
        setSelectedOption(prevHistory.userSelected);
        setShowExplanation(true);
        setShowRationale(false);
      } else {
        resetQuestionState();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const finishQuiz = () => {
    setGameState(GameState.RESULTS);
    const passRate = (quizState.correctAnswers / activeSession.length) * 100;
    
    const unlockedForPaper = userProgress.unlockedLevels[currentPaper] || 1;
    const totalForPaper = PAPER_TOTAL_LEVELS[currentPaper] || 1;

    if (passRate >= 70 && currentLevelId === unlockedForPaper && unlockedForPaper < totalForPaper) {
       setUserProgress(prev => ({
         ...prev,
         unlockedLevels: {
           ...prev.unlockedLevels,
           [currentPaper]: unlockedForPaper + 1
         }
       }));
       confetti({ 
         particleCount: 200, 
         spread: 120, 
         origin: { y: 0.5 },
         colors: ['#3b82f6', '#2dd4bf', '#fbbf24', '#f43f5e']
       });
    }
  };

  const handleRateDifficulty = (rating: number) => {
    setDifficultyRating(rating);
    const currentQ = activeSession[quizState.currentQuestionIndex];
    
    setUserProgress(prev => {
      const stats = { ...prev.questionStats };
      const qStat = stats[currentQ.id] || { box: 1, nextReview: Date.now(), timesAnswered: 0, timesCorrect: 0 };
      
      stats[currentQ.id] = {
        ...qStat,
        userDifficulty: rating
      };

      return {
        ...prev,
        questionStats: stats
      };
    });
  };

  // --- Views ---

  const renderView = () => {
    if (gameState === GameState.LOGIN) return <LoginScreen onLogin={handleLogin} />;

    if (gameState === GameState.DASHBOARD) {
      return <Dashboard username={currentUser || ''} progress={userProgress} onSelectLevel={startLevel} onSelectTopic={handleSelectTopic} onResetProgress={handleResetProgress} />;
    }

    if (gameState === GameState.PLAYING) {
      const currentQ = activeSession[quizState.currentQuestionIndex];
      const progressPercent = ((quizState.currentQuestionIndex + 1) / activeSession.length) * 100;

      return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto bg-white">
          {/* Sticky Header - Modern Flat */}
          <div className="bg-white/80 backdrop-blur-xl border-b border-slate-50 px-6 py-6 sticky top-0 z-30">
             <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setGameState(GameState.DASHBOARD)} 
                    className="p-4 bg-slate-900 text-white rounded-2xl transition-all active:scale-90 hover:bg-slate-800"
                  >
                    <RotateCcw size={20} />
                  </button>
                  <div className="hidden sm:flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Level {currentLevelId}</span>
                    <span className="text-sm font-black text-slate-900">Question {quizState.currentQuestionIndex + 1} of {activeSession.length}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <Sparkles size={18} className="text-accent-amber animate-pulse" />
                    <span className="font-black text-slate-900">{quizState.streak}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <Trophy size={18} className="text-primary-500" />
                    <span className="font-black text-slate-900">{quizState.score}</span>
                  </div>
                </div>
             </div>
             <div className="relative h-2 bg-slate-50 rounded-full overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-slate-900 transition-all duration-1000 ease-out rounded-full" style={{ width: `${progressPercent}%` }}></div>
             </div>
          </div>

          <div className="flex-1 px-6 py-12 md:px-12 flex flex-col items-center justify-start">
            <QuizCard 
              question={currentQ}
              onAnswer={handleAnswer}
              showExplanation={showExplanation}
              userSelected={selectedOption}
              showRationale={showRationale}
              onToggleRationale={() => setShowRationale(prev => !prev)}
              onRateDifficulty={handleRateDifficulty}
              difficultyRating={difficultyRating}
            />
          </div>

          {/* Navigation Controls */}
          <div className="fixed bottom-10 left-0 right-0 px-6 flex justify-center items-center pointer-events-none z-40">
            <div className="flex items-center gap-4 pointer-events-auto bg-white/40 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/20 shadow-2xl">
              {quizState.currentQuestionIndex > 0 && (
                <button
                  onClick={handleBackQuestion}
                  className="bg-white text-slate-900 p-5 rounded-3xl font-black border border-slate-100 flex items-center justify-center transition-all hover:bg-slate-50 active:scale-90 shadow-sm"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              
              {showExplanation && (
                <button
                  onClick={handleNextQuestion}
                  className="bg-slate-900 text-white pl-10 pr-8 py-5 rounded-3xl font-black text-lg flex items-center gap-6 transition-all hover:bg-slate-800 active:scale-95 animate-slide-up shadow-xl"
                >
                  <span>{quizState.currentQuestionIndex + 1 === activeSession.length ? 'Finish Session' : 'Next Question'}</span>
                  <div className="bg-white/10 rounded-xl p-2"><ChevronRight size={24} /></div>
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (gameState === GameState.RESULTS) {
      const percentage = Math.round((quizState.correctAnswers / activeSession.length) * 100);
      const isSuccess = percentage >= 70;

      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden max-w-xl w-full animate-scale-in">
            <div className={`p-16 text-center relative overflow-hidden ${isSuccess ? 'bg-emerald-500' : 'bg-rose-500'}`}>
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              <h1 className="text-8xl font-display font-black text-white mb-4 relative z-10 tracking-tighter">{percentage}%</h1>
              <p className="text-white/90 font-black text-2xl relative z-10 uppercase tracking-widest">
                {isSuccess ? "Mastered" : "Try Again"}
              </p>
            </div>
            
            <div className="p-12 space-y-10">
               <div className="grid grid-cols-2 gap-6">
                 <div className="bg-slate-50 p-8 rounded-[2rem] text-center">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Correct</p>
                   <p className="text-4xl font-display font-black text-slate-900">{quizState.correctAnswers}</p>
                 </div>
                 <div className="bg-slate-50 p-8 rounded-[2rem] text-center">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">XP Gained</p>
                   <p className="text-4xl font-display font-black text-primary-500">+{quizState.score}</p>
                 </div>
               </div>

               <button 
                 onClick={() => setGameState(GameState.DASHBOARD)} 
                 className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 uppercase tracking-widest"
               >
                 Continue Journey
               </button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative min-h-screen bg-white">
      {renderView()}
      {/* Standard Footer Watermark */}
      <footer className="py-12 text-center bg-white">
        <div className="inline-flex items-center gap-3 px-8 py-3 bg-slate-50 rounded-full transition-all hover:bg-slate-100">
          <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em] leading-none">
            MULWA <span className="text-slate-300">😎</span> STUDY
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
