
import React, { useMemo, useState } from 'react';
import { UserProgress } from '../types';
import { PAPER_LEVELS, PAPER_TOTAL_LEVELS, DRILLS_HIERARCHY, QUESTIONS } from '../data/questions';
import { MNEMONICS, STUDY_SCHEDULE, STUDY_TECHNIQUES, LEITNER_SYSTEM } from '../data/toolkit';
import { Lock, Zap, TrendingUp, AlertCircle, BookOpen, Star, Trash2, Calendar, Lightbulb, Brain, ChevronRight, Award, Flame, Target, ShieldCheck, Users, BarChart3, Clock, MapPin, PlayCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

interface DashboardProps {
  username: string;
  progress: UserProgress;
  onSelectLevel: (paper: string, level: number) => void;
  onSelectTopic: (topic: string) => void; // Added onSelectTopic
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
export const Dashboard: React.FC<DashboardProps> = ({ username, progress, onSelectLevel, onSelectTopic, onResetProgress }) => {
  const [activeTab, setActiveTab] = useState<'campaign' | 'drills' | 'toolkit' | 'admin'>('campaign');
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

  // Group papers by section
  const papersBySection = useMemo(() => {
    const sections: Record<string, string[]> = {
      "Introductory Block": [],
      "Block 1": []
    };
    
    Object.keys(PAPER_LEVELS).forEach(paper => {
      // Find a question from this paper to determine its section
      const firstQ = QUESTIONS.find(q => q.sourcePaper === paper);
      if (firstQ) {
        sections[firstQ.section].push(paper);
      } else {
        // Fallback
        sections["Introductory Block"].push(paper);
      }
    });
    
    return sections;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 pb-32">
      <div className="max-w-7xl mx-auto space-y-8 animate-slide-up">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
              <Users size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-display font-black text-slate-900 tracking-tight">Hi, {username}</h1>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Nursing Excellence Hub</p>
            </div>
          </div>
          
          {/* Quick Stats Bar */}
          <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
            <div className="bg-white px-6 py-3 rounded-2xl flex items-center gap-3 shrink-0">
              <Flame size={18} className="text-accent-coral" />
              <div>
                <p className="text-xs font-black text-slate-900">{progress.bestStreak}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Streak</p>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl flex items-center gap-3 shrink-0">
              <Target size={18} className="text-accent-teal" />
              <div>
                <p className="text-xs font-black text-slate-900">{progress.questionsAnswered}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Solved</p>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl flex items-center gap-3 shrink-0">
              <Award size={18} className="text-accent-amber" />
              <div>
                <p className="text-xs font-black text-slate-900">Lvl {progress.level}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Rank</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Progress Card */}
          <div className="md:col-span-8 bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Current Standing</h2>
                  <p className="text-4xl font-display font-black text-white">Elite Practitioner</p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-xl border border-white/10">
                  <Zap className="text-accent-amber" size={28} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span>Experience Progress</span>
                  <span>{Math.round(xpProgress)}%</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div className="bg-white h-full rounded-full transition-all duration-1000" style={{ width: `${xpProgress}%` }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Next Rank: Level {progress.level + 1}</p>
                  <p className="text-[10px] text-white font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-lg">{xpToNextLevel} XP Needed</p>
                </div>
              </div>
            </div>
            {/* Abstract Background Shape */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Weak Areas Bento */}
          <div className="md:col-span-4 bg-white rounded-[2rem] p-8 flex flex-col justify-between">
             <div>
               <h2 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center gap-2">
                 <AlertCircle size={14} className="text-accent-coral" /> Focus Required
               </h2>
               <div className="space-y-6">
                 {weakAreas.length > 0 ? weakAreas.map((area, idx) => (
                   <div key={idx} className="space-y-2">
                     <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-900 truncate max-w-[160px] uppercase tracking-tight">{area.category}</span>
                       <span className="text-[10px] font-black text-accent-coral bg-rose-50 px-2 py-1 rounded-lg">{Math.round(area.accuracy)}%</span>
                     </div>
                     <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-slate-900 h-full rounded-full" style={{ width: `${area.accuracy}%` }}></div>
                     </div>
                   </div>
                 )) : (
                   <div className="text-center py-6">
                     <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic">No data yet</p>
                   </div>
                 )}
               </div>
             </div>
             <div className="mt-8 pt-6 border-t border-slate-50">
                <button className="w-full py-3 bg-slate-50 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-100 transition-colors">
                   View Detailed Analysis
                </button>
             </div>
          </div>
        </div>

        {/* Tab Navigation - Modern Flat */}
        <div className="flex p-1.5 bg-white rounded-2xl w-full md:w-fit">
          <button 
            onClick={() => setActiveTab('campaign')}
            className={`flex-1 md:flex-none px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'campaign' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Campaign
          </button>
          <button 
            onClick={() => setActiveTab('drills')}
            className={`flex-1 md:flex-none px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'drills' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Topic Drills
          </button>
          <button 
            onClick={() => setActiveTab('toolkit')}
            className={`flex-1 md:flex-none px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'toolkit' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Toolkit
          </button>
          {isAdmin && (
            <button 
              onClick={() => setActiveTab('admin')}
              className={`flex-1 md:flex-none px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'admin' ? 'bg-accent-coral text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Admin
            </button>
          )}
        </div>

        {activeTab === 'campaign' ? (
          <div className="space-y-16">
            {Object.entries(papersBySection).map(([section, papers]) => (
              <div key={section} className="space-y-12">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">{section}</h2>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-2">Section {section === "Introductory Block" ? "1" : "2"}</p>
                </div>
                
                <div className="space-y-12">
                  {papers.map((paper) => {
                    const totalLevels = PAPER_TOTAL_LEVELS[paper] || 0;
                    const unlockedLevel = progress.unlockedLevels[paper] || 1;
                    
                    return (
                      <div key={paper} className="space-y-8">
                        <div className="flex items-center justify-between px-2">
                          <h3 className="text-2xl font-display font-black text-slate-900 flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900">
                              <TrendingUp size={20} />
                            </div>
                            {paper}
                          </h3>
                          <div className="bg-white px-5 py-2.5 rounded-2xl">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mastery: </span>
                            <span className="text-xs font-black text-slate-900">{Math.round((unlockedLevel / totalLevels) * 100)}%</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-6">
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
                                  relative aspect-square rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300
                                  ${isCurrent 
                                    ? 'bg-slate-900 text-white scale-105 z-10' 
                                    : isCompleted 
                                      ? 'bg-white text-slate-900 hover:bg-slate-100' 
                                      : 'bg-slate-200/50 text-slate-300 cursor-not-allowed'}
                                `}
                              >
                                <div className="absolute top-4 right-4">
                                  {isCompleted ? <Star size={14} fill="currentColor" className="text-accent-amber" /> : !isUnlocked ? <Lock size={14} /> : <Zap size={14} className="text-accent-teal" />}
                                </div>
                                
                                <span className={`text-4xl font-display font-black mb-1 ${isCurrent ? 'text-white' : isCompleted ? 'text-slate-900' : 'text-slate-300'}`}>
                                  {level}
                                </span>
                                <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-60">
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
              </div>
            ))}
          </div>
        ) : activeTab === 'drills' ? (
          <div className="space-y-16">
            {Object.entries(DRILLS_HIERARCHY).map(([section, units]) => (
              <div key={section} className="space-y-12">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">{section} Drills</h2>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-2">Grouped by Unit & Topic</p>
                </div>
                
                {Object.entries(units).map(([unit, topics]) => (
                  <div key={unit} className="space-y-6">
                    <h3 className="text-xl font-display font-black text-slate-800 flex items-center gap-3">
                      <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 text-xs">
                        {unit.charAt(0)}
                      </span>
                      {unit}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(topics).map(([topic, subtopics]) => (
                        <button
                          key={topic}
                          onClick={() => onSelectTopic(topic)}
                          className="bg-white p-8 rounded-[2rem] text-left hover:bg-slate-900 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl relative overflow-hidden"
                        >
                          <div className="flex justify-between items-start mb-6">
                            <div className="bg-slate-50 group-hover:bg-white/10 p-4 rounded-2xl transition-colors">
                              <BookOpen size={24} className="text-slate-900 group-hover:text-white" />
                            </div>
                            <div className="bg-slate-50 group-hover:bg-white/10 px-4 py-2 rounded-xl transition-colors">
                              <span className="text-[10px] font-black uppercase tracking-widest">Start Drill</span>
                            </div>
                          </div>
                          <h4 className="text-xl font-display font-black mb-2 tracking-tight">{topic}</h4>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {Array.from(subtopics).slice(0, 3).map(st => (
                              <span key={st} className="text-[8px] font-black uppercase tracking-widest bg-slate-50 group-hover:bg-white/10 px-2 py-1 rounded-md transition-colors">
                                {st}
                              </span>
                            ))}
                            {subtopics.size > 3 && <span className="text-[8px] font-black uppercase tracking-widest opacity-50">+{subtopics.size - 3} more</span>}
                          </div>
                          
                          <div className="mt-8 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <PlayCircle size={16} className="text-accent-teal" />
                              <span className="text-[10px] font-black uppercase tracking-widest">10 Questions</span>
                            </div>
                            <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : activeTab === 'toolkit' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Mnemonics - Bento Style */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-10">
                <h3 className="text-3xl font-display font-black text-slate-900 mb-10 flex items-center gap-4">
                  <div className="bg-slate-50 p-3 rounded-2xl text-slate-900">
                    <Lightbulb size={24} />
                  </div>
                  Master Mnemonics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MNEMONICS.map((m, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 group">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">{m.topic}</p>
                      <p className="text-2xl font-display font-black text-slate-900 mb-4 leading-tight">"{m.mnemonic}"</p>
                      <p className="text-xs text-slate-500 font-bold leading-relaxed">{m.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Schedule - Bento Style */}
              <div className="bg-white rounded-[2.5rem] p-10">
                <h3 className="text-3xl font-display font-black text-slate-900 mb-10 flex items-center gap-4">
                  <div className="bg-slate-50 p-3 rounded-2xl text-slate-900">
                    <Calendar size={24} />
                  </div>
                  4-Week Roadmap
                </h3>
                <div className="space-y-10">
                  {Object.entries(STUDY_SCHEDULE).map(([week, data]) => (
                    <div key={week} className="space-y-6">
                      <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-[0.4em] flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                        {week.replace('week', 'Week ')}: {data.title}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.days.map((d, i) => (
                          <div key={i} className="flex items-center gap-5 bg-slate-50 p-6 rounded-3xl hover:bg-slate-100 transition-all">
                            <span className="text-[10px] font-black bg-white px-4 py-2 rounded-xl text-slate-900 shrink-0">Day {d.day}</span>
                            <span className="text-xs text-slate-600 font-black uppercase tracking-tight leading-snug">{d.topics}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Tools - Bento Style */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <h3 className="text-2xl font-display font-black mb-10 flex items-center gap-4">
                  <Brain className="text-accent-teal" size={28} />
                  Leitner
                </h3>
                <p className="text-xs text-slate-400 mb-10 leading-relaxed font-bold uppercase tracking-widest">
                  Spaced Repetition Mastery
                </p>
                <div className="space-y-4">
                  {LEITNER_SYSTEM.map((box) => (
                    <div key={box.box} className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                      <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-2xl text-white">
                        {box.box}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-1">{box.frequency}</p>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{box.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10">
                <h3 className="text-2xl font-display font-black text-slate-900 mb-10 flex items-center gap-4">
                  <Zap className="text-accent-amber" size={28} />
                  Techniques
                </h3>
                <div className="space-y-8">
                  {STUDY_TECHNIQUES.map((tech, i) => (
                    <div key={i} className="group">
                      <div className="font-black text-slate-900 mb-3 flex items-center gap-3 text-sm uppercase tracking-tight">
                        <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                        {tech.name}
                      </div>
                      <p className="text-xs text-slate-500 font-bold leading-relaxed pl-5 border-l-2 border-slate-50 group-hover:border-slate-200 transition-colors">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-3xl font-display font-black text-slate-900 flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl text-slate-900">
                  <ShieldCheck size={24} />
                </div>
                Admin Hub
              </h3>
              <div className="bg-white px-6 py-3 rounded-2xl">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Visitors: </span>
                <span className="text-sm font-black text-slate-900">{guests.length}</span>
              </div>
            </div>

            {/* Admin Stats Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[2.5rem]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 flex items-center gap-3">
                  <BarChart3 size={16} /> Activity Stream
                </h4>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={guests.slice(-10)}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="username" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '20px', border: 'none', backgroundColor: '#0f172a', color: '#ffffff', padding: '12px 20px' }}
                        itemStyle={{ color: '#ffffff', fontSize: '12px', fontWeight: 'bold' }}
                        cursor={{ fill: '#f8fafc' }}
                      />
                      <Bar dataKey="timestamp" fill="#0f172a" radius={[10, 10, 10, 10]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-10 rounded-[2.5rem]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 flex items-center gap-3">
                  <Users size={16} /> User Distribution
                </h4>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Object.entries(guests.reduce((acc, g) => {
                          acc[g.username] = (acc[g.username] || 0) + 1;
                          return acc;
                        }, {} as Record<string, number>)).map(([user, count]) => ({ name: user, value: count }))}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={8}
                        dataKey="value"
                      >
                        {guests.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={['#0f172a', '#334155', '#475569', '#64748b', '#94a3b8'][index % 5]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '20px', border: 'none', backgroundColor: '#0f172a', color: '#ffffff', padding: '12px 20px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Logs Table - Modern Flat */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden">
              <div className="p-10 border-b border-slate-50 flex justify-between items-center">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Visitor Logs</h4>
                {isLoadingGuests && <div className="animate-spin rounded-full h-5 w-5 border-3 border-slate-900 border-t-transparent"></div>}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">User</th>
                      <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Time</th>
                      <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Device</th>
                      <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.length > 0 ? [...guests].reverse().map((guest, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-8">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-black text-sm">
                              {guest.username[0].toUpperCase()}
                            </div>
                            <span className="text-sm font-black text-slate-900">{guest.username}</span>
                          </div>
                        </td>
                        <td className="p-8">
                          <div className="flex items-center gap-3 text-slate-500">
                            <Clock size={16} />
                            <span className="text-xs font-bold">{new Date(guest.timestamp).toLocaleTimeString()}</span>
                          </div>
                        </td>
                        <td className="p-8">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest truncate max-w-[180px] block">{guest.userAgent.split(' ')[0]}</span>
                        </td>
                        <td className="p-8">
                          <div className="flex items-center gap-3 text-slate-400">
                            <MapPin size={16} />
                            <span className="text-xs font-mono font-bold tracking-tighter">{guest.ip || '0.0.0.0'}</span>
                          </div>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={4} className="p-16 text-center text-slate-400 font-black uppercase tracking-widest text-xs italic">No logs available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer / Reset Area */}
        <div className="pt-16 flex flex-col items-center gap-8">
            <button 
              onClick={onResetProgress}
              className="group flex items-center gap-4 text-rose-500 bg-white hover:bg-rose-50 px-10 py-5 rounded-[2rem] font-black transition-all text-[10px] uppercase tracking-[0.3em]"
            >
                <Trash2 size={18} className="group-hover:rotate-12 transition-transform" />
                Reset Experience
            </button>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Mulwa Mastery ● 2026</p>
        </div>
      </div>
    </div>
  );
};
