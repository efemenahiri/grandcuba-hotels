
import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-luxury-dark">
      {/* Narrative Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-amber-500 font-serif italic text-2xl mb-4">Our Heritage</h2>
            <h1 className="text-5xl font-serif font-black mb-8 leading-tight">Crafting Unforgettable Moments</h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6 font-light">
              Grand Cuba Hotel & Suites was born from a vision to bring international luxury standards to the heart of Delta State. We believe that true hospitality is an art form—one that requires attention to the smallest details.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
              From our architecture to our curated guest experiences, every element of Grand Cuba is designed to evoke a sense of home while providing the indulgence of a high-end resort.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">50+</h4>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Luxury Suites</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">100%</h4>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Guest Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop" 
               alt="About Us" 
               className="w-full h-[600px] object-cover rounded-sm border border-neutral-800 shadow-2xl relative z-10"
             />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-neutral-950 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">The Pillars of Grand Cuba</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'Excellence', desc: 'A commitment to world-class service standards in every guest interaction.' },
               { title: 'Privacy', desc: 'Secure and secluded spaces designed for relaxation and peaceful stays.' },
               { title: 'Culture', desc: 'Celebrating the warmth of Nigerian hospitality with a modern international twist.' }
             ].map((pillar, idx) => (
               <div key={idx} className="p-10 bg-neutral-900 border border-neutral-800 rounded-sm hover:border-amber-500 transition-all group">
                 <div className="w-12 h-12 gold-gradient rounded-full mb-8 mx-auto flex items-center justify-center text-black font-black">
                   0{idx + 1}
                 </div>
                 <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-gold">{pillar.title}</h3>
                 <p className="text-neutral-500 text-sm leading-relaxed font-light">{pillar.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
