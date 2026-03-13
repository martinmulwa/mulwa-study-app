
import React, { useMemo, useState } from 'react';
import { UserProgress } from '../types';
import { PAPER_LEVELS, PAPER_TOTAL_LEVELS } from '../data/questions';
import { MNEMONICS, STUDY_SCHEDULE, STUDY_TECHNIQUES, LEITNER_SYSTEM } from '../data/toolkit';
import { Lock, Zap, TrendingUp, AlertCircle, BookOpen, Star, Trash2, Calendar, Lightbulb, Brain, ChevronRight, Award, Flame, Target, ShieldCheck, Users, BarChart3, Clock, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

interface DashboardProps {
  username: string;
  progress: UserProgress;
  onSelectLevel: (paper: string, level: number) => void;
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
export const Dashboard: React.FC<DashboardProps> = ({ username, progress, onSelectLevel, onResetProgress }) => {
  const [activeTab, setActiveTab] = useState<'campaign' | 'toolkit' | 'admin'>('campaign');
  const [guests, setGuests] = useState<any[]>([]);
  const [isLoadingGuests, setIsLoadingGuests] = useState(false);

  const isAdmin = username.toLowerCase() === 'admin';

  // Fetch guests if admin
  React.useEffect(() => {
    if (isAdmin && activeTab === 'admin') {
      setIsLoadingGuests(true);
      fetch('/api/guests')
        .then(res => res.json())
        .then(data => {
          setGuests(data);
          setIsLoadingGuests(false);
        })
        .catch(err => {
          console.error("Failed to fetch guests:", err);
          setIsLoadingGuests(false);
        });
    }
  }, [isAdmin, activeTab]);
  
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
    <div className="min-h-screen bg-white p-4 md:p-10 pb-32">
      <div className="max-w-6xl mx-auto space-y-10 animate-slide-up">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-white">
              <Users size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-display font-black text-slate-900">Welcome, {username}</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nursing Excellence Awaits</p>
            </div>
          </div>
        </div>

        {/* Gamified Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* XP & Level Card */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <h2 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] mb-1">Rank</h2>
                   <p className="text-2xl font-display font-black text-white">Level {progress.level}</p>
                 </div>
                 <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md">
                   <Award className="text-amber-400" size={24} />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                   <span>XP: {progress.xp % 500} / 500</span>
                   <span>{Math.round(xpProgress)}%</span>
                 </div>
                 <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden border border-white/5">
                   <div className="bg-white h-full transition-all duration-1000" style={{ width: `${xpProgress}%` }}></div>
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold italic">+{xpToNextLevel} XP to Level {progress.level + 1}</p>
               </div>
            </div>
          </div>

          {/* Streak & Accuracy Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-between group">
             <div className="flex justify-between items-start mb-4">
               <h2 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Performance</h2>
               <Flame className="text-orange-500" size={20} />
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
             <div className="mt-6 pt-6 border-t border-slate-100">
               <div className="flex items-center gap-2 text-slate-900">
                 <Target size={14} />
                 <span className="text-xs font-black uppercase tracking-widest">Accuracy Focus</span>
               </div>
             </div>
          </div>

          {/* Focus Areas Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
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
                     <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                       <div className="bg-slate-900 h-full" style={{ width: `${area.accuracy}%` }}></div>
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
          {isAdmin && (
            <button 
              onClick={() => setActiveTab('admin')}
              className={`pb-4 px-2 font-black text-xs uppercase tracking-[0.2em] transition-all relative ${activeTab === 'admin' ? 'text-rose-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Admin Panel
              {activeTab === 'admin' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-rose-600 rounded-t-full"></div>}
            </button>
          )}
        </div>

        {activeTab === 'campaign' ? (
          <div className="space-y-12">
            {Object.entries(PAPER_LEVELS).map(([paper, levels]) => {
              const totalLevels = PAPER_TOTAL_LEVELS[paper] || 0;
              const unlockedLevel = progress.unlockedLevels[paper] || 1;
              
              return (
                <div key={paper} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-black text-slate-900 flex items-center gap-3">
                      <div className="bg-primary-100 p-2 rounded-xl text-primary-600">
                        <TrendingUp size={18} />
                      </div>
                      {paper}
                    </h3>
                    <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress: </span>
                      <span className="text-sm font-black text-primary-600">{unlockedLevel} / {totalLevels}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
                    {Array.from({ length: totalLevels }, (_, i) => i + 1).map((level) => {
                      const isUnlocked = level <= unlockedLevel;
                      const isCurrent = level === unlockedLevel;
                      const isCompleted = level < unlockedLevel;
                      
                      return (
                        <button
                          key={level}
                          onClick={() => isUnlocked && onSelectLevel(paper, level)}
                          disabled={!isUnlocked}
                          className={`
                            relative group aspect-square rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-300
                            ${isCurrent 
                              ? 'bg-slate-900 border-slate-900 text-white shadow-xl scale-105 z-10' 
                              : isCompleted 
                                ? 'bg-white border-slate-200 text-slate-900 hover:border-slate-400' 
                                : 'bg-slate-50 border-slate-100 text-slate-200 cursor-not-allowed'}
                          `}
                        >
                          <div className="absolute top-3 right-3">
                            {isCompleted ? <Star size={14} fill="currentColor" /> : !isUnlocked ? <Lock size={14} /> : <Zap size={14} />}
                          </div>
                          
                          <span className={`text-4xl font-display font-black mb-1 ${isCurrent ? 'text-white' : isCompleted ? 'text-slate-900' : 'text-slate-300'}`}>
                            {level}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                            {isUnlocked ? 'Level' : 'Locked'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : activeTab === 'toolkit' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Mnemonics */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white rounded-2xl p-10 border border-slate-200">
                <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-900">
                    <Lightbulb size={20} />
                  </div>
                  Master Mnemonics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MNEMONICS.map((m, i) => (
                    <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-white transition-all duration-300 group">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{m.topic}</p>
                      <p className="text-xl font-display font-black text-slate-900 group-hover:text-slate-900 transition-colors mb-3">"{m.mnemonic}"</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{m.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Schedule */}
              <div className="bg-white rounded-2xl p-10 border border-slate-200">
                <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-900">
                    <Calendar size={20} />
                  </div>
                  4-Week Study Schedule
                </h3>
                <div className="space-y-8">
                  {Object.entries(STUDY_SCHEDULE).map(([week, data]) => (
                    <div key={week} className="relative pl-8 border-l-2 border-slate-100 space-y-4">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-900"></div>
                      <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">{week.replace('week', 'Week ')}: {data.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.days.map((d, i) => (
                          <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-white hover:border-slate-300 transition-all">
                            <span className="text-[10px] font-black bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 shrink-0">Day {d.day}</span>
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
              <div className="bg-slate-900 rounded-2xl p-10 text-white relative overflow-hidden">
                <h3 className="text-2xl font-display font-black mb-8 flex items-center gap-3">
                  <Brain className="text-white" size={24} />
                  Leitner System
                </h3>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">
                  The ultimate spaced repetition algorithm. Master content by moving it through boxes based on recall accuracy.
                </p>
                <div className="space-y-4">
                  {LEITNER_SYSTEM.map((box) => (
                    <div key={box.box} className="flex items-center gap-5 bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center font-black text-xl text-white border border-white/5">
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

              <div className="bg-white rounded-2xl p-10 border border-slate-200">
                <h3 className="text-2xl font-display font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Zap className="text-slate-900" size={24} />
                  Techniques
                </h3>
                <div className="space-y-6">
                  {STUDY_TECHNIQUES.map((tech, i) => (
                    <div key={i} className="group">
                      <div className="font-black text-slate-900 mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                        {tech.name}
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed pl-3.5 border-l border-slate-100 group-hover:border-slate-300 transition-colors">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-10 animate-slide-up">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-display font-black text-slate-900 flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-lg text-slate-900">
                  <ShieldCheck size={20} />
                </div>
                Admin Dashboard
              </h3>
              <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Guests: </span>
                <span className="text-sm font-black text-slate-900">{guests.length}</span>
              </div>
            </div>

            {/* Admin Stats Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <BarChart3 size={14} /> Login Frequency (Last 10)
                </h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={guests.slice(-10)}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="username" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                        cursor={{ fill: '#f8fafc' }}
                      />
                      <Bar dataKey="timestamp" fill="#0f172a" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <Users size={14} /> Unique Users
                </h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Object.entries(guests.reduce((acc, g) => {
                          acc[g.username] = (acc[g.username] || 0) + 1;
                          return acc;
                        }, {} as Record<string, number>)).map(([user, count]) => ({ name: user, value: count }))}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {guests.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={['#0f172a', '#334155', '#475569', '#64748b', '#94a3b8'][index % 5]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Logs Table */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Guest Login Details</h4>
                {isLoadingGuests && <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent"></div>}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">User</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Timestamp</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">User Agent</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">IP Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.length > 0 ? [...guests].reverse().map((guest, i) => (
                      <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-black text-xs">
                              {guest.username[0].toUpperCase()}
                            </div>
                            <span className="text-sm font-black text-slate-700">{guest.username}</span>
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-2 text-slate-500">
                            <Clock size={14} />
                            <span className="text-xs font-medium">{new Date(guest.timestamp).toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="p-6">
                          <span className="text-[10px] font-medium text-slate-400 truncate max-w-[200px] block">{guest.userAgent}</span>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-2 text-slate-400">
                            <MapPin size={14} />
                            <span className="text-xs font-mono">{guest.ip || 'Unknown'}</span>
                          </div>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={4} className="p-12 text-center text-slate-400 italic text-sm">No guest logs found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
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
        </div>
      </div>
    </div>
  );
};
