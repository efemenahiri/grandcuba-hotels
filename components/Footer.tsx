
import React from 'react';
import { HOTEL_ADDRESS, HOTEL_PHONE, HOTEL_NAME, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-black tracking-tighter text-gold">
                GRAND CUBA
              </span>
              <span className="text-[8px] tracking-[0.4em] uppercase -mt-1 font-medium text-neutral-400">
                Hotel & Suites
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-light">
              Experience unparalleled luxury and warm Nigerian hospitality in the heart of Abraka. Your sanctuary of comfort awaits.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:border-amber-500 hover:text-amber-500 transition-all">
                   <span className="sr-only">{social}</span>
                   <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.page}>
                  <a href={`#${item.page}`} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6 tracking-wide">Contact Us</h4>
            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{HOTEL_ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{HOTEL_PHONE}</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6 tracking-wide">Newsletter</h4>
            <p className="text-neutral-500 text-sm mb-4">Stay updated with our latest offers and events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-neutral-900 border border-neutral-800 px-4 py-2 text-sm w-full focus:outline-none focus:border-amber-500"
              />
              <button className="gold-gradient px-4 py-2 text-black font-bold">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-900 text-center">
          <p className="text-neutral-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} {HOTEL_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
