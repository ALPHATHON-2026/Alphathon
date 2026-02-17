import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-white font-display animate-fade-in">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="video-overlay" />
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop"
          className="video-bg"
          alt="Ayurvedic Botanical Background"
        />
      </div>

      {/* Parallax Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float-slow z-10 pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float-medium z-10 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm group-hover:bg-primary transition-colors duration-300">
             <span className="material-symbols-outlined text-white text-sm">spa</span>
          </div>
          <span className="text-xl font-serif tracking-wide text-sand font-medium">AyurScan</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-sand/80">
          <a href="#" className="hover:text-white transition-colors duration-300">Philosophy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Features</a>
          <a href="#" className="hover:text-white transition-colors duration-300">About</a>
        </div>
        <Link
          to="/setup"
          className="px-5 py-2 rounded-full border border-sand/30 text-sand text-sm hover:bg-sand hover:text-primary-dark transition-all duration-300 backdrop-blur-sm"
        >
          Sign In
        </Link>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 flex-grow flex flex-col justify-center items-center text-center px-4">
        {/* Floating Tag */}
        <div className="mb-6 animate-fade-in">
           <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-widest uppercase text-sand/90">
             AI-Powered Wellness
           </span>
        </div>

        {/* Hero Text */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-sand mb-6 tracking-tight leading-tight drop-shadow-lg max-w-5xl mx-auto">
          Ancient Wisdom,<br />
          <span className="text-accent-leaf italic">Modern Insight.</span>
        </h1>

        <p className="text-sand/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
           Discover your unique dosha balance and receive personalized
           dietary guidance through the lens of Ayurveda.
        </p>

        {/* CTA Button */}
        <Link
          to="/setup"
          className="group relative px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(46,71,41,0.4)] hover:shadow-[0_0_30px_rgba(46,71,41,0.6)] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
            Begin Analysis
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </Link>
      </main>

      {/* Footer Info */}
      <footer className="relative z-20 pb-8 px-8 flex justify-between items-end max-w-7xl mx-auto w-full text-sand/60 text-xs tracking-wider uppercase">
        <div className="flex gap-4">
           <span>© 2024 AyurScan</span>
        </div>
        <div className="flex gap-4 items-center">
           <span>Scroll to Explore</span>
           <div className="h-px w-12 bg-sand/30"></div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
