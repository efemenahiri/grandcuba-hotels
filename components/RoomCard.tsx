
import React from 'react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="group bg-neutral-950 border border-neutral-900 rounded-sm overflow-hidden flex flex-col hover:border-amber-500/50 transition-all duration-500 shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-amber-500 px-4 py-1.5 rounded-sm border border-amber-500/30 font-bold text-sm">
          ₦{room.price.toLocaleString()} <span className="text-[10px] text-neutral-400 uppercase font-light">/ Night</span>
        </div>
      </div>
      
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{room.name}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-light">
          {room.description}
        </p>
        
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4 font-bold">Amenities</p>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map(amenity => (
              <span key={amenity} className="text-[10px] bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-neutral-300">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <button className="w-full py-4 border border-neutral-700 group-hover:gold-gradient group-hover:text-black group-hover:border-transparent font-bold uppercase tracking-widest text-xs transition-all duration-300 active:scale-95">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
