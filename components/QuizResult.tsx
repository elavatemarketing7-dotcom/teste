
import React from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';
import { QuizAnswers } from '../types';

interface QuizResultProps {
  answers: QuizAnswers;
  onContinue: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ answers, onContinue }) => {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-md h-full bg-emerald-50 flex flex-col relative overflow-hidden">
        
        {/* Header Photo Section - Compacted for Mobile */}
        <div className="relative h-[30vh] w-full overflow-hidden bg-emerald-deep">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
          
          <div className="absolute top-4 left-0 right-0 text-center z-20">
            <span className="bg-emerald-400 text-emerald-950 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-lg">
              Avaliação Concluída
            </span>
          </div>
        </div>

        {/* Content Section - Tightened spacing */}
        <div className="bg-white flex-grow -mt-6 rounded-t-[2.5rem] relative z-10 px-6 pt-5 pb-4 text-center shadow-[0_-8px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between">
          <div>
            <div className="w-10 h-1 bg-emerald-100 rounded-full mx-auto mb-4"></div>
            
            <h2 className="text-emerald-900 text-xl font-bold leading-tight">Perfil Compatível.</h2>
            <p className="text-emerald-600 font-serif italic text-lg mb-2">Você é a paciente ideal.</p>

            <p className="text-gray-600 leading-snug text-sm mb-4 px-2">
              Com base nas suas respostas, o Método da <span className="font-bold text-emerald-700">Dra. {EXPERT_NAME}</span> consegue entregar exatamente a <span className="font-semibold text-emerald-800">naturalidade e segurança</span> que você procura.
            </p>
          </div>

          <div className="space-y-2 mb-2">
            <button 
              className="block w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg active:scale-[0.98] transition-all text-base btn-pulse uppercase tracking-tight"
            >
              1. Enviar minha avaliação Dra.
            </button>

            <button 
              className="block w-full py-3 bg-emerald-50 text-emerald-700 font-bold rounded-xl border border-emerald-100 active:scale-[0.98] transition-all text-sm uppercase"
            >
              2. Agendar Avaliação
            </button>

            <button 
              onClick={onContinue}
              className="block w-full py-2 text-gray-400 text-[10px] font-bold hover:text-emerald-600 active:opacity-60 transition-all uppercase tracking-[0.2em]"
            >
              3. Continuar no site
            </button>
          </div>

          {/* Small Trust Badge - Fixed at bottom */}
          <div className="pt-2 border-t border-emerald-50">
              <p className="text-[8px] text-emerald-800/50 uppercase font-black tracking-widest">
                  Exclusividade Garantida • Vila Velha - ES
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
