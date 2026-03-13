
import React, { useState } from 'react';
import { Question } from '../types';
import { Check, X, BookOpen, Tag, Lightbulb, GraduationCap, Star, ChevronDown, ChevronUp, Sparkles, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface QuizCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  showExplanation: boolean;
  userSelected: number | null;
  showRationale: boolean;
  onToggleRationale: () => void;
  onRateDifficulty: (rating: number) => void;
  difficultyRating: number | null;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  onAnswer,
  showExplanation,
  userSelected,
  showRationale,
  onToggleRationale,
  onRateDifficulty,
  difficultyRating
}) => {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden animate-slide-up transition-all duration-500">
        
        {/* Header: Tags & Meta */}
        <div className="px-6 pt-8 pb-4 md:px-10 flex flex-wrap justify-between items-center gap-3 border-b border-slate-100">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase bg-slate-900 text-white">
              {question.category}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase border border-slate-200 text-slate-600 bg-slate-50">
              <Tag size={10} className="mr-1.5" /> {question.topic}
            </span>
          </div>
          <span className="text-slate-300 font-mono text-[10px] font-bold">
            #{question.id}
          </span>
        </div>

        {/* Question Text */}
        <div className="px-6 py-8 md:px-10">
          <h2 className="font-display text-xl md:text-2xl font-black text-slate-800 leading-[1.4] mb-10">
            {question.text}
          </h2>

          {/* Options Grid */}
          <div className="grid gap-3 grid-cols-1">
            {question.options.map((option, idx) => {
              const isSelected = userSelected === idx;
              const isCorrect = idx === question.correctAnswerIndex;
              
              let cardClass = "relative w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start group ";
              let letterClass = "flex items-center justify-center w-10 h-10 rounded-lg text-sm font-black mr-4 shrink-0 transition-all duration-300 mt-0.5 ";

              if (showExplanation) {
                if (isCorrect) {
                  cardClass += "bg-emerald-50 border-emerald-500 z-10";
                  letterClass += "bg-emerald-500 text-white";
                } else if (isSelected) {
                  cardClass += "bg-rose-50 border-rose-400";
                  letterClass += "bg-rose-500 text-white";
                } else {
                  cardClass += "bg-slate-50 border-slate-100 opacity-70";
                  letterClass += "bg-slate-200 text-slate-400";
                }
              } else {
                cardClass += "bg-white border-slate-200 hover:border-slate-900 active:scale-[0.98] cursor-pointer";
                letterClass += "bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white";
              }

              return (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => !showExplanation && onAnswer(idx)}
                    className={cardClass}
                  >
                    <div className={letterClass}>{letters[idx]}</div>
                    <span className={`text-lg font-bold pr-10 leading-snug flex-1 ${showExplanation && isCorrect ? 'text-emerald-900' : 'text-slate-700'}`}>
                      {option}
                    </span>
                    
                    <div className="absolute right-4 top-6 flex items-center gap-2">
                      {showExplanation && isCorrect && <Check className="w-6 h-6 text-emerald-600 animate-scale-in" />}
                      {showExplanation && isSelected && !isCorrect && <X className="w-6 h-6 text-rose-600 animate-scale-in" />}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action / Memory Aid Area */}
        {showExplanation && (
          <div className="bg-slate-50 border-t border-slate-100 p-6 md:p-10 animate-slide-up space-y-8">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-center md:text-left">
                <p className="font-black text-slate-900 text-lg">Deep Dive</p>
                <p className="text-sm text-slate-500 font-medium">
                  {showRationale ? "Hide the full clinical rationale." : "Unlock the full clinical rationale and memory aids."}
                </p>
              </div>
              <button
                onClick={onToggleRationale}
                className={`w-full md:w-auto px-8 py-4 rounded-lg font-black text-sm transition-all flex items-center justify-center gap-2 active:scale-95 ${
                  showRationale 
                    ? 'bg-slate-800 text-white hover:bg-slate-900' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {showRationale ? (
                  <>
                    <ChevronUp className="w-5 h-5" /> Hide Explanation
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5" /> Show Explanation
                  </>
                )}
              </button>
            </div>

            {showRationale && (
              <div className="space-y-8 animate-slide-down">
                {/* Main Explanation */}
                <div className="bg-white rounded-2xl border border-slate-200 relative overflow-hidden">
                  <div className="px-8 pt-8 pb-4 border-b border-slate-100 flex items-center justify-between relative z-10">
                    <h4 className="font-black text-slate-900 flex items-center gap-3">
                      <div className="bg-slate-900 p-2.5 rounded-lg text-white">
                        <GraduationCap size={22} />
                      </div>
                      <span className="text-xl tracking-tight">Clinical Rationale</span>
                    </h4>
                  </div>

                  <div className="p-8 relative z-10">
                    <div className="prose prose-slate max-w-none 
                      prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                      prose-strong:text-slate-900 prose-strong:font-bold
                      prose-ul:my-8 prose-li:text-slate-700 prose-li:leading-relaxed prose-li:mb-4 prose-li:text-lg
                    ">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({node, ...props}) => (
                            <div className="overflow-x-auto my-8 rounded-xl border border-slate-200">
                              <table className="w-full border-collapse [&_tr:last-child_td]:border-b-0" {...props} />
                            </div>
                          ),
                          thead: ({node, ...props}) => <thead className="bg-slate-50" {...props} />,
                          th: ({node, ...props}) => <th className="p-4 text-slate-900 font-black text-xs uppercase tracking-[0.15em] text-left border-b border-slate-200" {...props} />,
                          td: ({node, ...props}) => <td className="p-4 text-slate-700 text-sm border-b border-slate-100 leading-relaxed" {...props} />,
                          tr: ({node, ...props}) => <tr className="hover:bg-slate-50/30 transition-colors" {...props} />,
                        }}
                      >
                        {question.explanation}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Memory Aid Card */}
                  {question.memoryTip && (
                    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
                      <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-xl border border-white/10">
                          <Lightbulb size={24} className="text-amber-400" />
                        </div>
                        <span className="font-black text-xs uppercase tracking-[0.3em] text-slate-400">Memory Hack</span>
                      </div>
                      
                      <div className="relative z-10">
                        <p className="text-white font-bold text-xl leading-relaxed italic">
                          "{question.memoryTip}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Difficulty Rating */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-center items-center group transition-colors duration-300">
                    <span className="font-black text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-8">Rate Question Difficulty</span>
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => onRateDifficulty(star)}
                          className={cn(
                            "p-3 rounded-xl transition-all duration-500 relative group/star",
                            difficultyRating && difficultyRating >= star 
                              ? 'bg-amber-50 text-amber-500 scale-110' 
                              : 'bg-slate-50 text-slate-300 hover:text-amber-400 hover:bg-amber-50/50'
                          )}
                        >
                          <Star 
                            size={32} 
                            fill={difficultyRating && difficultyRating >= star ? "currentColor" : "none"} 
                            strokeWidth={2.5} 
                          />
                        </button>
                      ))}
                    </div>
                    <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {difficultyRating ? `Rated ${difficultyRating}/5` : "Select a rating"}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Author Credit Removed as it is now fixed in App.tsx */}
          </div>
        )}
      </div>
    </div>
  );
};
