
import React from 'react';
import { HOTEL_ADDRESS, LOCATION_CODE } from '../constants';

const LocationView: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_ADDRESS)}`;

  return (
    <div className="pt-32 pb-24 bg-luxury-dark px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-serif italic text-2xl mb-2">Find Us</h2>
          <h1 className="text-5xl font-serif font-black mb-8">Our Location</h1>
          <div className="w-24 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-sm">
              <h3 className="text-gold font-serif text-xl mb-4">Address</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {HOTEL_ADDRESS}
              </p>
              <h3 className="text-gold font-serif text-xl mb-4">Plus Code</h3>
              <p className="text-neutral-400 text-sm mb-8 font-mono">
                {LOCATION_CODE}
              </p>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 gold-gradient text-black font-bold uppercase tracking-widest text-xs transition-transform active:scale-95"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-sm">
              <h3 className="text-gold font-serif text-xl mb-6">Proximity</h3>
              <ul className="space-y-4">
                {[
                  { place: 'Delta State University', dist: '5 mins' },
                  { place: 'Eku Road Intersection', dist: '2 mins' },
                  { place: 'Ethiope River Resorts', dist: '10 mins' },
                  { place: 'Abraka Market', dist: '7 mins' }
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm py-2 border-b border-neutral-800">
                    <span className="text-neutral-300 font-medium">{item.place}</span>
                    <span className="text-neutral-500">{item.dist}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 h-[600px] bg-neutral-900 border border-neutral-800 relative rounded-sm overflow-hidden group">
            {/* Placeholder for Map - would normally be an iFrame */}
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              <div className="text-center z-10 px-8">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/40 animate-pulse">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2">Grand Cuba Hotel & Suites</h4>
                <p className="text-neutral-500 text-sm mb-6">Omena Close, Abraka</p>
                <a 
                  href={googleMapsUrl}
                  target="_blank" 
                  className="text-amber-500 border-b border-amber-500 pb-1 text-xs uppercase tracking-widest font-bold hover:text-white hover:border-white transition-all"
                >
                  View on Interactive Map
                </a>
              </div>
              
              {/* Decorative "Map" background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                   {Array.from({length: 144}).map((_, i) => (
                     <div key={i} className="border border-neutral-600/20"></div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationView;
