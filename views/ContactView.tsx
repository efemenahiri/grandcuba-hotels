
import React, { useState } from 'react';
import { HOTEL_PHONE, HOTEL_ADDRESS } from '../constants';

const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been sent to our concierge.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 bg-luxury-dark px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-serif italic text-2xl mb-2">Get In Touch</h2>
          <h1 className="text-5xl font-serif font-black mb-8">Connect With Us</h1>
          <div className="w-24 h-1 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-6">Reservation Desk</h3>
              <p className="text-neutral-400 mb-6 font-light leading-relaxed">
                For direct bookings, event inquiries, or special corporate rates, our team is available 24/7.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Phone & WhatsApp</p>
                  <p className="text-xl font-bold">{HOTEL_PHONE}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-6">Headquarters</h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-amber-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Address</p>
                  <p className="text-lg leading-relaxed text-neutral-300">{HOTEL_ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-800">
               <h3 className="text-lg font-serif font-bold text-white mb-4">Follow Our Journey</h3>
               <div className="flex space-x-6">
                 {['Instagram', 'Facebook', 'Twitter'].map(s => (
                   <a key={s} href="#" className="text-neutral-500 hover:text-amber-500 transition-colors uppercase tracking-[0.2em] text-[10px] font-black">
                     {s}
                   </a>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-neutral-900/50 border border-neutral-800 p-10 rounded-sm shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-neutral-800 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-800 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Subject</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-neutral-800 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Inquiry Type"
                />
              </div>
              <div className="space-y-2 mb-10">
                <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Message</label>
                <textarea 
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-neutral-800 border border-neutral-700 p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 gold-gradient text-black font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:brightness-110 active:translate-y-0.5 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
