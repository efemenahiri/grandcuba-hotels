
import React from 'react';
import { ROOMS } from '../constants';
import RoomCard from '../components/RoomCard';

const RoomsView: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 bg-luxury-dark">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-amber-500 font-serif italic text-2xl mb-2">Our Accommodations</h2>
        <h1 className="text-5xl font-serif font-black mb-6">Suites & Villas</h1>
        <div className="w-24 h-1 gold-gradient mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-neutral-400 font-light leading-relaxed">
          Each room at Grand Cuba is a masterclass in modern comfort. From lush linens to high-tech entertainment, 
          we ensure your stay is as seamless as it is spectacular.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {ROOMS.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsView;
