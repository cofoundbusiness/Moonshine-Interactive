import React, { useState, useEffect } from 'react';
import { cyberAudio } from '../utils/audioEngine';
import projectEsperanceScreensImg from '../assets/project-esperance-screens.jpg';

export default function Navbar({ currentView, setCurrentView, audioEnabled, setAudioEnabled, devEnabled, setDevEnabled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        cyberAudio.playClick();
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navItems = [
    { id: 'games', label: 'HOME / ESPERANCE', sub: 'Creating stories worth remembering.' },
    { id: 'studio', label: 'STUDIO (ABOUT)', sub: 'Who we are, what we believe, and what we are building.' },
    { id: 'team', label: 'TEAM', sub: 'Thirteen people. One world. One story worth telling.' },
    { id: 'screenshots', label: 'TRAILER & SCREENSHOTS', sub: 'The first look at Silver City and ESPERANCE.' },
    { id: 'contact', label: 'CONTACT', sub: 'How to reach MoonShine Interactive.' },
  ];

  if (devEnabled) {
    navItems.push({ id: 'dev', label: 'DEV // PROTOTYPE HUB', sub: 'Confidential character roster & experimental UI sandbox.' });
  }

  const handleNav = (id) => {
    cyberAudio.playClick();
    setCurrentView(id);
    window.location.hash = id;
    setMenuOpen(false);
  };

  const toggleAudio = () => {
    const state = cyberAudio.toggle();
    setAudioEnabled(state);
    if (state) cyberAudio.playClick();
  };

  const toggleDev = () => {
    cyberAudio.playClick();
    const newState = !devEnabled;
    setDevEnabled(newState);
    if (newState) {
      setCurrentView('dev');
      window.location.hash = 'dev';
      setMenuOpen(false);
    } else if (currentView === 'dev') {
      setCurrentView('games');
      window.location.hash = 'games';
    }
  };

  return (
    <>
      {/* Floating Top-Left HUD Studio Branding - Slides up smoothly when drawer opens */}
      <div 
        className={`fixed top-6 left-6 xl:top-8 xl:left-10 z-40 flex items-center gap-3 xl:gap-5 px-4 py-2.5 xl:px-6 xl:py-3.5 bg-void/90 backdrop-blur-md border border-white/20 hover:border-signal transition-all duration-500 shadow-2xl cursor-pointer group transform ${
          menuOpen ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'
        }`}
        onClick={() => handleNav('games')}
        onMouseEnter={() => cyberAudio.playHover()}
      >
        <div className="w-3 h-3 xl:w-4 xl:h-4 bg-signal group-hover:scale-125 transition-transform animate-pulse"></div>
        <div className="text-headline-md font-headline-md text-pure tracking-widest uppercase text-xl md:text-2xl xl:text-4xl">
          MOONSHINE <span className="text-signal text-base xl:text-2xl">// ESPERANCE</span>
        </div>
      </div>

      {/* Floating Top-Right Menu Trigger Button - Slides up smoothly when drawer opens */}
      <button 
        onClick={() => { cyberAudio.playClick(); setMenuOpen(true); }}
        onMouseEnter={() => cyberAudio.playHover()}
        aria-label="Open navigation drawer"
        className={`fixed top-6 right-6 xl:top-8 xl:right-10 z-40 flex items-center gap-3 xl:gap-4 px-5 py-2.5 xl:px-8 xl:py-4 bg-void/90 backdrop-blur-md border border-white/20 hover:border-signal hover:bg-signal/10 transition-all duration-500 group shadow-2xl cursor-pointer transform ${
          menuOpen ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'
        }`}
      >
        {/* Animated 3-Line Hamburger Icon */}
        <div className="relative w-5 h-5 xl:w-7 xl:h-7 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out">
          <span className="absolute w-5 h-0.5 xl:w-7 xl:h-1 -translate-y-1.5 xl:-translate-y-2 bg-white group-hover:bg-signal transition-all duration-300"></span>
          <span className="absolute w-5 h-0.5 xl:w-7 xl:h-1 bg-white group-hover:bg-signal transition-all duration-300"></span>
          <span className="absolute w-5 h-0.5 xl:w-7 xl:h-1 translate-y-1.5 xl:translate-y-2 bg-white group-hover:bg-signal transition-all duration-300"></span>
        </div>

        <span className="font-label-md text-sm xl:text-lg uppercase tracking-wider text-pure group-hover:text-signal">
          MENU
        </span>
      </button>

      {/* Fullscreen Drawer Menu Overlay with Split Sliding Animation */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col lg:flex-row bg-void/95 backdrop-blur-3xl overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Left Pane (~60% width): Moonshine Entertainment Key Art Preview - Slides in from LEFT on desktop only */}
        <div 
          className={`hidden lg:flex lg:w-3/5 relative bg-black items-center justify-center overflow-hidden border-r border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Background Image */}
          <img 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-55 scale-105 animate-pulse-slow"
            alt="Moonshine Interactive Key Art"
            src={projectEsperanceScreensImg}
          />
          {/* Scanline & Dark Gradients */}
          <div className="absolute inset-0 scanlines opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-void via-black/30 to-black/80"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/90"></div>

          {/* Centered Graphic Emblem */}
          <div className="relative z-10 text-center max-w-md xl:max-w-2xl p-10 xl:p-16 border border-white/10 bg-black/60 backdrop-blur-md cyber-card">
            <div className="font-label-sm text-xs xl:text-base text-signal tracking-[0.4em] uppercase mb-2 xl:mb-4">// FLAGSHIP PROJECT</div>
            <div className="font-headline-xl text-8xl lg:text-9xl xl:text-[180px] 2xl:text-[220px] text-pure tracking-widest leading-none glow-signal mb-1 xl:mb-3">ESP</div>
            <div className="font-headline-md text-2xl xl:text-4xl text-pure uppercase tracking-[0.3em] opacity-90">ESPERANCE</div>
            <div className="w-16 xl:w-32 h-0.5 xl:h-1 bg-signal mx-auto my-4 xl:my-8"></div>
            <p className="font-body-md text-xs xl:text-lg text-steel leading-relaxed">
              Story-driven cyberpunk adventure set in the oppressive comfort of Silver City. Crafted by our team in Chennai.
            </p>
          </div>

          {/* Bottom Left: Release Target */}
          <div className="absolute bottom-10 xl:bottom-16 left-10 xl:left-16 z-10">
            <div className="font-label-sm text-xs xl:text-base text-steel uppercase tracking-widest">TARGET RELEASE</div>
            <div className="font-headline-md text-3xl xl:text-5xl text-pure uppercase mt-1">Q4 2027 // CHENNAI HQ</div>
          </div>

          {/* Bottom Center Pill Button matching GTA VI layout */}
          <div className="absolute bottom-10 xl:bottom-16 left-1/2 -translate-x-1/2 z-10">
            <button
              onClick={() => handleNav('contact')}
              onMouseEnter={() => cyberAudio.playHover()}
              className="btn-signal px-8 py-3 xl:px-12 xl:py-5 rounded-full font-label-md text-xs xl:text-base uppercase tracking-widest text-white shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              Contact Studio HQ
            </button>
          </div>

          {/* Bottom Right: Platform Badge */}
          <div className="absolute bottom-10 xl:bottom-16 right-10 xl:right-16 z-10 text-right">
            <div className="font-headline-md text-2xl xl:text-4xl text-pure tracking-widest">UNREAL ENGINE 5</div>
            <div className="font-label-sm text-xs xl:text-base text-steel uppercase mt-1">PC // PS5 // XBOX SERIES X</div>
          </div>
        </div>

        {/* Right Pane (~40% width on desktop, 100% on mobile/tablet): Vertical Navigation Sidebar - Slides in from RIGHT */}
        <div 
          className={`w-full lg:w-2/5 h-full bg-surface/98 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 relative z-20 overflow-y-auto transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Title Header with Audio Toggle & Close Button inside Top Right */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 xl:pb-8 border-b border-white/10">
            <div className="flex items-center gap-3 xl:gap-4">
              <span className="material-symbols-outlined text-signal text-xl xl:text-3xl">terminal</span>
              <span className="font-label-md text-xs xl:text-base text-steel uppercase tracking-widest">MOONSHINE // ARCHIVES</span>
            </div>
            
            {/* Top Right Controls: Dev & Audio On/Off inside option drawer + Close X Button */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-3 xl:gap-5 self-end sm:self-auto">
              <button 
                onClick={toggleDev}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`flex items-center gap-2 xl:gap-3 px-3 py-2 xl:px-5 xl:py-3 border transition-all font-label-md text-xs xl:text-base shadow-lg cursor-pointer ${
                  devEnabled ? 'bg-signal/20 border-signal text-white font-bold glow-signal' : 'bg-black border-white/20 hover:border-signal/70 text-steel'
                }`}
              >
                <span className={`w-2 h-2 xl:w-3 xl:h-3 rounded-full inline-block ${devEnabled ? 'bg-signal animate-ping' : 'bg-steel/50'}`}></span>
                <span>DEV: {devEnabled ? 'ON' : 'OFF'}</span>
              </button>

              <button 
                onClick={toggleAudio}
                onMouseEnter={() => cyberAudio.playHover()}
                className="flex items-center gap-2.5 xl:gap-3 px-3.5 py-2 xl:px-6 xl:py-3 bg-black border border-white/20 hover:border-signal transition-all text-white font-label-md text-xs xl:text-base shadow-lg cursor-pointer"
              >
                <span className={`w-2.5 h-2.5 xl:w-3.5 xl:h-3.5 rounded-full inline-block ${audioEnabled ? 'bg-green-500 animate-ping' : 'bg-red-500'}`}></span>
                <span>AUDIO: {audioEnabled ? 'ON' : 'OFF'}</span>
              </button>

              <button
                onClick={() => { cyberAudio.playClick(); setMenuOpen(false); }}
                onMouseEnter={() => cyberAudio.playHover()}
                aria-label="Exit sidebar"
                className="w-10 h-10 xl:w-14 xl:h-14 rounded-full bg-white/10 hover:bg-signal text-white hover:text-white flex items-center justify-center transition-all shadow-lg group shrink-0 cursor-pointer"
              >
                <svg className="w-5 h-5 xl:w-7 xl:h-7 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center Stacked Navigation Links */}
          <div className="my-auto py-8 space-y-3 xl:space-y-6">
            {navItems.map(item => (
              <div
                key={item.id}
                onClick={() => handleNav(item.id)}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`group flex items-center justify-between py-4 px-3 xl:py-6 xl:px-6 cursor-pointer transition-all border-b border-white/5 rounded ${
                  currentView === item.id 
                    ? 'text-signal pl-6 xl:pl-10 border-l-4 xl:border-l-8 border-signal bg-signal/10' 
                    : 'text-pure hover:text-signal hover:pl-6 xl:hover:pl-10 hover:bg-white/5'
                }`}
              >
                <div>
                  <div className="font-headline-md text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl uppercase tracking-wider leading-none transition-colors group-hover:text-signal">
                    {item.label}
                  </div>
                  <div className="font-label-sm text-xs xl:text-base text-steel mt-1 xl:mt-2 uppercase opacity-70 group-hover:opacity-100">
                    {item.sub}
                  </div>
                </div>
                <span className="material-symbols-outlined text-2xl sm:text-3xl xl:text-5xl opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  chevron_right
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 xl:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs xl:text-base font-label-sm text-steel">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm xl:text-xl text-signal">location_on</span>
              <span>CHENNAI STUDIO // GLOBAL AUDIENCE</span>
            </div>
            <div className="uppercase opacity-70">
              UNREAL ENGINE 5 // PROTOTYPE ALPHA
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
