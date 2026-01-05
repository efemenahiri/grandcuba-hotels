
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { HOTEL_NAME, NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4 ${
        isScrolled ? 'bg-neutral-900/95 backdrop-blur-md shadow-2xl py-3 border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href={`#${Page.HOME}`} 
          className="flex flex-col items-center group"
        >
          <span className="text-2xl font-serif font-black tracking-tighter text-gold group-hover:scale-105 transition-transform">
            GRAND CUBA
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase -mt-1 font-medium text-neutral-400 group-hover:text-amber-500 transition-colors">
            Hotel & Suites
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.page}
              href={`#${item.page}`}
              className={`text-sm uppercase tracking-widest font-medium transition-all hover:text-amber-500 ${
                currentPage === item.page ? 'text-amber-500' : 'text-neutral-300'
              }`}
            >
              {item.label}
              {currentPage === item.page && (
                <div className="h-0.5 w-full gold-gradient mt-1 animate-scaleInHorizontal"></div>
              )}
            </a>
          ))}
          <a
            href={`#${Page.ROOMS}`}
            className="px-6 py-2.5 gold-gradient text-black font-semibold uppercase tracking-widest text-xs rounded-sm hover:brightness-110 transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            Book Stay
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neutral-300 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-neutral-950 z-40 transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.page}
              href={`#${item.page}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-widest text-neutral-300 hover:text-amber-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`#${Page.ROOMS}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-10 py-4 gold-gradient text-black font-bold uppercase tracking-widest rounded-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
