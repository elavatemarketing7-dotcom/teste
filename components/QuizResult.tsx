
import React from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';
import { QuizAnswers } from '../types';

interface QuizResultProps {
  answers: QuizAnswers;
  onContinue: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ answers, onContinue }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-0 md:p-6 overflow-x-hidden">
      <div className="w-full max-w-md bg-emerald-50 flex-grow md:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* Header Photo Section with Frame */}
        <div className="p-4 bg-emerald-deep">
          <div className="moldura-premium aspect-[4/5] w-full overflow-hidden rounded-sm">
            <div className="w-full h-full overflow-hidden">
              <img 
                src={IMAGES.hero} 
                alt={EXPERT_NAME}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="absolute top-10 left-0 right-0 text-center px-4 z-20">
          <span className="bg-emerald-400 text-emerald-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full animate-bounce">
            Avaliação Concluída
          </span>
        </div>

        {/* Content Section */}
        <div className="bg-white p-8 flex-grow -mt-4 rounded-t-3xl relative z-10 text-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="w-12 h-1 bg-emerald-100 rounded-full mx-auto mb-6"></div>
          
          <h2 className="text-emerald-900 text-2xl font-bold mb-1">Perfil Compatível.</h2>
          <p className="text-emerald-600 font-serif italic text-xl mb-6">Você é a paciente ideal.</p>

          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            Com base nas suas respostas, o Método da <span className="font-bold text-emerald-700">Dra. {EXPERT_NAME}</span> consegue entregar exatamente a <span className="font-semibold">naturalidade e segurança</span> que você procura.
          </p>

          <div className="space-y-4">
            <button 
              className="block w-full py-5 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:bg-emerald-700 active:scale-95 transition-all text-lg btn-pulse"
            >
              1. Enviar minha avaliação Dra.
            </button>

            <button 
              className="block w-full py-4 bg-emerald-50 text-emerald-700 font-bold rounded-2xl border border-emerald-100 active:scale-95 transition-all"
            >
              2. Agendar Avaliação
            </button>

            <button 
              onClick={onContinue}
              className="block w-full py-3 text-gray-400 text-sm font-medium hover:text-emerald-600 active:opacity-60 transition-all uppercase tracking-widest"
            >
              3. Continuar no site
            </button>
          </div>
        </div>

        {/* Small Trust Badge */}
        <div className="bg-emerald-50 p-4 text-center border-t border-emerald-100">
            <p className="text-[10px] text-emerald-800/60 uppercase font-bold tracking-widest">
                Exclusividade Garantida • Vila Velha - ES
            </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
