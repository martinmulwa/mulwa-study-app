
import React, { useMemo, useState } from 'react';
import { UserProgress } from '../types';
import { TOTAL_LEVELS } from '../data/questions';
import { MNEMONICS, STUDY_SCHEDULE, STUDY_TECHNIQUES, LEITNER_SYSTEM } from '../data/toolkit';
import { Lock, Zap, TrendingUp, AlertCircle, BookOpen, Star, Trash2, Calendar, Lightbulb, Brain, ChevronRight, Award, Flame, Target } from 'lucide-react';

interface DashboardProps {
  progress: UserProgress;
  onSelectLevel: (level: number) => void;
  onResetProgress: () => void;
}

/**
 * Dashboard Component
 * 
 * The central hub for the Mulwa Study App. Displays user progress, 
 * learning path, and the revision toolkit.
 * 
 * @author Mulwa
 */
export const Dashboard: React.FC<DashboardProps> = ({ progress, onSelectLevel, onResetProgress }) => {
  const [activeTab, setActiveTab] = useState<'campaign' | 'toolkit'>('campaign');
  
  // Calculate weak areas based on correct/total ratio
  const weakAreas = useMemo(() => {
    return Object.entries(progress.categoryStats)
      .map(([cat, stats]) => ({
        category: cat,
        accuracy: stats.total > 0 ? (stats.correct / stats.total) * 100 : 0,
        total: stats.total
      }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3); // Top 3 weakest
  }, [progress.categoryStats]);

  const xpToNextLevel = 500 - (progress.xp % 500);
  const xpProgress = ((progress.xp % 500) / 500) * 100;

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 pb-32">
      <div className="max-w-6xl mx-auto space-y-10 animate-slide-up">
        
        {/* Gamified Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* XP & Level Card */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h2 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] mb-1">Rank</h2>
                   <p className="text-2xl font-display font-black text-white">Level {progress.level}</p>
                 </div>
                 <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                   <Award className="text-amber-400" size={24} />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                   <span>XP: {progress.xp % 500} / 500</span>
                   <span>{Math.round(xpProgress)}%</span>
                 </div>
                 <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/5">
                   <div className="bg-gradient-to-r from-primary-400 to-accent-teal h-full transition-all duration-1000" style={{ width: `${xpProgress}%` }}></div>
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold italic">+{xpToNextLevel} XP to Level {progress.level + 1}</p>
               </div>
            </div>
          </div>

          {/* Streak & Accuracy Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between group">
             <div className="flex justify-between items-start mb-4">
               <h2 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Performance</h2>
               <Flame className="text-orange-500 group-hover:animate-bounce" size={20} />
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div>
                 <p className="text-3xl font-display font-black text-slate-900">{progress.bestStreak}</p>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Best Streak</p>
               </div>
               <div>
                 <p className="text-3xl font-display font-black text-slate-900">{progress.questionsAnswered}</p>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Solved</p>
               </div>
             </div>
             <div className="mt-6 pt-6 border-t border-slate-50">
               <div className="flex items-center gap-2 text-primary-600">
                 <Target size={14} />
                 <span className="text-xs font-black uppercase tracking-widest">Accuracy Focus</span>
               </div>
             </div>
          </div>

          {/* Focus Areas Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between">
             <div>
               <h2 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] mb-6 flex items-center gap-2">
                 <AlertCircle size={14} className="text-rose-500" /> Improvement Areas
               </h2>
               <div className="space-y-4">
                 {weakAreas.length > 0 ? weakAreas.map((area, idx) => (
                   <div key={idx} className="space-y-1">
                     <div className="flex justify-between items-center">
                       <span className="text-xs font-black text-slate-700 truncate max-w-[140px] uppercase tracking-tight">{area.category}</span>
                       <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded-lg">{Math.round(area.accuracy)}%</span>
                     </div>
                     <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-rose-400 h-full" style={{ width: `${area.accuracy}%` }}></div>
                     </div>
                   </div>
                 )) : (
                   <div className="text-center py-4">
                     <p className="text-slate-400 text-xs font-bold italic">Complete quizzes to unlock insights.</p>
                   </div>
                 )}
               </div>
             </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-8 border-b border-slate-200">
          <button 
            onClick={() => setActiveTab('campaign')}
            className={`pb-4 px-2 font-black text-xs uppercase tracking-[0.2em] transition-all relative ${activeTab === 'campaign' ? 'text-primary-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Learning Path
            {activeTab === 'campaign' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 rounded-t-full"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('toolkit')}
            className={`pb-4 px-2 font-black text-xs uppercase tracking-[0.2em] transition-all relative ${activeTab === 'toolkit' ? 'text-primary-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Revision Toolkit
            {activeTab === 'toolkit' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 rounded-t-full"></div>}
          </button>
        </div>

        {activeTab === 'campaign' ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-display font-black text-slate-900 flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-xl text-primary-600">
                  <TrendingUp size={20} />
                </div>
                Campaign Mode
              </h3>
              <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress: </span>
                <span className="text-sm font-black text-primary-600">{progress.unlockedQuizLevel} / {TOTAL_LEVELS}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
              {Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1).map((level) => {
                const isUnlocked = level <= progress.unlockedQuizLevel;
                const isCurrent = level === progress.unlockedQuizLevel;
                const isCompleted = level < progress.unlockedQuizLevel;
                
                return (
                  <button
                    key={level}
                    onClick={() => isUnlocked && onSelectLevel(level)}
                    disabled={!isUnlocked}
                    className={`
                      relative group aspect-square rounded-[2rem] flex flex-col items-center justify-center border-4 transition-all duration-500
                      ${isCurrent 
                        ? 'bg-primary-600 border-primary-400 text-white shadow-2xl shadow-primary-500/40 scale-110 z-10' 
                        : isCompleted 
                          ? 'bg-white border-emerald-100 text-emerald-600 hover:border-emerald-300 hover:shadow-xl' 
                          : 'bg-slate-50 border-slate-100 text-slate-200 cursor-not-allowed'}
                    `}
                  >
                    <div className="absolute top-3 right-3">
                      {isCompleted ? <Star size={14} fill="currentColor" /> : !isUnlocked ? <Lock size={14} /> : <Zap size={14} className="animate-pulse" />}
                    </div>
                    
                    <span className={`text-4xl font-display font-black mb-1 ${isCurrent ? 'text-white' : isCompleted ? 'text-emerald-600' : 'text-slate-300'}`}>
                      {level}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      {isUnlocked ? 'Level' : 'Locked'}
                    </span>
                    
                    {isCurrent && (
                      <div className="absolute -bottom-2 bg-amber-400 text-white text-[8px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
                        Active
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Mnemonics */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                    <Lightbulb size={20} />
                  </div>
                  Master Mnemonics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MNEMONICS.map((m, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-primary-200 hover:bg-white transition-all duration-300 group">
                      <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] mb-2">{m.topic}</p>
                      <p className="text-xl font-display font-black text-slate-900 group-hover:text-primary-700 transition-colors mb-3">"{m.mnemonic}"</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{m.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Schedule */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="bg-primary-100 p-2 rounded-xl text-primary-600">
                    <Calendar size={20} />
                  </div>
                  4-Week Study Schedule
                </h3>
                <div className="space-y-8">
                  {Object.entries(STUDY_SCHEDULE).map(([week, data]) => (
                    <div key={week} className="relative pl-8 border-l-4 border-primary-100 space-y-4">
                      <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-sm"></div>
                      <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">{week.replace('week', 'Week ')}: {data.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.days.map((d, i) => (
                          <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                            <span className="text-[10px] font-black bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-slate-500 shrink-0">Day {d.day}</span>
                            <span className="text-xs text-slate-700 font-bold">{d.topics}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Tools */}
            <div className="space-y-10">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-teal rounded-full blur-[60px] opacity-20 -mb-16 -mr-16"></div>
                <h3 className="text-2xl font-display font-black mb-8 flex items-center gap-3">
                  <Brain className="text-accent-teal" size={24} />
                  Leitner System
                </h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">
                  The ultimate spaced repetition algorithm. Master content by moving it through boxes based on recall accuracy.
                </p>
                <div className="space-y-4">
                  {LEITNER_SYSTEM.map((box) => (
                    <div key={box.box} className="flex items-center gap-5 bg-white/5 p-5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-xl text-accent-teal border border-white/5">
                        {box.box}
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-100 uppercase tracking-widest">{box.frequency}</p>
                        <p className="text-[10px] text-slate-500 font-bold">{box.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Zap className="text-primary-600" size={24} />
                  Techniques
                </h3>
                <div className="space-y-6">
                  {STUDY_TECHNIQUES.map((tech, i) => (
                    <div key={i} className="group">
                      <p className="font-black text-slate-900 mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                        {tech.name}
                      </p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed pl-3.5 border-l border-slate-100 group-hover:border-primary-200 transition-colors">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer / Reset Area */}
        <div className="pt-12 border-t border-slate-200 flex flex-col items-center gap-6">
            <button 
              onClick={onResetProgress}
              className="flex items-center gap-3 text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100 px-8 py-4 rounded-2xl font-black transition-all text-xs uppercase tracking-widest shadow-sm"
            >
                <Trash2 size={16} />
                Reset All Progress
            </button>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Created by Mulwa</p>
        </div>
      </div>
    </div>
  );
};
