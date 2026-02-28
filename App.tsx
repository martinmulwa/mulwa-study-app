
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { QUESTIONS, LEVELS, TOTAL_LEVELS } from './data/questions';
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
    unlockedQuizLevel: 1, // Game Level (1-7)
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
    if (currentUser) {
      const savedData = localStorage.getItem(`mulwa_study_progress_${currentUser.toLowerCase()}`);
      if (savedData) {
        setUserProgress(JSON.parse(savedData));
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

  const startLevel = (level: number) => {
    const questions = LEVELS[level] || LEVELS[1];
    setActiveSession(questions);
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
    
    if (currentUser) {
      logUserAction(currentUser);
    }

    if (passRate >= 70 && currentLevelId === userProgress.unlockedQuizLevel && userProgress.unlockedQuizLevel < TOTAL_LEVELS) {
       setUserProgress(prev => ({
         ...prev,
         unlockedQuizLevel: prev.unlockedQuizLevel + 1
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

  if (gameState === GameState.LOGIN) return <LoginScreen onLogin={handleLogin} />;

  if (gameState === GameState.DASHBOARD) {
    return <Dashboard username={currentUser || ''} progress={userProgress} onSelectLevel={startLevel} onResetProgress={handleResetProgress} />;
  }

  if (gameState === GameState.PLAYING) {
    const currentQ = activeSession[quizState.currentQuestionIndex];
    const progressPercent = ((quizState.currentQuestionIndex + 1) / activeSession.length) * 100;

    return (
      <div className="min-h-screen flex flex-col max-w-5xl mx-auto md:px-6 bg-[#F8FAFC]">
        {/* Sticky Header */}
        <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200/60 px-4 py-4 sticky top-0 z-30 md:rounded-b-[2rem] md:mx-4 md:mt-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
           <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <button onClick={() => setGameState(GameState.DASHBOARD)} className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-all active:scale-90">
                  <RotateCcw size={20} />
                </button>
                <div className="hidden sm:flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Level {currentLevelId}</span>
                  <span className="text-xs font-bold text-slate-700">Question {quizState.currentQuestionIndex + 1} of {activeSession.length}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-2xl border border-amber-100 shadow-sm">
                  <Sparkles size={16} className="animate-pulse" />
                  <span className="font-black text-sm">{quizState.streak}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-2xl border border-primary-100 shadow-sm">
                  <Trophy size={16} />
                  <span className="font-black text-sm">{quizState.score}</span>
                </div>
              </div>
           </div>
           <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
             <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-teal transition-all duration-700 ease-out rounded-full" style={{ width: `${progressPercent}%` }}></div>
           </div>
        </div>

        <div className="flex-1 p-4 md:p-10 flex flex-col items-center justify-start md:justify-center">
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

        {/* Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 p-4 md:p-8 flex justify-center items-center gap-4 bg-gradient-to-t from-white via-white/80 to-transparent z-40 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            {quizState.currentQuestionIndex > 0 && (
              <button
                onClick={handleBackQuestion}
                className="bg-white text-slate-700 p-4 rounded-2xl font-bold shadow-xl border border-slate-200 flex items-center justify-center transition-all hover:bg-slate-50 active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            
            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="bg-slate-900 text-white pl-8 pr-6 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-slate-900/30 flex items-center gap-4 transition-all hover:scale-105 active:scale-95 animate-slide-up"
              >
                <span>{quizState.currentQuestionIndex + 1 === activeSession.length ? 'Finish Session' : 'Next Question'}</span>
                <div className="bg-white/20 rounded-xl p-1.5"><ChevronRight size={20} /></div>
              </button>
            )}
          </div>
        </div>
        
        {/* Footer Credit */}
        <footer className="py-8 text-center text-slate-300 text-[10px] font-black uppercase tracking-[0.4em] mt-auto">
          MULWA 😎
        </footer>
      </div>
    );
  }

  if (gameState === GameState.RESULTS) {
    const percentage = Math.round((quizState.correctAnswers / activeSession.length) * 100);
    const isSuccess = percentage >= 70;

    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-md">
        <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden max-w-lg w-full relative animate-scale-in border border-white">
          <div className={`p-12 text-center relative overflow-hidden ${isSuccess ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-rose-500 to-orange-600'}`}>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px]"></div>
            <h1 className="text-7xl font-display font-black text-white mb-2 relative z-10">{percentage}%</h1>
            <p className="text-white/90 font-bold text-xl relative z-10">{isSuccess ? "Level Mastered!" : "Keep Pushing!"}</p>
          </div>
          
          <div className="p-10 space-y-6">
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 text-center">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Correct</p>
                 <p className="text-2xl font-display font-bold text-emerald-600">{quizState.correctAnswers}</p>
               </div>
               <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 text-center">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">XP Earned</p>
                 <p className="text-2xl font-display font-bold text-primary-600">+{quizState.score}</p>
               </div>
             </div>

             <button 
               onClick={() => setGameState(GameState.DASHBOARD)} 
               className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
             >
               Return to Dashboard
             </button>
             
             <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest opacity-0">MULWA 😎</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
