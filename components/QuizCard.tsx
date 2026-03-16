
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-[2.5rem] overflow-hidden animate-slide-up transition-all duration-500">
        
        {/* Header: Tags & Meta */}
        <div className="px-8 pt-10 pb-6 md:px-12 flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-4 py-2 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase bg-slate-900 text-white">
              {question.category}
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase bg-slate-100 text-slate-500">
              <Tag size={12} className="mr-2" /> {question.topic}
            </span>
          </div>
          <span className="text-slate-200 font-display text-xs font-black tracking-widest">
            REF: {question.id}
          </span>
        </div>

        {/* Question Text */}
        <div className="px-8 py-10 md:px-12">
          <h2 className="font-display text-2xl md:text-3xl font-black text-slate-900 leading-[1.3] mb-12">
            {question.text}
          </h2>

          {/* Options Grid - Modern Flat */}
          <div className="grid gap-4 grid-cols-1">
            {question.options.map((option, idx) => {
              const isSelected = userSelected === idx;
              const isCorrect = idx === question.correctAnswerIndex;
              
              let cardClass = "relative w-full text-left p-6 rounded-3xl transition-all duration-300 flex items-start group ";
              let letterClass = "flex items-center justify-center w-12 h-12 rounded-2xl text-sm font-black mr-5 shrink-0 transition-all duration-300 ";

              if (showExplanation) {
                if (isCorrect) {
                  cardClass += "bg-emerald-50 text-emerald-900";
                  letterClass += "bg-emerald-500 text-white";
                } else if (isSelected) {
                  cardClass += "bg-rose-50 text-rose-900";
                  letterClass += "bg-rose-500 text-white";
                } else {
                  cardClass += "bg-slate-50 opacity-40";
                  letterClass += "bg-slate-200 text-slate-400";
                }
              } else {
                cardClass += "bg-slate-50 hover:bg-slate-900 hover:text-white active:scale-[0.98] cursor-pointer";
                letterClass += "bg-white text-slate-400 group-hover:bg-white/10 group-hover:text-white";
              }

              return (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => !showExplanation && onAnswer(idx)}
                    className={cardClass}
                  >
                    <div className={letterClass}>{letters[idx]}</div>
                    <span className="text-lg font-bold pr-12 leading-snug flex-1">
                      {option}
                    </span>
                    
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      {showExplanation && isCorrect && <Check className="w-7 h-7 text-emerald-500 animate-scale-in" />}
                      {showExplanation && isSelected && !isCorrect && <X className="w-7 h-7 text-rose-500 animate-scale-in" />}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action / Memory Aid Area */}
        {showExplanation && (
          <div className="bg-slate-50 p-8 md:p-12 animate-slide-up space-y-10">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-[2rem]">
              <div className="text-center md:text-left">
                <p className="font-black text-slate-900 text-xl tracking-tight">Clinical Insight</p>
                <p className="text-xs text-slate-400 font-black uppercase tracking-widest mt-1">
                  {showRationale ? "Reviewing complete rationale" : "Unlock expert explanation"}
                </p>
              </div>
              <button
                onClick={onToggleRationale}
                className={`w-full md:w-auto px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95 ${
                  showRationale 
                    ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {showRationale ? (
                  <>
                    <ChevronUp className="w-5 h-5" /> Minimize
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5" /> Expand Rationale
                  </>
                )}
              </button>
            </div>

            {showRationale && (
              <div className="space-y-10 animate-slide-down">
                {/* Main Explanation */}
                <div className="bg-white rounded-[2.5rem] relative overflow-hidden">
                  <div className="px-10 pt-10 pb-6 border-b border-slate-50 flex items-center justify-between">
                    <h4 className="font-black text-slate-900 flex items-center gap-4">
                      <div className="bg-slate-900 p-3 rounded-2xl text-white">
                        <GraduationCap size={24} />
                      </div>
                      <span className="text-2xl tracking-tight">Rationale</span>
                    </h4>
                  </div>

                  <div className="p-10">
                    <div className="prose prose-slate max-w-none 
                      prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8 prose-p:text-lg prose-p:font-medium
                      prose-strong:text-slate-900 prose-strong:font-black
                      prose-ul:my-10 prose-li:text-slate-600 prose-li:leading-relaxed prose-li:mb-5 prose-li:text-lg prose-li:font-medium
                    ">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({node, ...props}) => (
                            <div className="overflow-x-auto my-10 rounded-[2rem] bg-slate-50 p-1">
                              <table className="w-full border-collapse" {...props} />
                            </div>
                          ),
                          thead: ({node, ...props}) => <thead className="bg-white/50" {...props} />,
                          th: ({node, ...props}) => <th className="p-6 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] text-left border-b border-slate-100" {...props} />,
                          td: ({node, ...props}) => <td className="p-6 text-slate-600 text-sm border-b border-slate-100/50 leading-relaxed font-bold" {...props} />,
                          tr: ({node, ...props}) => <tr className="hover:bg-white/30 transition-colors" {...props} />,
                        }}
                      >
                        {question.explanation}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Memory Aid Card */}
                  {question.memoryTip && (
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                      <div className="flex items-center gap-4 mb-8 relative z-10">
                        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-xl border border-white/10">
                          <Lightbulb size={28} className="text-accent-amber" />
                        </div>
                        <span className="font-black text-[10px] uppercase tracking-[0.4em] text-slate-400">Memory Hack</span>
                      </div>
                      
                      <div className="relative z-10">
                        <p className="text-white font-black text-2xl leading-relaxed italic tracking-tight">
                          "{question.memoryTip}"
                        </p>
                      </div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    </div>
                  )}

                  {/* Difficulty Rating */}
                  <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-center items-center group">
                    <span className="font-black text-slate-400 text-[10px] uppercase tracking-[0.4em] mb-10">Rate Difficulty</span>
                    <div className="flex justify-center gap-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => onRateDifficulty(star)}
                          className={cn(
                            "p-4 rounded-2xl transition-all duration-500 relative",
                            difficultyRating && difficultyRating >= star 
                              ? 'bg-accent-amber/10 text-accent-amber scale-110' 
                              : 'bg-slate-50 text-slate-200 hover:text-accent-amber hover:bg-accent-amber/5'
                          )}
                        >
                          <Star 
                            size={36} 
                            fill={difficultyRating && difficultyRating >= star ? "currentColor" : "none"} 
                            strokeWidth={3} 
                          />
                        </button>
                      ))}
                    </div>
                    <p className="mt-8 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                      {difficultyRating ? `Level ${difficultyRating} Challenge` : "Tap to rate"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
