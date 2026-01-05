
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import RoomsView from './views/RoomsView';
import AboutView from './views/AboutView';
import LocationView from './views/LocationView';
import ContactView from './views/ContactView';
import ConciergeChat from './components/ConciergeChat';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomeView onNavigate={setCurrentPage} />;
      case Page.ROOMS:
        return <RoomsView />;
      case Page.ABOUT:
        return <AboutView />;
      case Page.LOCATION:
        return <LocationView />;
      case Page.CONTACT:
        return <ContactView />;
      default:
        return <HomeView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <Navbar currentPage={currentPage} />
      
      <main className="flex-grow">
        <div className="animate-fadeIn">
          {renderPage()}
        </div>
      </main>

      <Footer />
      
      <ConciergeChat />
      
      {/* Scroll to top button (optional helper) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 bg-neutral-800/80 hover:bg-neutral-700 p-3 rounded-full border border-neutral-600 transition-all z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default App;
