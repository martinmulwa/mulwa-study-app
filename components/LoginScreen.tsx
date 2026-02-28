import React, { useState } from 'react';
import { Lock, User, ArrowRight, GraduationCap, Sparkles, ShieldCheck } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isGuest, setIsGuest] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim();
    
    if (!cleanUser) {
      setError('Please enter your name.');
      return;
    }

    if (!isGuest) {
      // Admin Login
      if (cleanUser.toLowerCase() === 'admin' && password === 'mulwa2026') {
        onLogin('Admin');
      } else {
        setError('Invalid admin credentials.');
      }
    } else {
      // Guest Login - Just name
      onLogin(cleanUser);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-200 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-teal/30 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] w-full max-w-md p-8 md:p-10 border border-white/50 relative z-10 animate-scale-in">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="bg-gradient-to-tr from-primary-600 to-indigo-500 p-5 rounded-[2rem] text-white shadow-2xl shadow-primary-500/40 transform -rotate-6">
              <GraduationCap size={44} />
            </div>
            <div className="absolute -top-2 -right-2 bg-amber-400 p-2 rounded-full text-white shadow-lg animate-bounce">
              <Sparkles size={16} />
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-black text-slate-900 mb-2 tracking-tight">Mulwa Prep</h1>
          <p className="text-slate-500 font-medium">Your Journey to Nursing Excellence</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-8">
          <button 
            onClick={() => { setIsGuest(true); setError(''); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${isGuest ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Guest Access
          </button>
          <button 
            onClick={() => { setIsGuest(false); setError(''); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${!isGuest ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Admin Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              {isGuest ? 'Your Name' : 'Admin Username'}
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                placeholder={isGuest ? "What's your name?" : "Enter admin username"}
                required
              />
            </div>
          </div>

          {!isGuest && (
            <div className="space-y-2 animate-slide-down">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-rose-50 text-rose-600 text-sm font-bold rounded-2xl text-center border border-rose-100 animate-shake">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-primary-700 transition-all shadow-2xl shadow-primary-500/30 active:scale-[0.97] flex items-center justify-center gap-3 group overflow-hidden relative"
          >
            <span className="relative z-10">{isGuest ? 'Start Studying' : 'Admin Portal'}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-tighter">
            <ShieldCheck size={14} />
            <span>Secure Learning Environment</span>
          </div>
        </div>
      </div>
      
      {/* Footer Credit */}
      <div className="absolute bottom-6 text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
        MULWA 😎
      </div>
    </div>
  );
};
