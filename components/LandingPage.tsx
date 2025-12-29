
import React, { useState } from 'react';
import { 
  EXPERT_NAME, 
  EXPERT_ROLE, 
  IMAGES, 
  INSTAGRAM_URL 
} from '../constants';

interface LandingPageProps {
  isStatic?: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ isStatic = false }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const CTA_TEXT = "Agendar consulta gratuita";

  return (
    <div className={`w-full overflow-x-hidden ${isStatic ? 'pointer-events-none opacity-50 blur-sm scale-95 origin-center transition-all duration-700' : ''}`}>
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col bg-emerald-deep pt-12 pb-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-emerald-400 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative px-8 flex flex-col items-center">
          {/* Main Photo with Moldura */}
          <div className="w-full max-w-sm mb-12 moldura-premium">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={IMAGES.hero} 
                alt={EXPERT_NAME} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-emerald-400/20 backdrop-blur-md border border-emerald-400/30 px-4 py-1 rounded-full mb-4">
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">{EXPERT_ROLE}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-[1.1]">
              Eu sou a <span className="font-bold text-emerald-400">{EXPERT_NAME}</span>, <br/>
              e devolvo sua melhor versão com naturalidade.
            </h1>
            <p className="text-emerald-100/80 text-lg mb-8 max-w-md">
              Tratamentos exclusivos pensados para realçar o que você tem de melhor, sem excessos.
            </p>
            
            <div className="w-full max-w-sm">
              <button 
                className="block w-full py-5 bg-white text-emerald-900 font-bold rounded-2xl shadow-2xl shadow-black/30 hover:bg-emerald-50 active:scale-95 transition-all text-lg btn-pulse uppercase tracking-tight"
              >
                {CTA_TEXT}
              </button>
              <p className="text-emerald-300/60 text-xs mt-3 font-medium uppercase tracking-widest">
                Avaliação inicial sem compromisso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU SECTION */}
      <section className="py-20 px-8 bg-white overflow-hidden">
        <div className="max-w-xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full moldura-premium">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={IMAGES.authority[1]} 
                alt="Dra Vitória Lourenço" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2 block">Minha Trajetória</span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Apaixonada por cuidar <br/> de pessoas e elevar sua autoestima.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Acredito que a estética de elite não é sobre mudar quem você é, mas sim sobre remover o cansaço e devolver o brilho que o tempo ou o estresse ocultaram.
              </p>
              <p>
                Com anos de experiência em Vila Velha, desenvolvi um método que prioriza a harmonia facial e o bem-estat duradouro.
              </p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {['Resultados focados em naturalidade', 'Atendimento 100% personalizado', 'Tecnologias de última geração', 'Foco na segurança da paciente'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTADOS REAIS SECTION */}
      <section className="py-20 bg-emerald-50 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2 block">Galeria de Resultados</span>
          <h2 className="font-serif text-4xl font-bold text-emerald-950 mb-4">Transformações que inspiram</h2>
          <p className="text-gray-600 italic">Cada detalhe importa. Clique nas imagens para ampliar.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {IMAGES.proofs.map((src, idx) => (
            <div 
              key={idx} 
              className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-200 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`Resultado ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-400 text-xs max-w-md mx-auto">
          *Atenção: Os resultados podem variar de pessoa para pessoa. Fotos autorizadas por nossas pacientes.
        </div>
      </section>

      {/* POR QUE CONFIAR SECTION */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que confiar em mim?</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Avaliação Honesta", desc: "Só recomendo o que realmente trará benefício para o seu perfil.", icon: "💎" },
              { title: "Atendimento Comigo", desc: "Todo o seu acompanhamento é feito diretamente por mim, sem intermediários.", icon: "👩‍⚕️" },
              { title: "Transparência Total", desc: "Você entende cada etapa e cada produto utilizado na sua sessão.", icon: "✨" },
              { title: "Resultados Seguros", desc: "Protocolos validados cientificamente para sua total tranquilidade.", icon: "🛡️" },
              { title: "Foco no Natural", desc: "O meu maior elogio é quando as pessoas notam que você está melhor, mas não sabem o que você fez.", icon: "🍃" },
              { title: "Ambiente Exclusivo", desc: "Um espaço pensado para o seu conforto e privacidade em Vila Velha.", icon: "🏢" }
            ].map((card, idx) => (
              <div key={idx} className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="max-w-md mx-auto">
              <p className="text-gray-800 font-bold text-xl mb-6">Ainda tem dúvidas? Vamos conversar.</p>
              <button 
                className="inline-block px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:bg-emerald-700 active:scale-95 transition-all text-lg"
              >
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA SECTION */}
      <section className="py-20 bg-emerald-950 text-white px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-4">Sua jornada até o resultado</h2>
            <p className="text-emerald-200/70 uppercase tracking-widest text-xs font-bold">3 passos simples e rápidos</p>
          </div>
          
          <div className="space-y-12">
            {[
              { step: "01", title: "Agendamento da Consulta", desc: "Reserve seu horário para uma avaliação inicial exclusiva." },
              { step: "02", title: "Avaliação Gratuita", desc: "Escolhemos o melhor horário para sua primeira consulta sem custo." },
              { step: "03", title: "Plano Personalizado", desc: "Analisamos seu perfil e traçamos o melhor plano de tratamento para você." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-4xl font-serif font-bold text-emerald-500 opacity-50">{item.step}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-emerald-100/70 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-emerald-900/40 rounded-3xl border border-emerald-500/20 text-center">
            <p className="text-emerald-200 font-medium italic mb-2">"O primeiro passo para sua transformação não custa nada."</p>
            <p className="font-bold text-white text-lg">Aproveite sua Avaliação Gratuita.</p>
          </div>
        </div>
      </section>

      {/* MAIS PROVAS SECTION */}
      <section className="py-20 bg-white">
          <div className="px-6 mb-12 text-center">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2 block">Nos Bastidores</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Cuidado em cada detalhe</h2>
          </div>
          
          <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x no-scrollbar">
            {IMAGES.lifestyle.map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 h-96 rounded-3xl overflow-hidden shadow-xl snap-center relative group">
                <img src={src} alt="Experiência" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm font-medium">Atendimento de Excelência</p>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section className="py-24 px-8 bg-emerald-deep relative overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600 rounded-full blur-[120px] opacity-10"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8 leading-tight">
            Chegou a hora de investir no seu maior patrimônio: <span className="text-emerald-400 italic">Você.</span>
          </h2>
          <p className="text-emerald-100/80 text-xl mb-12">
            Clique no botão abaixo e garanta sua vaga para uma avaliação personalizada e gratuita.
          </p>
          
          <div className="w-full max-w-sm mx-auto">
            <button 
              className="block w-full py-6 bg-white text-emerald-900 font-bold rounded-2xl shadow-2xl hover:bg-emerald-50 active:scale-95 transition-all text-xl uppercase tracking-tighter btn-pulse"
            >
              Agendar Avaliação Grátis
            </button>
            <p className="text-emerald-300/40 text-xs mt-6 uppercase tracking-widest font-bold">
              Vila Velha - Espírito Santo
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-gray-100 text-center px-8">
        <div className="mb-6">
          <span className="font-signature text-4xl text-emerald-700 block mb-2">{EXPERT_NAME}</span>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{EXPERT_ROLE}</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
        
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados. <br/>
          Vila Velha - ES
        </p>
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
          <img 
            src={selectedImage} 
            alt="Ampliada" 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
