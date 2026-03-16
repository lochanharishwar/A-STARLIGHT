import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SkyMap from './components/SkyMap';
import MLLab from './components/MLLab';
import Glossary from './components/Glossary';
import ExoJourney from './components/ExoJourney';
import AITutor from './components/AITutor';
import { Page } from './types';
import { MoonIcon, SunIcon, SparklesIcon } from './components/icons';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.SkyMap);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [tutorContext, setTutorContext] = useState<string>('');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    switch (currentPage) {
        case Page.SkyMap:
            setTutorContext('The user is on the Sky Map page, which contains interactive charts and data tables about various exoplanets.');
            break;
        case Page.MLLab:
            setTutorContext('The user is in the ML Lab, where they can classify exoplanet data and simulate machine learning model training by adjusting hyperparameters.');
            break;
        // ExoJourney context is set within the component itself.
        default:
             setTutorContext('The user is exploring the "A World Away" exoplanet application.');
    }
  }, [currentPage]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.SkyMap:
        return <SkyMap theme={theme} />;
      case Page.MLLab:
        return <MLLab />;
      case Page.ExoJourney:
        return <ExoJourney setTutorContext={setTutorContext} />;
      default:
        return <SkyMap theme={theme} />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} onGlossaryOpen={() => setIsGlossaryOpen(true)} />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderPage()}
      </main>
      <footer className="text-center p-4 text-xs text-gray-500">
        <p>A World Away: Exoplanet Explorer &copy; 2024. All data is for illustrative purposes.</p>
      </footer>
      <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start space-y-2">
         <button
            onClick={toggleTheme}
            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-fuchsia-400 transition-colors duration-200 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-purple-800/50"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
        <button
            onClick={() => setIsTutorOpen(true)}
            className="flex items-center text-violet-600 dark:text-fuchsia-300 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 dark:border-purple-800/50 font-semibold shadow-lg hover:scale-105 transition-transform"
            aria-label="Open AI Tutor"
        >
             <SparklesIcon className="w-5 h-5 mr-2" />
             Ask Cosmo
        </button>
      </div>
      <AITutor isOpen={isTutorOpen} onClose={() => setIsTutorOpen(false)} context={tutorContext} />
      <Glossary isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
    </div>
  );
};

export default App;