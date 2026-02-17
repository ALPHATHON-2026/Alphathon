import React from 'react';
import { Link } from 'react-router-dom';

const FoodAnalysis: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen overflow-hidden flex">
      {/* Navigation Rail */}
      <aside className="w-20 lg:w-64 flex-shrink-0 bg-[#121611] border-r border-white/5 flex flex-col justify-between transition-all duration-300 z-50">
        <div className="flex flex-col gap-8 p-4">
          {/* Logo Area */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white">spa</span>
            </div>
            <div className="hidden lg:flex flex-col">
              <h1 className="text-white text-lg font-bold tracking-tight">AyurScan</h1>
              <p className="text-accent-leaf text-xs font-medium">Daily Balance</p>
            </div>
          </div>
          {/* Main Nav */}
          <nav className="flex flex-col gap-2">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-accent-leaf hover:bg-white/5 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:text-white transition-colors">
                grid_view
              </span>
              <span className="hidden lg:block text-sm font-medium group-hover:text-white transition-colors">
                Dashboard
              </span>
            </Link>
            <Link
              to="/food-analysis"
              className="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined fill-1">document_scanner</span>
              <span className="hidden lg:block text-sm font-medium">Analysis</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-accent-leaf hover:bg-white/5 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:text-white transition-colors">
                history
              </span>
              <span className="hidden lg:block text-sm font-medium group-hover:text-white transition-colors">
                Timeline
              </span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-accent-leaf hover:bg-white/5 transition-colors group"
            >
              <span className="material-symbols-outlined group-hover:text-white transition-colors">
                local_dining
              </span>
              <span className="hidden lg:block text-sm font-medium group-hover:text-white transition-colors">
                Recipes
              </span>
            </Link>
          </nav>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <Link
            to="#"
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-accent-leaf hover:bg-white/5 transition-colors group"
          >
            <span className="material-symbols-outlined group-hover:text-white transition-colors">
              settings
            </span>
            <span className="hidden lg:block text-sm font-medium group-hover:text-white transition-colors">
              Settings
            </span>
          </Link>
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3 px-2">
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center ring-2 ring-primary/50"
              data-alt="User profile photo showing a smiling person"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDKQJZog4BfFLVbfCxgKfdLPwtnCCCKIdGPKTu4FyB_0H36r2dhTx_2QS2lqedJBm3Yrs5rXcxQkAZ9N9M3gaksfoE1bs5uadRLyBzcR4IzcNG9GHkwQqZGbw0fZrtnL0myYXQNedxjqGlM1b9xsfM-wKYwM_uQvsdHcIRCcKxkCBcgBmtLzRX6X-mtrKpItdKiPFJcQaUyd3rlpgdTJt_wcYFwrZSvn41IjHbsQtYEyqPiEEuPkTZ-AQ75pj2XJ9Mdk5gOc_Kydpb')",
              }}
            ></div>
            <div className="hidden lg:flex flex-col">
              <p className="text-sm font-medium text-white">Elara Vance</p>
              <p className="text-xs text-accent-leaf">Pitta-Vata</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row h-screen overflow-hidden bg-background-dark relative">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Center: AI Viewfinder */}
        <section className="flex-1 flex flex-col relative z-10 p-6 lg:p-10 h-full overflow-hidden">
          <header className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Live Analysis</h2>
              <p className="text-accent-leaf mt-1">
                Point your camera at your meal to analyze its energetic properties.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors">
                <span className="material-symbols-outlined text-sm">upload_file</span>
                <span className="text-sm font-medium">Upload</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg shadow-lg shadow-primary/20 transition-colors">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                <span className="text-sm font-medium">Capture</span>
              </button>
            </div>
          </header>

          <div className="flex-1 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 group">
            {/* Camera Feed Image Placeholder */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Close up of a healthy quinoa salad bowl with avocado and greens"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_8zIP4Td4RwMqVexrK6oKAZmsjE1ywdMWC3iBIswgFjyzfrPTphTkkkmdPZ8uSfuuYfNKXnaKHswBIFiDMVksMYCvL6thupOwNx-k6sYyuOqRWTxQelioQakjv_XPw1LOgmeH8jSEJFzCwd0M3P-i6ZNjm5nUBHFhNWFNHb6L0lvpsqXsFlcsvLX8TOT0kuHEWTthMZeyGtqyvDJHaLQv1PA4LFDR8eAVSaNloAhKp6d295sqvCaoFaM6tYvCB1xTJLe4H_DWy79j')",
              }}
            ></div>

            {/* Scanning Effect */}
            <div className="scan-line"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

            {/* Viewfinder UI Elements */}
            <div className="absolute inset-8 border border-white/20 rounded-xl pointer-events-none flex flex-col justify-between">
              <div className="flex justify-between p-4">
                <div className="w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
                <div className="w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
              </div>
              {/* Center Focus Reticle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="flex justify-between p-4">
                <div className="w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
                <div className="w-8 h-8 border-b-2 border-r-2 border-white rounded-br-lg"></div>
              </div>
            </div>

            {/* Floating AI Tags */}
            {/* Tag 1: Top Right */}
            <div className="absolute top-[25%] right-[25%] flex items-center gap-2 animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <div className="w-16 h-[1px] bg-white/50"></div>
              <div className="glass-panel px-3 py-2 rounded-lg text-xs text-white border-l-2 border-primary">
                <span className="block font-bold text-accent-leaf mb-0.5">AVOCADO</span>
                <span className="block opacity-80">Rasa: Sweet</span>
                <span className="block opacity-80">Virya: Cooling</span>
              </div>
            </div>
            {/* Tag 2: Bottom Left */}
            <div className="absolute bottom-[35%] left-[20%] flex items-center gap-2 flex-row-reverse">
              <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <div className="w-12 h-[1px] bg-white/50"></div>
              <div className="glass-panel px-3 py-2 rounded-lg text-xs text-white border-r-2 border-yellow-500 text-right">
                <span className="block font-bold text-yellow-200 mb-0.5">QUINOA</span>
                <span className="block opacity-80">Guna: Light</span>
                <span className="block opacity-80">Effect: Tridoshic</span>
              </div>
            </div>

            {/* Bottom Analysis Summary Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-panel p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-white">eco</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Sattvic Meal Detected</h3>
                    <div className="flex items-center gap-2 text-xs text-accent-leaf">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>{' '}
                        High Prana
                      </span>
                      <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                      <span>98% Confidence</span>
                    </div>
                  </div>
                </div>
                <button className="bg-white text-primary-dark hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg">
                  View Full Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Right: Timeline & Dosha Sidebar */}
        <aside className="w-full lg:w-96 bg-[#121611]/50 backdrop-blur-md border-l border-white/5 flex flex-col z-20 overflow-y-auto scrollbar-hide">
          {/* Dosha Status Widget */}
          <div className="p-6 border-b border-white/5 bg-[#121611]/80 sticky top-0 z-30 backdrop-blur-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-lg">Current State</h3>
              <button className="text-accent-leaf hover:text-white transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            {/* Abstract Balance Visualizer */}
            <div className="relative h-32 w-full bg-white/5 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20"
                data-alt="Abstract gradient mesh representing balanced energy"
                style={{
                  background:
                    'radial-gradient(circle at 30% 50%, #2e4729 0%, transparent 50%), radial-gradient(circle at 70% 50%, #8ba888 0%, transparent 50%)',
                }}
              ></div>
              <div className="flex items-end gap-3 h-20 w-full px-6 justify-center">
                <div className="w-8 bg-blue-400/30 rounded-t-lg h-[40%] relative group">
                  <div className="absolute bottom-0 w-full bg-blue-400 rounded-t-lg h-[70%] transition-all duration-500 group-hover:h-[80%]"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white uppercase tracking-wider">
                    Vata
                  </span>
                </div>
                <div className="w-8 bg-red-400/30 rounded-t-lg h-[80%] relative group">
                  <div className="absolute bottom-0 w-full bg-red-400 rounded-t-lg h-[50%] transition-all duration-500 group-hover:h-[60%]"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white uppercase tracking-wider">
                    Pitta
                  </span>
                </div>
                <div className="w-8 bg-yellow-400/30 rounded-t-lg h-[50%] relative group">
                  <div className="absolute bottom-0 w-full bg-yellow-400 rounded-t-lg h-[90%] transition-all duration-500 group-hover:h-[100%]"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white uppercase tracking-wider">
                    Kapha
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-accent-leaf">Balance Score</span>
              <span className="text-white font-bold">84/100</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent-leaf w-[84%] h-full rounded-full"></div>
            </div>
          </div>

          {/* Timeline */}
          <div className="p-6 flex-1">
            <h3 className="text-white font-bold text-lg mb-6 sticky top-0">Today's Intake</h3>
            <div className="relative pl-4 border-l border-white/10 space-y-8">
              {/* Timeline Item 1 */}
              <div className="relative group">
                <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-primary border-2 border-[#121611] group-hover:scale-125 transition-transform"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-accent-leaf font-medium">12:30 PM • Lunch</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-light border border-primary/20">
                      Pacifies Pitta
                    </span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div
                        className="w-12 h-12 rounded-lg bg-cover bg-center shrink-0"
                        data-alt="Small thumbnail of avocado toast"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJnwEVtvgYXgRwoDuelYb2SKwJirEcxBz9IGU1eogun__0wcgBVMnJo4xDAQMWcOZ-BGi1h8cOhOMep1ffWmENYTujJ0EvQemMiFzRxJgUa5yx95eDRnVEobfjme2rz1r0tzMdXN6q57FREKiwcNkp1vGjc-r3ODha-zx_1Rldv1gqmQ8PqZ2RxriuZGCt4hp81xcFua2cX4ZezADQkumJTLVuds1m11Q934ddTb9t9svJn5e2GjFHxcZWE2AqqXkZcb007fmg2uzf')",
                        }}
                      ></div>
                      <div>
                        <h4 className="text-white font-medium text-sm leading-tight">
                          Avocado Toast & Seeds
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">Heavy, Oily, Cooling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative group">
                <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-gray-600 border-2 border-[#121611] group-hover:scale-125 transition-transform"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-accent-leaf font-medium">08:00 AM • Breakfast</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 border border-white/10">
                      Neutral
                    </span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div
                        className="w-12 h-12 rounded-lg bg-cover bg-center shrink-0"
                        data-alt="Small thumbnail of herbal tea"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD60q5_uf1hQTsCOhbfiBzusufN2gtw_wMEnxJmHDEb4khd2KYMCSatBtUr_zsRiTO6jRivoB_LWMFj_adBRs1IJQI4dEl-CtCJ1rTmLZ6TacT3a0rui7u_UdEDCTemSz8OZyIhKNaLPYZ3Km-Gfmb7ZjhHJ29VF5vni226Uc2PL3h65Kj0j8pdgODK4XnL3Hx2jEnqfuCL5xwC_q5J2EXJIGt3_Db9J9zVTy5YCkEflun7Y1zjVIPeHw57H9_84jNzp_yCUMK-MaUg')",
                        }}
                      ></div>
                      <div>
                        <h4 className="text-white font-medium text-sm leading-tight">
                          Tulsi Herbal Tea
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">Light, Clear, Hot</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative group opacity-60 hover:opacity-100 transition-opacity">
                <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-red-500 border-2 border-[#121611] group-hover:scale-125 transition-transform"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-accent-leaf font-medium">Yesterday • Dinner</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                      Aggravates Pitta
                    </span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div
                        className="w-12 h-12 rounded-lg bg-cover bg-center shrink-0"
                        data-alt="Small thumbnail of spicy curry"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBOoYLlkbwNsiCXW-XxMI3nT6FUEACP3z5p4Gpuhg7wIjaNFTvv2TbfFljv6pzZxjEGnYeKcdujfP1uP95diTtQBul4UE6fJI24zNi6fkH4lan1ADUQElaEe0NcIByaS97QGI-IiIjJ5mS71SYSPMZPDaYwkDFFlWh5gsKatQdOHtfGiYUF70vBimjz3_93Juj_Bn-11Gbn_b04agSELpznETs9GWwxqqPXA6l8bok_9iFVhQ_tqXtfqcM-WZjnu-NWrSvdeUs_tKz')",
                        }}
                      ></div>
                      <div>
                        <h4 className="text-white font-medium text-sm leading-tight">
                          Spicy Vegetable Curry
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">Pungent, Hot, Sharp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Suggestion */}
          <div className="p-6 bg-[#121611] mt-auto border-t border-white/5">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-light mt-0.5">lightbulb</span>
              <div>
                <h5 className="text-sm font-bold text-white mb-1">Suggestion</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your Pitta is slightly elevated. Consider a cooling dinner with cucumber, mint, or
                  coconut.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <style>{`
            .scan-line {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #8ba888, transparent);
                box-shadow: 0 0 10px #8ba888;
                animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                z-index: 10;
            }
            @keyframes scan {
                0% { top: 10%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 90%; opacity: 0; }
            }
        `}</style>
    </div>
  );
};

export default FoodAnalysis;
