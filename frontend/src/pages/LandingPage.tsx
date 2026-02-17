import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-white font-display">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_wN2g4cuev7PBRR0kdAHQPqDJDQpyKGn71ARgIMhRafy_2OLJ-Be4XYyjtN4RoxecR4mzwCAE4vw6Sy3EfcgkLqtpuKP0a6konNc4gA5Kk74EXN6BC1PMxRBcw5nptGmqQsI7pS3hRKKQjkZOJkUIG2Oa_m_Bpwr7R3VLQ7eotIsE-taCXqFItgdi5joqtfMqrSD_KT-7LOxY-J4H_Z4vPpJpYHqw8FuAWCTjCfFpjEvyuJvs-9h2KdV_QHvYH63QpwmlJeHiiDeu"
          alt="Dark rippling water surface cinematic texture"
          className="video-bg opacity-80"
          data-alt="Dark moody rippling water background"
        />
        <div className="video-overlay"></div>
      </div>

      {/* Floating Botanical Elements (Parallax illusion) */}
      {/* Top Left Leaf */}
      <div className="absolute top-[-5%] left-[-5%] z-10 w-48 h-48 md:w-64 md:h-64 opacity-80 animate-float-slow pointer-events-none mix-blend-overlay">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkVIgJsiKw9XDUW2I6_jcGukjCUdZ2L2H0H96nO70hSJOTt9pue2uN0J-qXINkEyH6_Uqea7o8ubMR0-3n4v8KfAek_Vtt0tJ_BV6R6qS8xB2v8_iWTOPxL9kXTvEesXU9wJlGnW1OLF__GW7XjIf2VmRHihHDHThWaUq4j0_vzF5l0R93zz6J-gD2hdeYGzsUUxkGhX05IXhPAU9Z-PIbr-yR22jR4fAPernMF5hgrIM1fbqlCGApcoh_W5uy3VsYVx-91oc6Cr8r"
          alt="Abstract neem leaf silhouette"
          className="w-full h-full object-contain drop-shadow-2xl rounded-full mask-image"
          data-alt="Floating botanical neem leaf graphic"
          style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 70%)' }}
        />
      </div>

      {/* Bottom Right Lotus */}
      <div className="absolute bottom-[5%] right-[-2%] z-10 w-40 h-40 md:w-80 md:h-80 opacity-60 animate-float-medium pointer-events-none mix-blend-soft-light">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQ36yEQwMjXupyjSWhhCi2UG-vScDWYzy9TLZgqRgLWOUIAImvP9AA96z79zpHYXjKlekb_buRZBSE1Qfwcbh0KTofV9lTud9oNUPgiy6mCSxX9xQ8_EDeP7XwQM27j2Avjj-ErzL-2PbjXxX0lRLDKaQ4rIdlZ4K06xoBYzlTdYI1jLGf2dG6cJ8ZMC5KSOQFzYv-6mn70TJkigzHV1y-TlcnxWG1OONQxzzZdxGMjfgxn0IIsoCIk7V5h_LHX7O-xjcYzDPT24m"
          alt="Floating lotus flower"
          className="w-full h-full object-contain drop-shadow-2xl rounded-full"
          data-alt="Stylized floating lotus flower"
          style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 70%)' }}
        />
      </div>

      {/* Bottom Left Herb */}
      <div className="absolute bottom-[-10%] left-[10%] z-10 w-32 h-32 md:w-56 md:h-56 opacity-40 animate-float-fast pointer-events-none blur-[2px]">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Xulwg69Qvdk2Nt9xW0q1zIuHRS2nXTwWzMg0QOxfOuI3qSFlq7tMrK9AuFsH8-HVTWZJw5LzgwjHWQyFhvikCzklohm5dimf0EPgyePYwZx5LAjAKjG5S_SAS4updc_Ly8Tk-5EXqIf3S6pElXIXsOWMxOzlzHamPoip6uR5GCSmAYXTBVu7D0nHvkPNynVhGjnY16c9ww3UrufVs6anOvfEo59uMskTq6rvHHMXG6N1xKksCTrYyyF_3JTL7inzfAbr_B-2hpbv"
          alt="Blurred ashwagandha root"
          className="w-full h-full object-contain drop-shadow-xl rounded-full"
          data-alt="Blurred herbal root element"
          style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 70%)' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-3xl font-light">spa</span>
          <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] font-serif uppercase">
            Ayur | Veda
          </h2>
        </div>
        <button className="group flex items-center justify-center w-12 h-12 rounded-full glass-card hover:bg-primary/40 transition-all duration-300">
          <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">
            menu
          </span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="relative z-20 flex-grow flex flex-col items-center justify-center px-4 w-full h-full">
        {/* Glassmorphism Hero Card */}
        <div className="w-full max-w-[600px] glass-card rounded-2xl p-8 md:p-12 text-center flex flex-col gap-8 transform hover:scale-[1.01] transition-transform duration-500 ease-out">
          {/* Decorative Icon */}
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 mb-2">
            <span className="material-symbols-outlined text-white/80 text-2xl">water_drop</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight drop-shadow-lg">
              Discover Your <br />
              <span className="text-primary-100 italic font-light opacity-90">Inner Balance</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto font-display tracking-wide">
              Ancient wisdom meets modern diagnostics. Uncover your unique constitution through our
              AI-driven assessment.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center pt-4">
            <Link
              to="/setup"
              className="relative overflow-hidden group bg-primary hover:bg-[#3a5833] text-white px-8 py-4 rounded-lg w-full md:w-auto min-w-[240px] transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <span className="relative flex items-center justify-center gap-3 font-bold tracking-wide uppercase text-sm">
                Begin Your Dosha Analysis
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </Link>
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white uppercase tracking-widest border-b border-transparent hover:border-white/40 transition-all pb-0.5 mt-2"
            >
              Learn about the science
            </a>
          </div>
        </div>
      </main>

      {/* Footer / Indicators */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-end text-white/40 text-xs font-mono uppercase tracking-widest">
        <div className="hidden md:block">01 — Home</div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2 group cursor-pointer hover:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">self_improvement</span>
            <span>Vata</span>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-pointer hover:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">whatshot</span>
            <span>Pitta</span>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-pointer hover:text-white transition-colors">
            <span className="material-symbols-outlined text-xl">landscape</span>
            <span>Kapha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
