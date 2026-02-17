import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-background-dark text-sand font-display overflow-x-hidden min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="w-full border-b border-[#323b30] bg-[#181c17]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-primary bg-sand rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">spa</span>
            </div>
            <h1 className="text-sand text-xl font-bold tracking-tight">Dosha Balance</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/dashboard" className="text-sand text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/food-analysis" className="text-secondary text-sm font-medium hover:text-sand transition-colors">
              Analysis
            </Link>
            <Link to="/report" className="text-secondary text-sm font-medium hover:text-sand transition-colors">
              Report
            </Link>
            <a href="#" className="text-secondary text-sm font-medium hover:text-sand transition-colors">
              Community
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-secondary hover:text-sand transition-colors rounded-full hover:bg-primary/20">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-earth rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-[#323b30]">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-sand leading-none">Priya S.</p>
                <p className="text-xs text-secondary leading-none mt-1">Vata-Pitta</p>
              </div>
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center border border-[#323b30]"
                data-alt="Portrait of a woman smiling peacefully"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAS3WkvTzen8kpLM5Zehx_5sjrBRc9RW83oSJQqp7geEWCQX6-KxWtDTzkiR5_ZGetZLG7OL5DZHAL0iOepCU_1rsaiQ8CDVt2okKrQ5FmZyUhYl_Ltd_cc6J3iMdHb_ajlZTa-rQG2n9fR6ulS9-FA6U8HQEgrGTGVVm8oxlR0rBVSROKs1aMhPHzaWRsWJozOqs311Dz_vXBn7ZZi-GzbC7ZGja_9oeXXkBOIgx39zvlWCe8dezxjbc8OnrjHdubpo2On_vX-Dpti')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-earth/10 blur-[120px]"></div>
        </div>

        {/* Left Column: Navigation & Quick Actions */}
        <aside className="hidden lg:flex lg:col-span-2 flex-col gap-4">
          <div className="flex flex-col gap-2 p-4 rounded-xl border border-sand/10 bg-primary/10 backdrop-blur-md">
            <button className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/30 text-sand border border-primary/20 transition-all">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-medium text-sm">Overview</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-sand hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined">ecg_heart</span>
              <span className="font-medium text-sm">Vitals</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-sand hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined">self_improvement</span>
              <span className="font-medium text-sm">Meditation</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-sand hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined">restaurant</span>
              <span className="font-medium text-sm">Nutrition</span>
            </button>
          </div>
          <div className="p-5 rounded-xl flex flex-col gap-3 mt-auto border border-sand/10 bg-primary/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sand mb-1">
              <span className="material-symbols-outlined text-earth">light_mode</span>
              <h3 className="font-bold text-sm">Daily Wisdom</h3>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              "When Vata is high, seek warmth and stability. Root vegetables and warm oils are your
              allies today."
            </p>
            <button className="text-xs text-sand font-bold underline mt-2 hover:text-primary transition-colors text-left">
              Read more
            </button>
          </div>
        </aside>

        {/* Center Column: Radar Chart & Main Metrics */}
        <section className="lg:col-span-7 flex flex-col gap-6">
          {/* Header for Mobile/Tablet context */}
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-display font-light text-sand">Namaste, Priya</h2>
            <div className="flex items-center gap-2 text-secondary text-sm">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>October 24th • Vata Season</span>
            </div>
          </div>

          {/* Central Visualization Card */}
          <div className="rounded-2xl p-6 md:p-10 relative flex flex-col items-center justify-center min-h-[420px] overflow-hidden border border-sand/10 bg-primary/10 backdrop-blur-md">
            <div className="absolute top-4 left-6 z-10">
              <h3 className="text-lg font-bold text-sand">Live Dosha Balance</h3>
              <p className="text-secondary text-sm">Real-time analysis based on biometrics</p>
            </div>
            <div className="absolute top-4 right-6 z-10 flex flex-col items-end">
              <span className="px-3 py-1 bg-primary/40 rounded-full text-xs font-bold text-[#4ade80] border border-[#4ade80]/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
                Balanced
              </span>
            </div>

            {/* Radar Chart Visualization */}
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center mt-6">
              {/* Background Grid (Triangular) */}
              <svg
                className="absolute inset-0 w-full h-full text-primary/30"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <path d="M50 10 L90 80 L10 80 Z"></path>
                <path d="M50 25 L80 75 L20 75 Z" opacity="0.5"></path>
                <path d="M50 40 L70 70 L30 70 Z" opacity="0.3"></path>
                <line x1="50" y1="50" x2="50" y2="10" strokeDasharray="2 2"></line>
                <line x1="50" y1="50" x2="90" y2="80" strokeDasharray="2 2"></line>
                <line x1="50" y1="50" x2="10" y2="80" strokeDasharray="2 2"></line>
              </svg>

              {/* Labels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 flex flex-col items-center">
                <span className="text-sand font-bold text-sm">VATA</span>
                <span className="text-[10px] text-secondary tracking-widest uppercase">
                  Air & Ether
                </span>
              </div>
              <div className="absolute bottom-4 right-0 translate-x-2 flex flex-col items-center">
                <span className="text-sand font-bold text-sm">PITTA</span>
                <span className="text-[10px] text-secondary tracking-widest uppercase">Fire</span>
              </div>
              <div className="absolute bottom-4 left-0 -translate-x-2 flex flex-col items-center">
                <span className="text-sand font-bold text-sm">KAPHA</span>
                <span className="text-[10px] text-secondary tracking-widest uppercase">Earth</span>
              </div>

              {/* Animated "Liquid" Blob */}
              <svg
                className="absolute inset-0 w-full h-full animate-fluid drop-shadow-[0_0_15px_rgba(167,182,164,0.3)]"
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#a7b6a4', stopOpacity: 0.8 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#2e4729', stopOpacity: 0.6 }}></stop>
                  </linearGradient>
                </defs>
                {/* Shape representing somewhat balanced but slightly Vata leaning */}
                <path
                  d="M50 15 C65 35, 85 75, 50 60 C15 75, 35 35, 50 15 Z"
                  fill="url(#blobGradient)"
                  stroke="#a7b6a4"
                  strokeWidth="1"
                  className="animate-pulse-slow"
                ></path>
              </svg>

              {/* Center Point */}
              <div className="w-2 h-2 bg-sand rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </div>
          </div>

          {/* Dosha Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Vata Card */}
            <div className="p-5 rounded-xl flex flex-col gap-3 group cursor-pointer border-l-4 border-l-secondary border border-sand/10 bg-primary/10 backdrop-blur-md hover:bg-primary/20 transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 group-hover:text-sand transition-colors">
                  <span className="material-symbols-outlined">air</span>
                </div>
                <span className="text-xs font-bold text-earth bg-earth/10 px-2 py-0.5 rounded">
                  High
                </span>
              </div>
              <div>
                <h4 className="text-sand font-bold">Vata</h4>
                <p className="text-xs text-secondary mt-1">Movement & Change</p>
              </div>
              <div className="w-full bg-[#323b30] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-[11px] text-secondary/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-visible">
                Focus on grounding activities.
              </p>
            </div>

            {/* Pitta Card */}
            <div className="p-5 rounded-xl flex flex-col gap-3 group cursor-pointer border-l-4 border-l-orange-400/50 border border-sand/10 bg-primary/10 backdrop-blur-md hover:bg-primary/20 transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-lg bg-orange-400/10 text-orange-300 group-hover:bg-orange-400/20 transition-colors">
                  <span className="material-symbols-outlined">local_fire_department</span>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-0.5 rounded text-[#4ade80]">
                  Balanced
                </span>
              </div>
              <div>
                <h4 className="text-sand font-bold">Pitta</h4>
                <p className="text-xs text-secondary mt-1">Digestion & Energy</p>
              </div>
              <div className="w-full bg-[#323b30] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-orange-400 h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-[11px] text-secondary/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-visible">
                Maintain cooling foods.
              </p>
            </div>

            {/* Kapha Card */}
            <div className="p-5 rounded-xl flex flex-col gap-3 group cursor-pointer border-l-4 border-l-blue-400/50 border border-sand/10 bg-primary/10 backdrop-blur-md hover:bg-primary/20 transition-all">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-lg bg-blue-400/10 text-blue-300 group-hover:bg-blue-400/20 transition-colors">
                  <span className="material-symbols-outlined">water_drop</span>
                </div>
                <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded">
                  Low
                </span>
              </div>
              <div>
                <h4 className="text-sand font-bold">Kapha</h4>
                <p className="text-xs text-secondary mt-1">Structure & Fluidity</p>
              </div>
              <div className="w-full bg-[#323b30] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-blue-400 h-full rounded-full" style={{ width: '25%' }}></div>
              </div>
              <p className="text-[11px] text-secondary/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-visible">
                Increase stimulation.
              </p>
            </div>
          </div>
        </section>

        {/* Right Column: Vitals & Secondary Data */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* Energy Levels (Prana) */}
          <div className="p-6 rounded-xl relative overflow-hidden border border-sand/10 bg-primary/10 backdrop-blur-md">
            <div className="flex justify-between items-center mb-4 relative z-10">
              <h3 className="text-sand font-bold text-sm">Prana (Energy)</h3>
              <span className="material-symbols-outlined text-yellow-500">wb_sunny</span>
            </div>
            <div className="relative w-full aspect-[2/1] flex items-end justify-center mb-2">
              {/* Gauge Arc (CSS-based) */}
              <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-transparent to-primary/10 rounded-t-full border-t border-x border-primary/30"></div>
              <div className="absolute bottom-0 w-[90%] h-[90%] border-t-[12px] border-[#323b30] rounded-t-full"></div>
              {/* Active Gauge */}
              <div
                className="absolute bottom-0 w-[90%] h-[90%] border-t-[12px] border-yellow-500/80 rounded-t-full"
                style={{
                  clipPath: 'polygon(0 0, 80% 0, 50% 100%, 0 100%)',
                  transform: 'rotate(0deg)',
                }}
              ></div>
              <div className="text-center relative z-10 mb-[-5px]">
                <span className="text-2xl font-bold text-sand block">High</span>
                <span className="text-[10px] text-secondary uppercase tracking-widest">
                  Optimized
                </span>
              </div>
            </div>
          </div>

          {/* Heart Rate */}
          <div className="p-6 rounded-xl flex flex-col gap-4 border border-sand/10 bg-primary/10 backdrop-blur-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sand font-bold text-sm">Heart Rate</h3>
                <p className="text-xs text-secondary mt-1">Resting: 65 BPM</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-light text-sand">72</span>
              <span className="text-sm font-medium text-secondary">BPM</span>
            </div>
            {/* Simple Sparkline SVG */}
            <div className="h-12 w-full mt-1">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 30"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 L10 15 L15 5 L20 25 L25 15 L40 15 L45 8 L50 22 L55 15 L70 15 L75 10 L80 20 L85 15 L100 15"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </div>
          </div>

          {/* Sleep Quality */}
          <div className="p-6 rounded-xl flex flex-col gap-2 border border-sand/10 bg-primary/10 backdrop-blur-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sand font-bold text-sm">Sleep Quality</h3>
              <span className="material-symbols-outlined text-purple-300">bedtime</span>
            </div>
            <div className="flex items-center gap-4">
              {/* Circular Progress */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#323b30"
                    strokeWidth="6"
                    fill="transparent"
                  ></circle>
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#d8b4fe"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray="175.9"
                    strokeDashoffset="26.4"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-sand">85%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-sand font-medium text-sm">Good Rest</p>
                <p className="text-xs text-secondary leading-tight mt-1">
                  Deep sleep focus needed tonight.
                </p>
              </div>
            </div>
          </div>

          {/* Recommendation Widget */}
          <div className="p-5 rounded-xl border border-earth/20 bg-earth/10 backdrop-blur-md">
            <div className="flex gap-3">
              <div
                className="w-12 h-12 rounded-lg bg-cover bg-center flex-shrink-0"
                data-alt="Ashwagandha root on wooden table"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqEqxPOVOPLsMQjxlRiswdxK8bHyqDVXFg_QDdNejKC4MTBoCn7mn2LlI1qGyCLySqOkJtmTe2BEl_aKI564GewZq5XqOXqO0oQZwKn5uhk8JeVFFxGdgiQRjY6vqBM0I6--zNkSbGAXcFh4fWYuN7YJiTT_6-Qps_LO5EVpsjsKjuH7HYoW9BcrVoIAo_ubnuSWEHL4JrXGzC7VCJfueTHEiNqHSiQgVFBnDPOPM9yOw5MZ0sI7LrQ8dFe9JBmsPl994crYjK_m-9')",
                }}
              ></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-earth uppercase tracking-widest">
                  Herb of the day
                </span>
                <h4 className="text-sand font-bold text-sm mt-0.5">Ashwagandha</h4>
                <button className="text-left text-xs text-secondary mt-1 hover:text-sand">
                  Add to routine →
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <style>{`
          .animate-fluid {
              animation: float 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
              animation: pulse-glow 4s ease-in-out infinite;
          }
      `}</style>
    </div>
  );
};

export default Dashboard;
