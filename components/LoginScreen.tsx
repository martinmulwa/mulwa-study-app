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
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 w-full max-w-md p-8 md:p-10 relative z-10 animate-scale-in">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="bg-slate-900 p-5 rounded-xl text-white">
              <GraduationCap size={44} />
            </div>
            <div className="absolute -top-2 -right-2 bg-amber-400 p-2 rounded-full text-white shadow-sm">
              <Sparkles size={16} />
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Mulwa Prep</h1>
          <p className="text-slate-500 font-medium">Your Journey to Nursing Excellence</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
          <button 
            onClick={() => { setIsGuest(true); setError(''); }}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${isGuest ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Guest Access
          </button>
          <button 
            onClick={() => { setIsGuest(false); setError(''); }}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${!isGuest ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Admin Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
              {isGuest ? 'Your Name' : 'Admin Username'}
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-slate-900 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                placeholder={isGuest ? "What's your name?" : "Enter admin username"}
                required
              />
            </div>
          </div>

          {!isGuest && (
            <div className="space-y-2 animate-slide-down">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-slate-900 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-rose-50 text-rose-600 text-sm font-bold rounded-xl text-center border border-rose-100 animate-shake">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-5 rounded-xl font-black text-lg hover:bg-slate-800 transition-all active:scale-[0.97] flex items-center justify-center gap-3 group overflow-hidden relative"
          >
            <span className="relative z-10">{isGuest ? 'Start Studying' : 'Admin Portal'}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={14} />
            <span>Secure Learning Environment</span>
          </div>
        </div>
      </div>
      
      {/* Footer Credit */}
      <div className="absolute bottom-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
        MULWA <span className="text-slate-300">😎</span>
      </div>
    </div>
  );
};
