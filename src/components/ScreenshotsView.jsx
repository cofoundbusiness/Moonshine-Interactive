import React, { useRef } from 'react';
import { cyberAudio } from '../utils/audioEngine';
import sceneInterrogationImg from '../assets/scene-interrogation.jpg';
import projectEsperanceScreensImg from '../assets/project-esperance-screens.jpg';
import esperanceUsbImg from '../assets/esperance-usb.jpg';
import shatteredGlassImg from '../assets/shattered-glass-esperance.png';
import standoffRationImg from '../assets/standoff-ration-center.png';

export default function ScreenshotsView({ openTrailer, openLightbox }) {
  const scrollRef = useRef(null);
  const screenshots = [
    { src: shatteredGlassImg, title: 'Shattered Glass Key Card Capture', caption: 'Subject Kaelen through shattered security glass holding encrypted 3SPERANCE key.' },
    { src: standoffRationImg, title: 'District 01 Ration Center Standoff', caption: 'UE5 Real-time standoff encounter at District 01 Ration Center Checkpoint.' },
    { src: sceneInterrogationImg, title: 'Real-Time Interrogation Staging', caption: 'ESPERANCE: Dialogue & Interrogation Cutscene Staging in UE5' },
    { src: projectEsperanceScreensImg, title: 'Confidential AI Surveillance Wall', caption: 'Project Esperance: Confidential AI Core Surveillance & Archive Wall' },
    { src: esperanceUsbImg, title: 'Encrypted Hardware Key', caption: 'Subject Kaelen: Encrypted "3SPERANCE" Hardware Security Key' }
  ];

  return (
    <div className="pt-28 xl:pt-40 px-margin-mobile pb-32 xl:pb-48">
      <div className="max-w-container-max mx-auto">
        
        {/* Page 4 Hero Banner */}
        <div className="text-center max-w-4xl xl:max-w-6xl mx-auto mb-16 xl:mb-24">
          <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// PRE-ALPHA VISUAL ARCHIVE</div>
          <h1 className="font-headline-lg text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-pure uppercase leading-none">SEE ESPERANCE</h1>
          <p className="font-label-sm text-xs xl:text-lg text-signal uppercase tracking-widest mt-4 xl:mt-6">
            Pre-alpha footage — not representative of final visual quality.
          </p>
        </div>

        {/* Hero Video Player Embed Simulation */}
        <div 
          onClick={() => { cyberAudio.playClick(); if (openTrailer) openTrailer(); else alert('Simulating UE5 Video Stream...'); }}
          onMouseEnter={() => cyberAudio.playHover()}
          className="aspect-video bg-black relative overflow-hidden border border-signal cyber-card cursor-pointer group shadow-2xl mb-24 xl:mb-36"
        >
          <img alt="See Esperance Hero Embed" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" src={standoffRationImg} />
          <div className="absolute inset-0 scanlines opacity-60"></div>
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center group-hover:bg-black/20 transition-all">
            <div className="w-20 h-20 xl:w-32 xl:h-32 rounded-full bg-signal flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform mb-4">
              <span className="material-symbols-outlined text-5xl xl:text-7xl">play_arrow</span>
            </div>
            <span className="font-headline-md text-2xl xl:text-4xl text-pure uppercase tracking-widest">LAUNCH REVEAL TRAILER [UE5 PRE-ALPHA]</span>
          </div>
        </div>

        {/* Section — Trailer: THE FIRST LOOK */}
        <div className="mb-24 xl:mb-36 border-b border-white/10 pb-16 xl:pb-24">
          <div className="max-w-3xl xl:max-w-5xl">
            <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// SECTION — TRAILER</div>
            <h2 className="font-headline-lg text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl text-pure uppercase mb-6 xl:mb-8">THE FIRST LOOK</h2>
            <p className="font-body-lg text-body-lg xl:text-2xl 2xl:text-3xl text-steel leading-relaxed">
              Watch the first gameplay reveal of ESPERANCE — a glimpse into Silver City, the AI-controlled world players will investigate, uncover, and ultimately escape.
            </p>
          </div>
          <div 
            onClick={() => { cyberAudio.playClick(); if (openTrailer) openTrailer(); }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="mt-10 xl:mt-16 aspect-video max-w-4xl xl:max-w-6xl bg-surface border border-white/20 cyber-card cursor-pointer group overflow-hidden relative shadow-2xl"
          >
            <img alt="First Look Video Embed" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={shatteredGlassImg} />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="flex items-center gap-4 py-4 px-8 bg-black/80 border border-signal text-signal font-label-md text-sm xl:text-xl uppercase group-hover:bg-signal group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-2xl xl:text-3xl">play_circle</span> Watch First Look Reveal
              </div>
            </div>
          </div>
        </div>

        {/* Section — Screenshot Gallery: THE WORLD OF SILVER CITY */}
        <div className="mb-24 xl:mb-36">
          <div className="mb-12 xl:mb-16">
            <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// SECTION — SCREENSHOT GALLERY</div>
            <h2 className="font-headline-lg text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl text-pure uppercase">THE WORLD OF SILVER CITY</h2>
            <p className="font-label-sm text-xs xl:text-lg text-steel mt-2">Click any screenshot below for full-screen lightbox inspection.</p>
          </div>

          <div className="relative group">
            {/* Left Navigation Arrow */}
            <button 
              onClick={() => {
                cyberAudio.playClick();
                scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 xl:w-16 xl:h-16 bg-black/80 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-signal transition-all cursor-pointer shadow-2xl hidden md:flex hover:scale-110"
            >
              <span className="material-symbols-outlined text-3xl xl:text-4xl">chevron_left</span>
            </button>
            
            {/* Right Navigation Arrow */}
            <button 
              onClick={() => {
                cyberAudio.playClick();
                scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 xl:w-16 xl:h-16 bg-black/80 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-signal transition-all cursor-pointer shadow-2xl hidden md:flex hover:scale-110"
            >
              <span className="material-symbols-outlined text-3xl xl:text-4xl">chevron_right</span>
            </button>

            {/* Horizontally Scrolling Container */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto items-start gap-6 xl:gap-10 pb-8 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {screenshots.map((s, idx, arr) => (
                <div 
                  key={idx}
                  onClick={() => { cyberAudio.playClick(); if (openLightbox) openLightbox(s.src, s.caption, arr, idx); }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] xl:min-w-[500px] h-fit snap-center cyber-card border border-white/10 bg-surface overflow-hidden cursor-pointer group/card shadow-2xl flex flex-col shrink-0"
                >
                  <div className="aspect-video overflow-hidden relative shrink-0">
                    <img alt={s.title} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" src={s.src} />
                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-all"></div>
                  </div>
                  <div className="p-5 xl:p-8 flex-grow">
                    <div className="font-label-sm text-xs xl:text-sm text-signal uppercase mb-1">// SCREENSHOT 0{idx+1}</div>
                    <div className="font-headline-md text-xl xl:text-3xl text-pure">{s.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section — Concept Art: EARLY VISUAL DEVELOPMENT */}
        <div>
          <div className="mb-12 xl:mb-16">
            <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// SECTION — CONCEPT ART</div>
            <h2 className="font-headline-lg text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl text-pure uppercase">EARLY VISUAL DEVELOPMENT</h2>
            <p className="font-body-md text-steel xl:text-xl mt-3 leading-relaxed max-w-3xl">
              A look at the concept art and visual direction shaping ESPERANCE's world, characters, and environments across Silver City.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-14">
            <div 
              onClick={() => { cyberAudio.playClick(); if (openLightbox) openLightbox(projectEsperanceScreensImg, 'Concept Art: Confidential AI Core Surveillance Architecture'); }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="cyber-card border border-white/10 overflow-hidden cursor-pointer group shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img alt="Concept Art 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={projectEsperanceScreensImg} />
              </div>
              <div className="p-6 xl:p-10 bg-surface">
                <div className="font-label-md text-lg xl:text-2xl text-pure">Surveillance Architecture Study</div>
                <p className="text-xs xl:text-base text-steel mt-2">Atmospheric red neon data terminals inside District 01.</p>
              </div>
            </div>

            <div 
              onClick={() => { cyberAudio.playClick(); if (openLightbox) openLightbox(shatteredGlassImg, 'Concept Art: Widescreen Key Card & Shattered Glass Lighting'); }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="cyber-card border border-white/10 overflow-hidden cursor-pointer group shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img alt="Concept Art 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={shatteredGlassImg} />
              </div>
              <div className="p-6 xl:p-10 bg-surface">
                <div className="font-label-md text-lg xl:text-2xl text-pure">Reflective Fracture & Neon Study</div>
                <p className="text-xs xl:text-base text-steel mt-2">Intimate character staging through fractured security glass inside Unreal Engine 5.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
