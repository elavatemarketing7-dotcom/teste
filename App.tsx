
import React, { useState, useEffect } from 'react';
import { ViewState, QuizAnswers } from './types';
import EntryScreen from './components/EntryScreen';
import QuizOverlay from './components/QuizOverlay';
import QuizResult from './components/QuizResult';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('ENTRY');
  const [answers, setAnswers] = useState<QuizAnswers>({});

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleStartQuiz = () => setView('QUIZ');
  const handleGoDirect = () => setView('MAIN_SITE');
  
  const handleFinishQuiz = (finalAnswers: QuizAnswers) => {
    setAnswers(finalAnswers);
    setView('RESULT');
  };

  const handleContinueToSite = () => setView('MAIN_SITE');

  return (
    <div className="min-h-screen selection:bg-emerald-100">
      {view === 'ENTRY' && (
        <EntryScreen onStartQuiz={handleStartQuiz} onGoDirect={handleGoDirect} />
      )}
      
      {view === 'QUIZ' && (
        <div className="relative">
          {/* Main Site is hidden underneath the quiz according to request */}
          <LandingPage isStatic />
          <QuizOverlay 
            onFinish={handleFinishQuiz} 
            onCancel={handleGoDirect} 
          />
        </div>
      )}

      {view === 'RESULT' && (
        <QuizResult 
          answers={answers} 
          onContinue={handleContinueToSite} 
        />
      )}

      {view === 'MAIN_SITE' && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
