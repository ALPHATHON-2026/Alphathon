import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileSetup: React.FC = () => {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(68);

  return (
    <div className="bg-background-dark text-white font-display antialiased min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-white animate-fade-in">
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-botanical-pattern bg-cover bg-center opacity-30 blur-[2px]"
          data-alt="Dark moody close-up of fern leaves and botanical textures"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
      </div>

      {/* Navigation Bar */}
      <header className="relative z-20 w-full px-6 py-4 flex items-center justify-between border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">spa</span>
          </div>
          <h1 className="font-bold text-lg tracking-tight">AyurMind</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Help
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-200 text-xs font-bold">
            JS
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Side Context Panel (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-6 w-1/3 pt-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                Profile Setup
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                To provide the most accurate Ayurvedic diagnosis, we need to understand your physical
                composition (Prakriti).
              </p>
            </div>
            <div className="glass-panel p-5 rounded-xl flex items-start gap-4 border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">
                psychology
              </span>
              <div>
                <h3 className="font-bold text-sm text-white mb-1">Did you know?</h3>
                <p className="text-xs text-neutral-400">
                  In Ayurveda, physical attributes like height and weight frame are key indicators
                  of your dominant Dosha type.
                </p>
              </div>
            </div>
            <div className="glass-panel p-5 rounded-xl flex items-start gap-4 border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">lock</span>
              <div>
                <h3 className="font-bold text-sm text-white mb-1">Privacy First</h3>
                <p className="text-xs text-neutral-400">
                  Your health data is encrypted and only used to generate your personalized wellness
                  plan.
                </p>
              </div>
            </div>
          </div>

          {/* Main Interactive Form Card */}
          <div className="w-full lg:w-2/3 max-w-[600px] glass-panel rounded-2xl shadow-2xl overflow-hidden flex flex-col min-h-[600px] border border-white/10 bg-white/5 backdrop-blur-md">
            {/* Progress Header */}
            <div className="px-8 pt-8 pb-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-neutral-300">Physical Assessment</span>
                <span className="text-sm font-bold text-primary">Step 2 of 4</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-neutral-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/2 rounded-full shadow-[0_0_10px_rgba(46,71,41,0.6)] transition-all duration-500 ease-out"></div>
              </div>
            </div>

            {/* Step Content Container */}
            <div className="flex-grow px-8 py-4 flex flex-col justify-center gap-8">
              {/* Title */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Let's get your measurements</h2>
                <p className="text-neutral-400">
                  Accurate height and weight help calculate your BMI and Dosha balance.
                </p>
              </div>

              {/* Input Group: Height */}
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
                    Height
                  </label>
                  <div className="flex items-center gap-2 bg-black/20 rounded-lg p-1 border border-white/5">
                    <button className="px-3 py-1 text-xs font-bold rounded bg-primary text-white shadow-sm transition-all">
                      CM
                    </button>
                    <button className="px-3 py-1 text-xs font-medium rounded text-neutral-400 hover:text-white transition-all">
                      FT
                    </button>
                  </div>
                </div>
                <div className="bg-black/20 border border-white/5 rounded-xl p-6 flex flex-col gap-6 group focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all duration-300">
                  <div className="flex items-baseline justify-center gap-1">
                    <input
                      className="bg-transparent border-0 border-b-2 border-primary/30 focus:border-primary text-center text-4xl font-bold text-white w-24 p-0 focus:ring-0 transition-colors focus:outline-none"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      placeholder="0"
                    />
                    <span className="text-neutral-500 font-medium">cm</span>
                  </div>
                  <div className="relative w-full h-6 flex items-center">
                    <input
                      type="range"
                      min="100"
                      max="250"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-0 accent-primary z-10 relative"
                    />
                    {/* Track Highlights (Visual Only - in react we'd compute width based on value) */}
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-l-lg pointer-events-none"
                      style={{ width: `${((height - 100) / 150) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500 px-1">
                    <span>100cm</span>
                    <span>250cm</span>
                  </div>
                </div>
              </div>

              {/* Input Group: Weight */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="flex justify-between items-end">
                  <label className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
                    Weight
                  </label>
                  <div className="flex items-center gap-2 bg-black/20 rounded-lg p-1 border border-white/5">
                    <button className="px-3 py-1 text-xs font-bold rounded bg-primary text-white shadow-sm transition-all">
                      KG
                    </button>
                    <button className="px-3 py-1 text-xs font-medium rounded text-neutral-400 hover:text-white transition-all">
                      LBS
                    </button>
                  </div>
                </div>
                <div className="bg-black/20 border border-white/5 rounded-xl p-6 flex flex-col gap-6 group focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all duration-300">
                  <div className="flex items-baseline justify-center gap-1">
                    <input
                      className="bg-transparent border-0 border-b-2 border-primary/30 focus:border-primary text-center text-4xl font-bold text-white w-24 p-0 focus:ring-0 transition-colors focus:outline-none"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      placeholder="0"
                    />
                    <span className="text-neutral-500 font-medium">kg</span>
                  </div>
                  <div className="relative w-full h-6 flex items-center">
                    <input
                      type="range"
                      min="30"
                      max="150"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-0 accent-primary z-10 relative"
                    />
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-l-lg pointer-events-none"
                      style={{ width: `${((weight - 30) / 120) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500 px-1">
                    <span>30kg</span>
                    <span>150kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-8 py-6 border-t border-white/5 bg-black/10 flex items-center justify-between mt-auto">
              <Link to="/" className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-all text-sm font-bold tracking-wide">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back
              </Link>
              <Link
                to="/dashboard"
                className="group flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 text-sm font-bold tracking-wide"
              >
                Continue
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Floating Elements */}
      <div className="fixed top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-[#475544]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 4px solid #2e4729;
            cursor: pointer;
            margin-top: -8px; 
        }
        input[type=range]::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 4px solid #2e4729;
            cursor: pointer;
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #475544;
            border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default ProfileSetup;
