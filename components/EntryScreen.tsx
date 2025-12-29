
import React from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';

interface EntryScreenProps {
  onStartQuiz: () => void;
  onGoDirect: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onStartQuiz, onGoDirect }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-emerald-deep overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-emerald-900 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-emerald-700 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 w-full max-w-md text-center flex flex-col items-center">
        <div className="w-52 h-52 mb-8 moldura-circle flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img 
              src={IMAGES.hero} 
              alt={EXPERT_NAME} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-white mb-2 leading-tight">
          Bem-vinda ao universo de <br/>
          <span className="font-bold text-emerald-300">{EXPERT_NAME}</span>
        </h1>
        
        <p className="text-emerald-100/80 mb-10 text-lg">
          Como posso ajudar a transformar sua autoestima hoje?
        </p>

        <div className="w-full space-y-4">
          <button 
            onClick={onStartQuiz}
            className="w-full py-5 bg-white text-emerald-900 font-bold rounded-2xl shadow-xl transform active:scale-95 transition-all text-lg flex items-center justify-center gap-3"
          >
            <span>Quero uma Avaliação Personalizada</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <button 
            onClick={onGoDirect}
            className="w-full py-4 text-emerald-200 font-medium underline underline-offset-4 decoration-emerald-200/30 active:opacity-60 transition-all"
          >
            Acessar site direto
          </button>
        </div>
        
        <p className="mt-8 text-xs text-emerald-300/60 uppercase tracking-widest font-semibold">
          Exclusividade • Naturalidade • Ciência
        </p>
      </div>
    </div>
  );
};

export default EntryScreen;
