import React from 'react';

interface CinematicBackgroundProps {
  parallaxOffset?: number;
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({ parallaxOffset = 0 }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Deep Tone */}
      <div className="absolute inset-0 bg-[#020301]"></div>
      
      {/* Far Background: Deep Smoke (Slower Parallax) */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen transition-transform duration-500 ease-out"
        style={{ transform: `scale(1.2) translateY(${parallaxOffset * 0.05}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover blur-md brightness-[0.4] contrast-150"
          src="https://assets.mixkit.co/videos/preview/mixkit-smoke-moving-slowly-against-a-black-background-1588-large.mp4"
        ></video>
      </div>

      {/* Mid Ground: Golden Liquid Energy */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-color-dodge transition-transform duration-700 ease-out"
        style={{ transform: `scale(1.1) translateY(${parallaxOffset * 0.12}px)` }}
      >
         <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rotate-180 brightness-50 contrast-125"
          src="https://assets.mixkit.co/videos/preview/mixkit-golden-ink-mixing-with-water-on-a-black-background-44023-large.mp4"
        ></video>
      </div>

      {/* Foreground Textures: Deep Green Roots & Macro Particles */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-screen transition-transform duration-1000 ease-out"
        style={{ transform: `scale(1.05) translateY(${parallaxOffset * 0.25}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-10 blur-[2px]"
          alt="Macro botanical"
        />
      </div>

      {/* Lighting Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>
      
      {/* Global Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,1)]"></div>
    </div>
  );
};
