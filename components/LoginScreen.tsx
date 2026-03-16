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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Dynamic Flat Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-teal/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="bg-white rounded-[2.5rem] w-full max-w-md p-10 md:p-12 relative z-10 animate-scale-in">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="bg-slate-900 p-6 rounded-3xl text-white">
              <GraduationCap size={48} />
            </div>
            <div className="absolute -top-3 -right-3 bg-accent-amber p-2.5 rounded-full text-white">
              <Sparkles size={18} />
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-black text-slate-900 mb-3 tracking-tight">Mulwa Prep</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Nursing Excellence Redefined</p>
        </div>

        {/* Tab Switcher - Flat Style */}
        <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-10">
          <button 
            onClick={() => { setIsGuest(true); setError(''); }}
            className={`flex-1 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${isGuest ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Guest
          </button>
          <button 
            onClick={() => { setIsGuest(false); setError(''); }}
            className={`flex-1 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${!isGuest ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
              {isGuest ? 'Your Name' : 'Admin Username'}
            </label>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-slate-900 transition-colors" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-2xl focus:bg-white border-2 border-transparent focus:border-slate-900 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                placeholder={isGuest ? "Enter your name" : "Username"}
                required
              />
            </div>
          </div>

          {!isGuest && (
            <div className="space-y-3 animate-slide-down">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-slate-900 transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-2xl focus:bg-white border-2 border-transparent focus:border-slate-900 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-rose-50 text-rose-600 text-xs font-black rounded-2xl text-center animate-shake uppercase tracking-widest">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group"
          >
            <span>{isGuest ? 'Enter App' : 'Authenticate'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 pt-10 border-t border-slate-100 text-center">
          <div className="flex items-center justify-center gap-3 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck size={16} className="text-accent-teal" />
            <span>Encrypted Session</span>
          </div>
        </div>
      </div>
      
      {/* Footer Credit */}
      <div className="absolute bottom-8 text-slate-300 text-[10px] font-black uppercase tracking-[0.4em]">
        MULWA <span className="text-accent-teal">●</span> 2026
      </div>
    </div>
  );
};
