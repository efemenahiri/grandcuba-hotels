
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { HOTEL_NAME, HOTEL_ADDRESS, HOTEL_PHONE, ROOMS } from '../constants';

const ConciergeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: `Welcome to Grand Cuba. I am your personal luxury concierge. How may I assist you with your stay in Abraka today?`}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleChat = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userText}]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `You are a sophisticated, polite, and helpful personal concierge for "${HOTEL_NAME}" located in Abraka, Delta State, Nigeria. 
          Your goal is to help guests book rooms, provide location info, and describe amenities. 
          Hotel Info:
          - Name: ${HOTEL_NAME}
          - Address: ${HOTEL_ADDRESS}
          - Phone: ${HOTEL_PHONE}
          - Available Rooms: ${ROOMS.map(r => `${r.name} (₦${r.price})`).join(', ')}
          
          Guidelines:
          - Use a tone that is helpful, professional, and luxurious.
          - If asked about local attractions, mention the Ethiope River or Abraka Turf.
          - Always remain polite and use high-end vocabulary (e.g., "certainly", "absolutely", "it would be our pleasure").
          - Keep responses relatively concise but thorough.`,
        }
      });

      const botText = response.text || "I apologize, I am having trouble connecting to the concierge desk. Please call us directly at 0707 235 0040.";
      setMessages(prev => [...prev, {role: 'bot', text: botText}]);
    } catch (error) {
      setMessages(prev => [...prev, {role: 'bot', text: "I'm sorry, I'm currently unavailable. Please reach out to our front desk for immediate assistance."}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="gold-gradient p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-black"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-neutral-900 border border-neutral-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] flex flex-col rounded-xl overflow-hidden animate-fadeInUp">
          <div className="gold-gradient p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                 <span className="text-amber-500 font-bold text-xs">GC</span>
              </div>
              <div>
                <h4 className="text-black font-black text-xs uppercase tracking-widest">Concierge</h4>
                <div className="flex items-center space-x-1">
                   <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
                   <span className="text-[10px] text-black/70 font-bold uppercase">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow h-96 overflow-y-auto p-4 space-y-4 no-scrollbar bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    m.role === 'user' 
                      ? 'bg-amber-600 text-white rounded-tr-none' 
                      : 'bg-neutral-800 text-neutral-200 rounded-tl-none border border-neutral-700'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-3 rounded-lg rounded-tl-none border border-neutral-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-neutral-950 border-t border-neutral-800">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChat()}
                placeholder="Type your inquiry..."
                className="flex-grow bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-amber-500"
              />
              <button 
                onClick={handleChat}
                disabled={isLoading}
                className="bg-amber-500 text-black p-2 rounded-lg hover:brightness-110 disabled:opacity-50 transition-all"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[8px] text-neutral-600 mt-2 text-center uppercase tracking-widest font-bold">
              Powered by Grand Cuba AI
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConciergeChat;
