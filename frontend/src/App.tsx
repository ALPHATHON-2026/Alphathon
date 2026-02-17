import React, { useState, useEffect } from 'react';
import { CinematicBackground } from './components/CinematicBackground';
import { GlassCard } from './components/GlassCard';
import { DoshaOrb } from './components/DoshaOrb';
import { LoadingScreen } from './components/LoadingScreen';
import { analyzeProfile, analyzeDaily } from './services/geminiService';
import type { UserProfile, DailyAnalysisInput, ProfileBaseline, DailyReport } from './types';
import { auth, db } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, type User } from 'firebase/auth';
import { doc, setDoc, addDoc, collection, getDoc } from 'firebase/firestore';

type AppState = 'home' | 'login' | 'profile' | 'baseline_reveal' | 'dashboard' | 'daily_input' | 'analysis_reveal';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('home');
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [baseline, setBaseline] = useState<ProfileBaseline | null>(null);
  const [dailyReport, setDailyReport] = useState<DailyReport | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [foodPhoto, setFoodPhoto] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Local state for dynamic profile form
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | 'other'>('male');
  const [onPeriods, setOnPeriods] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Fetch profile if exists
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
           const data = docSnap.data();
           setUserProfile(data.profile as UserProfile);
           setBaseline(data.baseline as ProfileBaseline);
           setState('dashboard');
        } else {
           setState('profile');
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGetStarted = () => {
      if (user) {
          setState('dashboard');
      } else {
          setState('login');
      }
  };

  const validateProfile = (data: any): string | null => {
    if (data.age < 15 || data.age > 120) return "Age must be between 15 and 120 cycles.";
    if (data.height < 50 || data.height > 250) return "Height must be within biological reality (50-250cm).";
    if (data.weight < 20 || data.weight > 500) return "Weight must be within measurable ranges (20-500kg).";
    return null;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    setLoading(true);
    try {
        if (isLoginMode) {
            await signInWithEmailAndPassword(auth, email, password);
        } else {
            await createUserWithEmailAndPassword(auth, email, password);
        }
    } catch (error: any) {
        console.error("Auth failed", error);
        alert(`${isLoginMode ? 'Login' : 'Registration'} failed: ` + error.message);
    } finally {
        setLoading(false);
    }
  };

  const submitProfile = async (profile: UserProfile) => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await analyzeProfile(profile);
      setUserProfile(profile);
      setBaseline(res);
      
      // Save to Firebase
      await setDoc(doc(db, "users", user.uid), {
          profile,
          baseline: res
      });

      setState('baseline_reveal');
    } catch (error) {
      console.error("Profile analysis failed", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const capturePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();
      
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0);
      
      const base64 = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
      setFoodPhoto(base64);
      
      stream.getTracks().forEach(track => track.stop());
    } catch (err) {
      alert("Sanctuary requires vision to analyze consumption. Please grant camera access.");
    }
  };

  const submitDaily = async (daily: DailyAnalysisInput) => {
    if (!userProfile || !user) return;
    setLoading(true);
    try {
      const inputWithPhoto = { ...daily, foodPhotoBase64: foodPhoto || undefined };
      const res = await analyzeDaily(userProfile, inputWithPhoto);
      setDailyReport(res);
      
      // Save report to Firebase
      await addDoc(collection(db, "users", user.uid, "daily_reports"), {
          timestamp: new Date(),
          input: inputWithPhoto,
          report: res
      });

      setState('analysis_reveal');
    } catch (error) {
      console.error("Daily analysis failed", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-amber-500/30 overflow-x-hidden">
      <CinematicBackground parallaxOffset={scrollPosition} />
      
      {/* Dynamic Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full p-8 z-[60] flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[4px]">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setState('home')}>
          <div className="w-10 h-10 rounded-full border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-700">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-[0_0_15px_#f59e0b]"></div>
          </div>
          <span className="font-serif tracking-[0.4em] text-[10px] font-bold uppercase text-white/90 group-hover:text-amber-500 transition-colors duration-700">AyurVeda Dynamic Diagnostics</span>
        </div>
        <div className="flex gap-12 items-center">
          <button onClick={() => setState('home')} className="hidden md:block text-[9px] tracking-[0.4em] uppercase font-bold opacity-40 hover:opacity-100 transition-all">Home</button>
          <button onClick={handleGetStarted} className="px-8 py-3 border border-amber-500/30 rounded-sm text-[9px] tracking-[0.5em] uppercase font-black text-amber-500 hover:bg-amber-500 hover:text-black transition-all">
            {user ? 'Dashboard' : 'Get Started'}
          </button>
        </div>
      </nav>

      {loading && <LoadingScreen />}

      {/* VIEW: HOME PAGE */}
      {state === 'home' && (
        <main className="relative z-10 min-h-screen flex flex-col">
          <section className="h-screen flex flex-col items-center justify-center text-center p-6">
            <div 
              className="transition-all duration-1000 ease-out flex flex-col items-center"
              style={{ transform: `translateY(${scrollPosition * 0.2}px)`, opacity: 1 - scrollPosition / 700 }}
            >
              <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-amber-500/50 mb-12"></div>
              <h1 className="text-6xl md:text-[9rem] font-serif italic mb-8 leading-[0.85] tracking-tight opacity-95">
                Biological <br />
                <span className="text-amber-500 drop-shadow-[0_0_40px_rgba(245,158,11,0.2)]">Symmetry</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xs md:text-sm text-white/40 font-light leading-relaxed tracking-[0.3em] mb-16 uppercase italic">
                A confluence of ancient predictive diagnostics and neural mapping.
              </p>
              <button 
                onClick={handleGetStarted}
                className="group relative px-16 py-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-amber-500 transition-transform duration-1000 group-hover:scale-x-0 origin-right"></div>
                <div className="absolute inset-0 border border-amber-500"></div>
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-1000 font-black uppercase text-[10px] tracking-[0.7em]">Enter The Flow</span>
              </button>
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center p-12 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-16">
                <div className="space-y-6">
                  <span className="text-amber-500/50 uppercase tracking-[0.4em] text-[9px] font-black">Philosophy</span>
                  <h2 className="font-serif text-5xl italic text-white/95 leading-tight">Map Your Pulse Through Time</h2>
                  <p className="text-lg text-white/40 leading-relaxed font-light tracking-wide italic border-l border-white/5 pl-8">
                    Every biological system oscillates. Our framework detects the subtle entropy within your doshas—Vata, Pitta, and Kapha—using real-time biometric analysis to reveal the patterns hidden in your daily consumption and routine.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-500/80">Safety Blindspot</h4>
                    <p className="text-sm text-white/30 leading-relaxed font-light">Identifying dangerous interactions between modern pharmaceuticals and botanical decoctions.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-500/80">Seasonal Sync</h4>
                    <p className="text-sm text-white/30 leading-relaxed font-light">Aligning your energetic core with the environmental shifts of your geographic location.</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                 <div className="absolute inset-0 bg-amber-500/5 blur-[150px] rounded-full group-hover:bg-amber-500/10 transition-all duration-[3s]"></div>
                 <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/2 backdrop-blur-3xl aspect-[4/5] flex items-center justify-center shadow-2xl">
                    <DoshaOrb vata={40} pitta={30} kapha={30} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020301] via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-center">
                       <h5 className="font-serif text-2xl italic text-white/80 mb-2">Live Diagnostic Stream</h5>
                       <p className="text-[9px] tracking-[0.5em] uppercase text-amber-500/60">Continuous Biological Feed</p>
                    </div>
                 </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW: LOGIN */}
      {state === 'login' && (
        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <GlassCard className="max-w-md w-full text-center py-20 px-12 border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <h1 className="font-serif text-5xl mb-6 italic tracking-[0.1em] text-amber-500">ENTROPY</h1>
            <p className="text-[9px] uppercase tracking-[0.6em] text-white/30 mb-8 italic">Calibration Access Point</p>
            
            <div className="flex gap-4 justify-center mb-8">
                <button onClick={() => setIsLoginMode(true)} className={`text-[10px] uppercase tracking-widest ${isLoginMode ? 'text-amber-500 font-bold' : 'text-white/30'}`}>Login</button>
                <div className="w-[1px] h-3 bg-white/10"></div>
                <button onClick={() => setIsLoginMode(false)} className={`text-[10px] uppercase tracking-widest ${!isLoginMode ? 'text-amber-500 font-bold' : 'text-white/30'}`}>Sign Up</button>
            </div>

            <form onSubmit={handleAuth} className="space-y-10">
              <div className="space-y-3 text-left">
                <label className="text-[9px] uppercase tracking-[0.4em] opacity-40 ml-1 font-black">Reference Identity</label>
                <input name="email" type="email" required placeholder="name@sanctuary.io" className="w-full p-5 rounded-sm bg-white/5 border border-white/10 text-xs tracking-widest placeholder:opacity-20" />
              </div>
              <div className="space-y-3 text-left">
                <label className="text-[9px] uppercase tracking-[0.4em] opacity-40 ml-1 font-black">Password</label>
                <input name="password" type="password" required placeholder="Enter secure phrase..." className="w-full p-5 rounded-sm bg-white/5 border border-white/10 text-xs tracking-widest placeholder:opacity-20" />
              </div>
              <button type="submit" className="w-full py-6 bg-amber-500 text-black font-black uppercase text-[11px] tracking-[0.7em] hover:bg-amber-400 transition-all duration-700 shadow-[0_15px_40px_rgba(245,158,11,0.2)]">
                {isLoginMode ? 'Verify Pulse' : 'Initiate Sequence'}
              </button>
            </form>
          </GlassCard>
        </div>
      )}

      {/* VIEW: PROFILE SETUP */}
      {state === 'profile' && (
        <div className="relative z-10 min-h-screen flex items-center justify-center p-6 py-32">
          <GlassCard className="max-w-4xl w-full border-white/5 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <h2 className="font-serif text-5xl mb-3 italic text-white/95 tracking-tight">Biological Origin</h2>
                <p className="text-[10px] uppercase tracking-[0.5em] text-amber-500/60 font-black">Recursive Baseline Mapping</p>
              </div>
              <div className="text-[10px] opacity-20 uppercase tracking-[0.4em] font-bold">Cycle 1.0</div>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const dataObj = {
                age: Number(formData.get('age')),
                height: Number(formData.get('height')),
                weight: Number(formData.get('weight')),
                gender: formData.get('gender') as any,
                personality: formData.get('personality') as any,
                longTermMeds: String(formData.get('meds')),
                physicalWound: String(formData.get('wound')),
              };

              const error = validateProfile(dataObj);
              if (error) {
                alert(error);
                return;
              }

              const profile: UserProfile = {
                ...dataObj,
                ...(selectedGender === 'female' ? {
                    femaleStats: {
                        isPregnant: formData.get('pregnant') === 'on',
                        onPeriods: formData.get('periods') === 'on',
                        crampsLevel: Number(formData.get('cramps') || 0)
                    }
                } : {})
              };
              submitProfile(profile);
            }} className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4 space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-black">Age Threshold</label>
                <input name="age" type="number" required placeholder="Min 15" className="w-full p-5 rounded-sm" />
              </div>
              <div className="md:col-span-8 space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-black">Gender Identity</label>
                <select 
                  name="gender" 
                  className="w-full p-5 rounded-sm" 
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value as any)}
                >
                    <option value="male">Masculine Presence</option>
                    <option value="female">Feminine Presence</option>
                    <option value="other">Universal / Non-Binary</option>
                </select>
              </div>

              {selectedGender === 'female' && (
                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 border border-amber-500/10 bg-amber-500/5 rounded-sm animate-[fadeIn_0.5s_ease-out]">
                   <div className="flex items-center gap-4">
                     <input type="checkbox" name="pregnant" id="pregnant" className="w-5 h-5" />
                     <label htmlFor="pregnant" className="text-[10px] uppercase tracking-widest opacity-60">Cycle Gestation (Pregnant)</label>
                   </div>
                   <div className="flex items-center gap-4">
                     <input 
                       type="checkbox" 
                       name="periods" 
                       id="periods" 
                       className="w-5 h-5" 
                       checked={onPeriods}
                       onChange={(e) => setOnPeriods(e.target.checked)}
                     />
                     <label htmlFor="periods" className="text-[10px] uppercase tracking-widest opacity-60">Active Menstrual Phase</label>
                   </div>
                   {onPeriods && (
                     <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                       <label className="text-[10px] uppercase tracking-widest opacity-40 block">Cramp Severity (1-10)</label>
                       <input name="cramps" type="range" min="1" max="10" className="w-full accent-amber-500" />
                     </div>
                   )}
                </div>
              )}

              <div className="md:col-span-6 space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-black">Physical Height (cm)</label>
                <input name="height" type="number" required placeholder="50-250" className="w-full p-5 rounded-sm" />
              </div>
              <div className="md:col-span-6 space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-black">Measured Mass (kg)</label>
                <input name="weight" type="number" required placeholder="20-500" className="w-full p-5 rounded-sm" />
              </div>
              
              <div className="md:col-span-12 space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-black">Temperamental Flux</label>
                <select name="personality" className="w-full p-5 rounded-sm">
                    <option value="free">Adaptive (Free Style)</option>
                    <option value="rigid">Disciplined (Rigid Focus)</option>
                </select>
              </div>

              <div className="md:col-span-12 space-y-3">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-black">Interventions & Chronic Status</label>
                <textarea name="meds" placeholder="List ongoing medications, trauma sites, or persistent wounds..." className="w-full p-5 rounded-sm h-32 leading-relaxed italic placeholder:opacity-20"></textarea>
              </div>
              
              <button type="submit" className="md:col-span-12 py-7 border border-amber-500 text-amber-500 uppercase text-[11px] tracking-[0.7em] font-black hover:bg-amber-500 hover:text-black transition-all duration-700 shadow-lg">
                Finalize Origin Trace
              </button>
            </form>
          </GlassCard>
        </div>
      )}

      {/* VIEW: BASELINE REVEAL */}
      {state === 'baseline_reveal' && baseline && (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 py-32 space-y-20">
           <div className="scale-75 md:scale-100 transition-transform duration-1000">
             <DoshaOrb vata={baseline.doshaDominance.vata} pitta={baseline.doshaDominance.pitta} kapha={baseline.doshaDominance.kapha} />
           </div>
           <GlassCard className="max-w-5xl w-full border-white/5">
              <div className="flex justify-between items-center mb-10">
                <h2 className="font-serif text-4xl italic text-amber-500">Resonance Profile</h2>
                <div className="text-[10px] tracking-[0.4em] opacity-30">Veda Trace: {baseline.doshaDominance.pitta}% P / {baseline.doshaDominance.vata}% V / {baseline.doshaDominance.kapha}% K</div>
              </div>
              
              <p className="text-xl text-white/80 mb-16 italic leading-relaxed border-l-2 border-amber-500/30 pl-10 font-light max-w-3xl">
                {baseline.initialAdvice}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                 {baseline.termExplanations.map((t, i) => (
                   <div key={i} className="p-8 border border-white/5 rounded-sm bg-white/2 hover:bg-white/5 transition-all duration-500 group relative">
                      <div className="absolute top-0 left-0 w-[1px] h-0 bg-amber-500 group-hover:h-full transition-all duration-1000"></div>
                      <h4 className="text-[11px] uppercase tracking-[0.4em] text-amber-500/80 mb-5 font-black group-hover:text-amber-500">{t.term}</h4>
                      <p className="text-[13px] leading-relaxed opacity-40 group-hover:opacity-80 transition-opacity font-light italic">{t.explanation}</p>
                   </div>
                 ))}
              </div>
              
              <button onClick={() => setState('dashboard')} className="w-full py-6 bg-white/5 border border-white/10 uppercase text-[10px] tracking-[0.7em] font-black hover:bg-amber-500 hover:text-black transition-all duration-700">
                 Commit to Synchronicity
              </button>
           </GlassCard>
        </div>
      )}

      {/* VIEW: DASHBOARD */}
      {state === 'dashboard' && baseline && (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 space-y-16">
           <div className="relative group">
              <div className="absolute inset-0 bg-amber-500/5 blur-[150px] rounded-full scale-150 group-hover:bg-amber-500/15 transition-all duration-[3s]"></div>
              <DoshaOrb vata={baseline.doshaDominance.vata} pitta={baseline.doshaDominance.pitta} kapha={baseline.doshaDominance.kapha} />
           </div>
           <div className="text-center max-w-3xl px-6">
              <h2 className="font-serif text-7xl md:text-8xl mb-8 italic tracking-tighter text-white/95">Vitality Core</h2>
              <p className="text-sm uppercase tracking-[0.6em] text-white/30 mb-16 leading-loose italic max-w-xl mx-auto">Maintaining homeostatic balance through continuous recursive mapping.</p>
              <button onClick={() => setState('daily_input')} className="group relative px-20 py-7 bg-amber-500 text-black font-black uppercase text-xs tracking-[0.8em] shadow-[0_30px_80px_rgba(245,158,11,0.25)] hover:scale-105 transition-all duration-700 active:scale-95">
                 Pulse Analysis Scan
              </button>
           </div>
        </div>
      )}

      {/* VIEW: DAILY INPUT */}
      {state === 'daily_input' && (
        <div className="relative z-10 min-h-screen flex items-center justify-center p-6 py-32">
            <GlassCard className="max-w-5xl w-full border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                   <div>
                     <h2 className="font-serif text-5xl mb-3 italic tracking-tight">Circadian Scan</h2>
                     <p className="text-[10px] uppercase tracking-[0.6em] text-amber-500/60 font-black">Daily Phase Re-Calibration</p>
                   </div>
                   <div className="flex gap-4">
                     {foodPhoto && (
                       <div className="relative w-24 h-24 rounded-sm overflow-hidden border border-amber-500/20 group">
                          <img src={`data:image/jpeg;base64,${foodPhoto}`} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                          <button onClick={() => setFoodPhoto(null)} className="absolute top-1 right-1 p-1 bg-black/80 text-[8px] border border-white/10 hover:bg-amber-500 hover:text-black">X</button>
                       </div>
                     )}
                     <button type="button" onClick={capturePhoto} className="w-24 h-24 border border-white/10 rounded-sm flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-all group">
                       <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40 group-hover:opacity-100" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"/><circle cx="12" cy="13" r="4"/></svg>
                       <span className="text-[8px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100">Photo Scan</span>
                     </button>
                   </div>
                </div>
                
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const input: DailyAnalysisInput = {
                        routine: String(formData.get('routine')),
                        weatherExposure: String(formData.get('weather')),
                        foodConsumption: String(formData.get('food')),
                        energyLevel: Number(formData.get('energy')),
                        healthIssuesToday: String(formData.get('issues')),
                        medsTakenToday: String(formData.get('meds')),
                        activity: String(formData.get('activity')),
                        sleepHours: Number(formData.get('sleep')),
                    };
                    submitDaily(input);
                }} className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-12 space-y-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-black block">Diurnal Rhythm Flow</label>
                        <textarea name="routine" required placeholder="Describe your circadian movement today..." className="w-full p-6 rounded-sm h-32 italic leading-relaxed"></textarea>
                    </div>
                    
                    <div className="md:col-span-6 space-y-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-black block">Ambient Climate Data</label>
                        <input name="weather" type="text" placeholder="Weather/Environmental factors..." className="w-full p-5 rounded-sm" />
                    </div>
                    
                    <div className="md:col-span-6 space-y-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-black block">Vital Energy Index (1-10)</label>
                        <input name="energy" type="range" min="1" max="10" className="w-full h-12 accent-amber-500 bg-transparent" />
                    </div>

                    <div className="md:col-span-12 space-y-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-black block">Consumption & Alchemy (Food/Timings)</label>
                        <textarea name="food" placeholder="Catalog your nourishment sequence..." className="w-full p-6 rounded-sm h-32 italic leading-relaxed"></textarea>
                    </div>

                    <div className="md:col-span-8 space-y-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-black block">Kinetic Output (Activity)</label>
                        <input name="activity" type="text" placeholder="Workout/Walk metrics..." className="w-full p-5 rounded-sm" />
                    </div>
                    
                    <div className="md:col-span-4 space-y-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-black block">Hibernation cycles (Hours)</label>
                        <input name="sleep" type="number" step="0.5" placeholder="8.0" className="w-full p-5 rounded-sm" />
                    </div>

                    <div className="md:col-span-12 space-y-3">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-black block">Biological Disruption & Intervention</label>
                        <textarea name="issues" placeholder="Health fluctuations or medications administered specifically for today's state..." className="w-full p-6 rounded-sm h-32 italic leading-relaxed"></textarea>
                    </div>

                    <button type="submit" className="md:col-span-12 py-8 bg-amber-500 text-black font-black uppercase text-xs tracking-[0.8em] hover:bg-amber-400 transition-all duration-700 shadow-2xl">
                        Synthesize Diagnostic Stream
                    </button>
                </form>
            </GlassCard>
        </div>
      )}

      {/* VIEW: ANALYSIS REVEAL */}
      {state === 'analysis_reveal' && dailyReport && (
        <div className="relative z-10 min-h-screen flex flex-col items-center p-6 py-32 space-y-20">
            <div className="relative scale-90 md:scale-110">
              <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-125 transition-all duration-1000"></div>
              <DoshaOrb vata={dailyReport.doshaState.vata} pitta={dailyReport.doshaState.pitta} kapha={dailyReport.doshaState.kapha} />
            </div>
            
            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                <GlassCard className="h-full border-amber-500/10 p-12">
                    <h3 className="font-serif text-5xl mb-12 italic text-amber-500 tracking-tight">The Blindspots</h3>
                    <div className="space-y-16">
                        {[
                          { label: 'Safety Blindspot (Botanical Interaction)', content: dailyReport.safetyBlindspot },
                          { label: 'Seasonal Disconnect', content: dailyReport.seasonalDisconnect },
                          { label: 'Trust Deficit (Neural-Gut Gap)', content: dailyReport.trustDeficit },
                          { label: 'Mental Health Ignorance', content: dailyReport.mentalHealthIgnorance }
                        ].map((item, i) => (
                          <div key={i} className="group relative">
                              <div className="absolute -left-12 top-0 text-[10px] font-black text-amber-500/20 group-hover:text-amber-500 transition-all duration-700">0{i+1}</div>
                              <h4 className="text-[11px] uppercase tracking-[0.5em] font-black text-white/30 mb-5 group-hover:text-amber-500 transition-colors duration-700">{item.label}</h4>
                              <p className="text-base leading-relaxed text-white/70 font-light border-l border-white/5 pl-8 italic group-hover:text-white transition-colors duration-1000">{item.content}</p>
                          </div>
                        ))}
                    </div>
                </GlassCard>
                
                <GlassCard className="h-full border-emerald-500/10 p-12 bg-emerald-500/5">
                    <h3 className="font-serif text-5xl mb-12 italic text-emerald-500 tracking-tight">Recalibration Protocol</h3>
                    <div className="space-y-16 mb-20">
                        <div className="group">
                            <h4 className="text-[11px] uppercase tracking-[0.5em] font-black text-emerald-500/40 mb-5 group-hover:text-emerald-400 transition-colors duration-700">Rhythm Reconstruction</h4>
                            <p className="text-lg leading-relaxed text-white/80 font-light border-l border-emerald-500/20 pl-8 italic">{dailyReport.recommendations.routine}</p>
                        </div>
                        <div className="group">
                            <h4 className="text-[11px] uppercase tracking-[0.5em] font-black text-emerald-500/40 mb-5 group-hover:text-emerald-400 transition-colors duration-700">Nourishment Strategy</h4>
                            <p className="text-lg leading-relaxed text-white/80 font-light border-l border-emerald-500/20 pl-8 italic">{dailyReport.recommendations.food}</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                      <button onClick={() => setState('dashboard')} className="w-full py-7 bg-emerald-500 text-black uppercase text-xs tracking-[0.8em] font-black hover:bg-emerald-400 transition-all duration-700 shadow-[0_20px_60px_rgba(16,185,129,0.2)]">
                          Accept Synchronicity
                      </button>
                      <button onClick={() => setState('home')} className="w-full py-4 opacity-30 text-[9px] uppercase tracking-[0.5em] hover:opacity-100 transition-opacity font-black">
                          Dismount Diagnostic Flow
                      </button>
                    </div>
                </GlassCard>
            </div>
        </div>
      )}

      {/* Footer Decoration */}
      <footer className="relative z-10 py-24 text-center opacity-10 pointer-events-none">
         <div className="text-[10px] uppercase tracking-[1em] mb-6 italic">AyurVeda Dynamic Diagnostics • Recursive Analysis Cycle</div>
         <div className="w-[1px] h-32 bg-gradient-to-b from-white/40 to-transparent mx-auto"></div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020301; }
        ::-webkit-scrollbar-thumb { background: #f59e0b33; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #f59e0b66; }
      `}</style>
    </div>
  );
};

export default App;
