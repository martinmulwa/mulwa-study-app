
import React, { useState } from 'react';
import { Question } from '../types';
import { Check, X, BookOpen, Tag, Lightbulb, GraduationCap, Star, ChevronDown, ChevronUp } from 'lucide-react';

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
      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden animate-slide-up transition-all duration-500">
        
        {/* Header: Tags & Meta */}
        <div className="px-6 pt-8 pb-4 md:px-10 flex flex-wrap justify-between items-center gap-3 border-b border-slate-50">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase bg-slate-900 text-white shadow-lg shadow-slate-900/10">
              {question.category}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase border-2 border-primary-100 text-primary-600 bg-primary-50">
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
          <div className="grid gap-4 grid-cols-1">
            {question.options.map((option, idx) => {
              const isSelected = userSelected === idx;
              const isCorrect = idx === question.correctAnswerIndex;
              
              let cardClass = "relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-start group ";
              let letterClass = "flex items-center justify-center w-10 h-10 rounded-xl text-sm font-black mr-4 shrink-0 transition-all duration-300 mt-0.5 ";

              if (showExplanation) {
                if (isCorrect) {
                  cardClass += "bg-emerald-50 border-emerald-500 shadow-xl shadow-emerald-500/10 z-10";
                  letterClass += "bg-emerald-500 text-white";
                } else if (isSelected) {
                  cardClass += "bg-rose-50 border-rose-400";
                  letterClass += "bg-rose-500 text-white";
                } else {
                  cardClass += "bg-slate-50 border-slate-100 opacity-70";
                  letterClass += "bg-slate-200 text-slate-400";
                }
              } else {
                cardClass += "bg-white border-slate-100 hover:border-primary-400 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] cursor-pointer";
                letterClass += "bg-slate-100 text-slate-500 group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-12";
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
          <div className="bg-slate-50/50 border-t border-slate-100 p-6 md:p-10 animate-slide-up space-y-8">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="text-center md:text-left">
                <p className="font-black text-slate-900 text-lg">Deep Dive</p>
                <p className="text-sm text-slate-500 font-medium">
                  {showRationale ? "Hide the full clinical rationale." : "Unlock the full clinical rationale and memory aids."}
                </p>
              </div>
              <button
                onClick={onToggleRationale}
                className={`w-full md:w-auto px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 ${
                  showRationale 
                    ? 'bg-slate-800 text-white hover:bg-slate-900 shadow-slate-900/20' 
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-500/20'
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
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full -mr-12 -mt-12 opacity-50"></div>
                  <h4 className="font-black text-slate-900 mb-4 flex items-center gap-3 relative z-10">
                    <div className="bg-primary-100 p-2 rounded-xl text-primary-600">
                      <GraduationCap size={20} />
                    </div>
                    Clinical Explanation
                  </h4>
                  <p className="text-slate-700 leading-relaxed font-medium relative z-10 mb-8">
                    {question.explanation}
                  </p>

                  {/* Why Wrong / Option Analysis List */}
                  {question.whyWrong && question.whyWrong.length > 0 && (
                    <div className="space-y-6 relative z-10 border-t border-slate-100 pt-8">
                      <h5 className="font-black text-slate-900 text-sm mb-4">Why each option is wrong:</h5>
                      <div className="space-y-4">
                        {question.whyWrong.map((text, i) => {
                          // Dynamically determine the letter for the wrong option
                          const wrongOptionIndices = question.options
                            .map((_, idx) => idx)
                            .filter(idx => idx !== question.correctAnswerIndex);
                          const letter = letters[wrongOptionIndices[i]] || '';
                          
                          return (
                            <p key={i} className="text-sm leading-relaxed text-slate-600 font-medium">
                              <span className="font-bold text-slate-800">{letter}. {text.split(' — ')[0]}</span> — {text.split(' — ')[1] || text}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Memory Aid Card */}
                  {question.memoryTip && (
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-[2rem] p-8 text-white shadow-xl shadow-amber-500/20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                          <Lightbulb size={22} />
                        </div>
                        <span className="font-black text-xs uppercase tracking-[0.2em]">Memory Hack</span>
                      </div>
                      <p className="text-white font-bold text-lg leading-relaxed italic">
                        "{question.memoryTip}"
                      </p>
                    </div>
                  )}

                  {/* Difficulty Rating */}
                  <div className="bg-white rounded-[2rem] p-8 border border-slate-200 flex flex-col justify-center items-center shadow-sm">
                    <span className="font-black text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-6">Rate Difficulty</span>
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => onRateDifficulty(star)}
                          className={`p-2.5 rounded-2xl transition-all duration-300 ${difficultyRating && difficultyRating >= star ? 'bg-amber-50 text-amber-500 scale-110 shadow-lg shadow-amber-500/10' : 'bg-slate-50 text-slate-300 hover:text-amber-200 hover:bg-amber-50/30'}`}
                        >
                          <Star size={28} fill={difficultyRating && difficultyRating >= star ? "currentColor" : "none"} strokeWidth={2.5} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Author Credit */}
            <div className="pt-4 text-center">
               <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">MULWA 😎</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
