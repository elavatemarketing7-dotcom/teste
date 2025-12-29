
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_NAME } from '../constants';
import { QuizAnswers } from '../types';

interface QuizOverlayProps {
  onFinish: (answers: QuizAnswers) => void;
  onCancel: () => void;
}

const QuizOverlay: React.FC<QuizOverlayProps> = ({ onFinish, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentStep].id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        onFinish(newAnswers);
      }, 500);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
        {/* Quiz Header */}
        <div className="bg-emerald-deep p-6 text-white text-center relative">
          <button 
            onClick={onCancel}
            className="absolute top-4 right-4 text-emerald-200 active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-xs uppercase tracking-tighter opacity-70 mb-1">Avaliação Exclusiva</p>
          <h2 className="font-serif text-xl font-bold">Dra. {EXPERT_NAME}</h2>
          
          {/* Progress Bar */}
          <div className="mt-4 w-full h-1.5 bg-emerald-900/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-400 transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Body */}
        <div className="p-8">
          <span className="inline-block text-emerald-600 font-bold text-sm mb-2">
            Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <h3 className="text-xl font-bold text-gray-800 mb-8 leading-tight">
            {QUIZ_QUESTIONS[currentStep].question}
          </h3>

          <div className="space-y-3">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 active:scale-95 ${
                  answers[QUIZ_QUESTIONS[currentStep].id] === option 
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800' 
                    : 'border-gray-100 hover:border-emerald-200 text-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {answers[QUIZ_QUESTIONS[currentStep].id] === option && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Footer */}
        <div className="px-8 pb-6 text-center">
            <button 
                onClick={onCancel}
                className="text-gray-400 text-xs font-medium hover:text-emerald-600"
            >
                Prefiro ir direto para o site
            </button>
        </div>
      </div>
    </div>
  );
};

export default QuizOverlay;
