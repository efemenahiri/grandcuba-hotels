
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [booking, setBooking] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'all'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for ${booking.guests} guests from ${booking.checkIn} to ${booking.checkOut}...`);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] grid grid-cols-1 md:grid-cols-4 gap-6 rounded-sm"
    >
      <div className="flex flex-col space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">Check-In</label>
        <input 
          type="date" 
          value={booking.checkIn}
          onChange={(e) => setBooking({...booking, checkIn: e.target.value})}
          className="bg-neutral-800 border border-neutral-700 p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">Check-Out</label>
        <input 
          type="date" 
          value={booking.checkOut}
          onChange={(e) => setBooking({...booking, checkOut: e.target.value})}
          className="bg-neutral-800 border border-neutral-700 p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">Guests</label>
        <select 
          value={booking.guests}
          onChange={(e) => setBooking({...booking, guests: e.target.value})}
          className="bg-neutral-800 border border-neutral-700 p-3 text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none"
        >
          <option value="1">1 Adult</option>
          <option value="2">2 Adults</option>
          <option value="3">3 Adults</option>
          <option value="4">4+ Adults</option>
        </select>
      </div>
      <div className="flex flex-col justify-end">
        <button 
          type="submit"
          className="gold-gradient w-full py-3.5 text-black font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-lg active:translate-y-0.5"
        >
          Check Availability
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
