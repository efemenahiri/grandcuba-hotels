
import React from 'react';
import { Page } from '../types';
import BookingForm from '../components/BookingForm';

interface HomeViewProps {
  onNavigate: (page: Page) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Hotel Exterior"
            className="w-full h-full object-cover scale-105 animate-slowZoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-luxury-dark"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <h2 className="text-amber-500 uppercase tracking-[0.5em] text-sm md:text-base mb-4 animate-fadeInDown font-medium">
            Discover Abraka's Finest
          </h2>
          <h1 className="text-5xl md:text-8xl font-black font-serif mb-6 leading-tight animate-fadeInUp">
            Experience <span className="text-gold italic">Luxury</span> & <br /> Comfort Redefined
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fadeInUp delay-200">
            Grand Cuba Hotel & Suites offers an exquisite blend of sophisticated design, 
            premium amenities, and world-class service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp delay-300">
            <button 
              onClick={() => onNavigate(Page.ROOMS)}
              className="px-10 py-4 gold-gradient text-black font-bold uppercase tracking-widest text-sm rounded-sm hover:brightness-110 shadow-2xl transition-all active:scale-95"
            >
              Explore Our Suites
            </button>
            <button 
              onClick={() => onNavigate(Page.ABOUT)}
              className="px-10 py-4 border border-white text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-black transition-all active:scale-95"
            >
              The Experience
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <div className="relative z-20 -mt-16 px-6 lg:px-12">
        <BookingForm />
      </div>

      {/* Featured Features Section */}
      <section className="py-24 px-6 lg:px-12 bg-luxury-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500 z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Lifestyle"
                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-amber-500 font-serif text-2xl italic mb-4">Unrivaled Hospitality</h3>
              <h2 className="text-4xl md:text-5xl font-black font-serif mb-8 leading-tight">Your Private Sanctuary in Abraka</h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                Nestled in the vibrant heart of Delta State, Grand Cuba Hotel & Suites provides a world of calm elegance. 
                Whether you're here for a weekend getaway or a corporate event, our spaces are crafted to 
                inspire and rejuvenate.
              </p>
              <ul className="grid grid-cols-2 gap-6 mb-10">
                {['24/7 Power Supply', 'Secure Parking', 'Rooftop Bar', 'Event Hall', 'High-Speed Wi-Fi', 'Room Service'].map(f => (
                  <li key={f} className="flex items-center space-x-3 text-sm text-neutral-300">
                    <span className="w-2 h-2 gold-gradient rounded-full"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={`#${Page.ABOUT}`} className="inline-block text-amber-500 font-bold uppercase tracking-widest text-xs border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-all">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
