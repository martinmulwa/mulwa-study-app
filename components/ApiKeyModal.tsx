import React, { useState, useEffect } from 'react';
import { Key, X, ArrowRight, Lock, Sparkles } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (key: string) => void;
  currentKey: string;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSave, currentKey }) => {
  const [key, setKey] = useState(currentKey);

  useEffect(() => {
    setKey(currentKey);
  }, [currentKey, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in border border-white/20 ring-1 ring-black/5">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-violet opacity-20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-inner">
                <Sparkles className="w-6 h-6 text-accent-violet" />
              </div>
              <h2 className="text-2xl font-display font-bold text-white">Unlock AI Tutor</h2>
              <p className="text-slate-300 text-sm">Supercharge your learning with Gemini AI</p>
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors bg-white/5 rounded-full p-1 hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Gemini API Key</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-accent-violet transition-colors" />
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Paste your key here (AIza...)"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-accent-violet/50 focus:border-accent-violet outline-none transition-all font-mono text-sm text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <button
            onClick={() => {
              onSave(key);
              onClose();
            }}
            className="w-full group relative flex items-center justify-center space-x-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-[0.98]"
          >
            <span>Activate Features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center text-xs text-slate-400">
             Don't have a key? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-accent-violet font-medium hover:underline decoration-2 underline-offset-2">Get one for free from Google</a>
          </p>
        </div>
      </div>
    </div>
  );
};