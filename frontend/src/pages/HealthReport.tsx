import React from 'react';
import { Link } from 'react-router-dom';

const HealthReport: React.FC = () => {
  return (
    <div className="bg-forest-dark text-white font-display overflow-x-hidden min-h-screen flex flex-col selection:bg-primary selection:text-forest-dark animate-fade-in">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Abstract gradient blob 1 */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px]"></div>
        {/* Abstract gradient blob 2 */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#1a4a38]/20 rounded-full blur-[100px]"></div>
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Main Navigation */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6 w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">spa</span>
          <h1 className="text-2xl font-bold tracking-tight text-white">Ayurveda</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8 glass-card px-8 py-3 rounded-full">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          <Link to="/report" className="text-sm font-medium text-primary">
            Weekly Report
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
          >
            Consultations
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
          >
            Shop
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full glass-card hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white/80">notifications</span>
          </button>
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center border border-white/10"
            data-alt="Portrait of a woman looking serene"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzLTbY4A6_4QT__l6puyEj3WXjMEAlbNVTcUFzY4wZo39JT9qoqNMlmvsUovsYV771yDeKXp9LmHmDgzxGrSp3manQcot0XQu14s8N16rqPtRgc88wFIEmKC_4ldpqu6lHUxIbdWuvWOAlFbHZR6JdT4XPy8-dCMMy3lylOIpOQQScLYZcZOglNivcedyyofOahbEEuBzPZ9h0e62TbE29mF-u7Mo4peNNb88y6Mn8E25n1Ft19nUGEfcpWTp2bwxroUe0f-cQIZAZ')",
            }}
          ></div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="relative z-10 flex-grow w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-8 h-full">
        {/* Left Column: The Verdict Orb */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start relative min-h-[500px] lg:min-h-auto">
          <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
            {/* Glowing Aura */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full animate-pulse-glow"></div>
            {/* The Orb */}
            <div className="relative w-4/5 h-4/5 rounded-full bg-orb-gradient shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.5),0_0_50px_rgba(244,192,37,0.3)] animate-float flex items-center justify-center overflow-hidden">
              {/* Liquid texture simulation via CSS */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover animate-spin-slow"
                data-alt="Abstract liquid gold texture representing Pitta energy"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop')",
                  animationDuration: '60s',
                }}
              ></div>
              <div className="absolute bottom-10 flex flex-col items-center text-center">
                <span className="text-white/60 text-sm tracking-widest uppercase font-sans mb-1">
                  Current State
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                  Aggravated
                  <br />
                  Pitta
                </h2>
              </div>
            </div>
            {/* Floating Tags */}
            <div className="absolute top-[10%] right-[5%] glass-card px-4 py-2 rounded-full animate-float-delay">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide">High Heat</span>
              </div>
            </div>
            <div className="absolute bottom-[20%] left-[0%] glass-card px-4 py-2 rounded-full animate-float">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold tracking-wide">Acidity +12%</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <p className="text-white/70 text-lg font-light leading-relaxed">
              Your internal fire is burning aggressively this week. The liquid representation above
              indicates high viscosity and heat accumulation, suggesting a need for immediate
              cooling measures.
            </p>
          </div>
        </div>

        {/* Right Column: Report Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
          {/* Header for Right Side */}
          <div className="flex items-end justify-between mb-2">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-2">
                Weekly Impact
              </h2>
              <p className="text-primary text-lg font-medium">October 24 - October 30</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <span className="text-sm">Full History</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Blindspot Check Card */}
          <div className="glass-card rounded-xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <span className="material-symbols-outlined text-8xl text-white">visibility_off</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30">
                <span className="material-symbols-outlined text-3xl text-red-400">warning</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Blindspot Check: Hydration Gap</h3>
                <p className="text-white/70 font-sans leading-relaxed">
                  You've been consistently dehydrated during peak sun hours (12 PM - 2 PM). This
                  accelerates Pitta accumulation and increases irritability in the evenings.
                </p>
              </div>
              <button className="shrink-0 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors backdrop-blur-md border border-white/5">
                View Data
              </button>
            </div>
          </div>

          {/* Corrective Action Plan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Action Card 1 */}
            <div className="glass-card rounded-xl p-8 flex flex-col justify-between min-h-[240px] hover:border-primary/50 transition-colors cursor-pointer group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    self_improvement
                  </span>
                  <span className="text-xs font-bold bg-primary/20 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                    Priority
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  Sheetali Breathwork
                </h3>
                <p className="text-white/60 text-sm font-sans">
                  Cooling breath practice. Curl your tongue and inhale deeply through the mouth.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary"></div>
                </div>
                <span className="text-xs text-white/50">2/7 days</span>
              </div>
            </div>

            {/* Action Card 2 */}
            <div className="glass-card rounded-xl p-8 flex flex-col justify-between min-h-[240px] hover:border-primary/50 transition-colors cursor-pointer group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">bedtime</span>
                  <span className="text-xs font-bold bg-white/10 text-white/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    Routine
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  Moonlight Exposure
                </h3>
                <p className="text-white/60 text-sm font-sans">
                  Spend 15 mins under moonlight to naturally pacify excess heat.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary"></div>
                </div>
                <span className="text-xs text-white/50">0/7 days</span>
              </div>
            </div>
          </div>

          {/* Diet Swaps Section */}
          <div className="relative py-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">swap_horiz</span>
              Recommended Diet Swaps
            </h3>
            <div className="flex flex-wrap gap-4">
              {/* Swap Bubble 1 */}
              <div className="group relative flex items-center">
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:w-64 group-hover:justify-start group-hover:px-2 group-hover:bg-primary group-hover:border-primary">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-xl">
                      local_fire_department
                    </span>
                  </div>
                  <div className="hidden group-hover:flex flex-col ml-3 whitespace-nowrap overflow-hidden">
                    <span className="text-forest-dark font-bold text-sm">Replace Chili</span>
                    <span className="text-forest-dark/80 text-xs font-sans">
                      With Cilantro & Mint
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-forest-dark group-hover:opacity-0"></div>
                </div>
              </div>

              {/* Swap Bubble 2 */}
              <div className="group relative flex items-center">
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:w-64 group-hover:justify-start group-hover:px-2 group-hover:bg-primary group-hover:border-primary">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-xl">coffee</span>
                  </div>
                  <div className="hidden group-hover:flex flex-col ml-3 whitespace-nowrap overflow-hidden">
                    <span className="text-forest-dark font-bold text-sm">Replace Coffee</span>
                    <span className="text-forest-dark/80 text-xs font-sans">
                      With Coconut Water
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-forest-dark group-hover:opacity-0"></div>
                </div>
              </div>

              {/* Swap Bubble 3 */}
              <div className="group relative flex items-center">
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:w-64 group-hover:justify-start group-hover:px-2 group-hover:bg-primary group-hover:border-primary">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-xl">tapas</span>
                  </div>
                  <div className="hidden group-hover:flex flex-col ml-3 whitespace-nowrap overflow-hidden">
                    <span className="text-forest-dark font-bold text-sm">Replace Fermented</span>
                    <span className="text-forest-dark/80 text-xs font-sans">
                      With Sweet Fruits
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthReport;
