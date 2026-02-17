import React from 'react';

interface DoshaOrbProps {
  vata: number;
  pitta: number;
  kapha: number;
  style?: React.CSSProperties;
}

export const DoshaOrb: React.FC<DoshaOrbProps> = ({ vata, pitta, kapha, style }) => {
  const total = vata + pitta + kapha;
  const vScale = (vata / total) * 1.6;
  const pScale = (pitta / total) * 1.6;
  const kScale = (kapha / total) * 1.6;

  return (
    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center pointer-events-none" style={style}>
      {/* SVG Filters for Liquid Effect */}
      <svg className="absolute w-0 h-0">
        <filter id="liquid-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>

      {/* Background Energy Glow */}
      <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-[100px] animate-pulse"></div>
      
      {/* Liquid Energy Container */}
      <div className="relative w-full h-full flex items-center justify-center" style={{ filter: 'url(#liquid-filter)' }}>
        {/* Vata - Air/Ether (Silver-Blue) */}
        <div 
          className="absolute w-64 h-64 bg-blue-300/30 rounded-full mix-blend-screen animate-float"
          style={{ 
            transform: `scale(${vScale}) translate(-10%, -5%)`,
            animationDuration: '18s',
            animationDelay: '-2s'
          }}
        ></div>
        
        {/* Pitta - Fire (Golden Amber) */}
        <div 
          className="absolute w-64 h-64 bg-amber-600/40 rounded-full mix-blend-screen animate-float"
          style={{ 
            transform: `scale(${pScale}) translate(5%, 10%)`,
            animationDuration: '22s',
            animationDelay: '-5s'
          }}
        ></div>
        
        {/* Kapha - Water/Earth (Emerald) */}
        <div 
          className="absolute w-64 h-64 bg-emerald-500/30 rounded-full mix-blend-screen animate-float"
          style={{ 
            transform: `scale(${kScale}) translate(-5%, 5%)`,
            animationDuration: '25s',
            animationDelay: '-10s'
          }}
        ></div>
      </div>

      {/* Refined Glass Core */}
      <div className="absolute inset-0 m-auto w-40 h-40 rounded-full border border-white/10 bg-black/20 backdrop-blur-3xl flex flex-col items-center justify-center shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="z-10 text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 mb-1">Stability</div>
        <div className="z-10 text-xl font-serif italic text-white/80">{Math.round((vata + pitta + kapha) / 3)}%</div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: scale(1) translate(0%, 0%) rotate(0deg); border-radius: 50% 50% 50% 50%; }
          25% { transform: scale(1.1) translate(5%, -5%) rotate(5deg); border-radius: 40% 60% 50% 50%; }
          50% { transform: scale(0.9) translate(-5%, 10%) rotate(-5deg); border-radius: 60% 40% 50% 50%; }
          75% { transform: scale(1.05) translate(10%, 5%) rotate(2deg); border-radius: 50% 50% 60% 40%; }
          100% { transform: scale(1) translate(0%, 0%) rotate(0deg); border-radius: 50% 50% 50% 50%; }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
