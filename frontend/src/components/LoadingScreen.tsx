import React, { useState, useEffect } from 'react';

const MESSAGES = [
  "Synchronizing bio-energetic data...",
  "Consulting ancient diagnostic frameworks...",
  "Mapping pitta entropy through the neural net...",
  "Calibrating circadian rhythms...",
  "Synthesizing botanical interactions..."
];

export const LoadingScreen: React.FC = () => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020301] flex flex-col items-center justify-center">
      {/* Mystical Spinner */}
      <div className="relative w-32 h-32 mb-16">
        <div className="absolute inset-0 border border-amber-500/10 rounded-full"></div>
        <div className="absolute inset-0 border-t-2 border-amber-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border border-blue-500/5 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
        <div className="absolute inset-4 border-b-2 border-emerald-500/20 rounded-full animate-[spin_5s_linear_infinite]"></div>
        
        {/* Core Glow */}
        <div className="absolute inset-0 m-auto w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_20px_#f59e0b] animate-pulse"></div>
      </div>
      
      <div className="text-center px-6">
        <p className="font-serif italic text-amber-500 tracking-[0.5em] text-xs mb-4 uppercase transition-all duration-700">
          {MESSAGES[msgIndex]}
        </p>
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};
