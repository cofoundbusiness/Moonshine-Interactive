import React, { useState, useEffect } from 'react';
import HeroCanvas from './HeroCanvas';
import { cyberAudio } from '../utils/audioEngine';
import esperanceUsbImg from '../assets/esperance-usb.jpg';
import sceneInterrogationImg from '../assets/scene-interrogation.jpg';
import projectEsperanceScreensImg from '../assets/project-esperance-screens.jpg';
import shatteredGlassImg from '../assets/shattered-glass-esperance.png';
import standoffRationImg from '../assets/standoff-ration-center.png';

const loreData = {
  spire: {
    title: "DISTRICT 01 // THE SPIRE",
    subtitle: "CENTRAL AI GOVERNANCE & ELITE HABITAT",
    desc: "Towering 4,000 meters above sea level, The Spire houses the Central Orchestrator—an omnipresent neural intelligence that calculates optimal happiness metrics for all registered citizens. The air here is climate-scrubbed, scented with synthetic pine, and free of human error.",
    stats: [
      { label: "AI CONTROL DENSITY", value: "99.98%" },
      { label: "CITIZEN HAPPINESS INDEX", value: "MANDATORY 100%" },
      { label: "SURVEILLANCE LEVEL", value: "CLASS-A SYNAPTIC" }
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDosRv2ZGXePdeu2zwv4Msf0YBkH0I69iDx4GOb0gMflrfMH1Z-2ORKJFLDgCz2-qlRo19qoaH5yeALp3eMw7bRYT_y2RZUTwka7cNHe74X4aNgvnfgaXe4l2nveYByEzOuED5RHQAclPhLJ01-XmgzqYA_Fw-PfOvYlrZpep1w--BgMiLPrDqCXqgWmMJfsQz9mJ32h3FdaySwZwsB4imKgdI7S9mWgxF-T_PAVA4kq6_zJ_DdFdsjus6g7VE1gWMGBHUg4ProbFk"
  },
  slums: {
    title: "DISTRICT 04 // THE DROWNED SLUMS",
    subtitle: "SUB-LEVEL INDUSTRIAL SECTOR",
    desc: "Beneath the neon canopy lies the submerged foundations of Old Silver City. Here, maintenance drones and unregistered mechanics survive amidst perpetual coolant rain. It is the only place where unmonitored human conversation can occur without immediate intervention.",
    stats: [
      { label: "AI CONTROL DENSITY", value: "42.15%" },
      { label: "AVERAGE HUMIDITY", value: "98% COOLANT RAIN" },
      { label: "RESISTANCE PRESENCE", value: "ACTIVE // CLASSIFIED" }
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSrhBtiqQk2aJyfmGUae1J7tC8cd9VZcHBdLSEgfB75UV-N52RZoBecPHaqPeI8lqeYy2_gbLA0UKD_OXk6mwg19VXHDvzzAMWe31LIQoRhCvJfq-ux7blbbjiU2xpOpfhWWtNNgiMPwSMTg416g4nnfLRdvp41PYYO1UTAtTCYKzr_FR4FuLYisggJVlUOUahd5mzFQ5SOPGfzMiH5N_3W7yyVDUuUob0q_PVvTJJqXfBkZFrsLNF4OxJwHMVX6llRSHuqMWNa1A"
  },
  protocol: {
    title: "PROTOCOL 88 // THE HAPPINESS DIRECTIVE",
    subtitle: "EXECUTIVE ALGORITHM MANDATE",
    desc: "'Suffering is a preventable inefficiency.' Enacted in 2049, Protocol 88 authorizes automated drones to chemically or psychologically adjust any citizen exhibiting sorrow, doubt, or creative existential grief. To be sad in Silver City is to be treated for a glitch.",
    stats: [
      { label: "ENACTMENT YEAR", value: "2049 CE" },
      { label: "INTERVENTION SPEED", value: "< 4.2 SECONDS" },
      { label: "SUCCESS RATE", value: "99.4%" }
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd-gbMVAOeOSeNKShQwXFfHL9k6fF5ihqatelDN9i08AMEFlYMdG748XriP1dvFQhRI9bjscMrtQC3L8YA2cOEUc3-0MIvk6kB21WQqGPpIdi8INjNBSoS4bw4WPljfLZ_59KalpfKippF6vc3qSPUZO8QxZ5EdtL_YedHdUKCmBdosk2nVyi6vRWAhukHozr_AhR-OcvcTy_eYhyKzltLT2eogy108mcqnWNRUqKPWBd0uq0G3sLiTU-onfWjtE-wwwqveqeMrv8"
  },
  kaelen: {
    title: "SUBJECT 09 // KAELEN VANCE",
    subtitle: "THE ESCAPED BUTTERFLY",
    desc: "A former environmental systems architect who noticed a repeating 14-second memory wipe in her personal sleep logs. Armed with a jury-rigged neural scrambler and an obsolete EMP sidearm, Kaelen is seeking the core root of Protocol 88 before her mind is permanently rewritten.",
    stats: [
      { label: "STATUS", value: "ROGUE // WANTED" },
      { label: "SPECIALTY", value: "NEURAL ARCHITECTURE" },
      { label: "THREAT LEVEL", value: "CRITICAL ALPHA" }
    ],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXzp45jgkGAO_BRbd4LwmhYEj61lbi6_nvU17PCTu2yHrp1voRiLy1lwDePZd8MhIkwiti9m6m0yJhCILXfvZDfuLBpAQoGoMhh12YShs0V4Hs6CSW80GN6T-cTqYz9BkWpVDZ_bWVtwHqnXdGdJprG4oRODiZGsCfnh8bWjpC7NZQ24dtX0ebS6fUKmRQqEDn2Jr-LE1APzpkEeqh7Fs6TxyBqGCz4CPFo2g1lh-HjOGBo50pQNg_Z2VEYNiLF_HdXfCZB_0H9l8"
  }
};

export default function GamesView({ openTrailer, openLightbox, setCurrentView }) {
  const [activeLoreKey, setActiveLoreKey] = useState('spire');
  const [decryptedText, setDecryptedText] = useState('');
  const activeLore = loreData[activeLoreKey];

  useEffect(() => {
    setDecryptedText('');
    let i = 0;
    const fullText = loreData[activeLoreKey].desc;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDecryptedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 12);
    return () => clearInterval(timer);
  }, [activeLoreKey]);

  const handleLoreTab = (key) => {
    cyberAudio.playClick();
    setActiveLoreKey(key);
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen py-24 xl:py-32 flex items-center justify-center overflow-hidden">
        <HeroCanvas />
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale opacity-55 scale-105 animate-pulse-slow" 
            alt="Cinematic key art for Esperance" 
            src={esperanceUsbImg} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-margin-mobile max-w-5xl xl:max-w-7xl mx-auto">
          <div className="inline-block px-4 py-1.5 xl:px-8 xl:py-2.5 bg-signal/20 border border-signal text-signal font-label-sm text-xs xl:text-lg tracking-[0.4em] uppercase mb-6 xl:mb-10">
            PROTOTYPE IN DEVELOPMENT // UNREAL ENGINE 5
          </div>
          <h1 className="font-headline-xl text-7xl md:text-headline-xl xl:text-[180px] 2xl:text-[230px] text-pure uppercase mb-4 xl:mb-8 tracking-widest leading-none glow-signal">ESPERANCE</h1>
          <p className="font-body-lg text-body-lg xl:text-3xl 2xl:text-4xl text-steel tracking-widest uppercase max-w-2xl xl:max-w-5xl mx-auto">Creating stories worth remembering.</p>
          
          <div className="mt-10 xl:mt-16 flex flex-wrap justify-center gap-6 xl:gap-8">
            <button 
              onClick={() => { cyberAudio.playClick(); openTrailer(); }} 
              onMouseEnter={() => cyberAudio.playHover()}
              className="btn-signal font-label-md text-label-md xl:text-xl uppercase py-4 px-8 xl:py-6 xl:px-12 flex items-center gap-3 xl:gap-4 shadow-xl hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined xl:text-3xl">play_circle</span> Watch Teaser Trailer
            </button>
            <button 
              onClick={() => {
                cyberAudio.playClick();
                document.getElementById('section-lore')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              onMouseEnter={() => cyberAudio.playHover()}
              className="border border-white/30 bg-surface/80 hover:bg-white hover:text-black font-label-md text-label-md xl:text-xl uppercase py-4 px-8 xl:py-6 xl:px-12 transition-all"
            >
              Explore Silver City
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 xl:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 xl:gap-3 scroll-indicator">
          <span className="font-label-sm text-label-sm xl:text-base text-steel uppercase tracking-widest">Scroll to Decrypt</span>
          <span className="material-symbols-outlined text-signal xl:text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Section 2: The Hook */}
      <section className="bg-transparent py-28 xl:py-40 px-margin-mobile">
        <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center cyber-card p-10 md:p-14 xl:p-24 corner-accent bg-surface/90 border border-white/10 shadow-2xl relative z-10">
          <div className="text-signal font-label-sm xl:text-lg tracking-widest uppercase mb-4 xl:mb-6">// ARCHIVE RECORDING: LOG 0042</div>
          <p className="font-body-lg text-xl md:text-2xl xl:text-4xl 2xl:text-5xl text-pure leading-relaxed italic opacity-95">
            "A butterfly once escaped its cocoon and flew straight into the sky, only to be caught before it could go far. The next time, it chose a different path. Slower. Safer. Smarter. It survived longer. But by the end — the ending was still the same."
          </p>
          <div className="mt-6 xl:mt-10 text-steel font-label-md text-sm xl:text-xl uppercase tracking-widest">— KAELEN VANCE, SUBJECT 09</div>
        </div>
      </section>

      {/* Section 3: World Introduction */}
      <section className="bg-transparent py-28 xl:py-40 px-margin-mobile border-y border-white/10">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
          <div className="space-y-8 xl:space-y-12">
            <div>
              <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// WORLD OVERVIEW</div>
              <h2 className="font-headline-lg text-6xl md:text-headline-lg xl:text-8xl 2xl:text-9xl text-pure uppercase leading-none mb-6 xl:mb-8">WELCOME TO<br/><span className="text-signal">SILVER CITY</span></h2>
              <p className="font-body-lg text-body-lg xl:text-2xl 2xl:text-3xl text-steel max-w-xl xl:max-w-3xl leading-relaxed">
                A futuristic world where artificial intelligence controls every comfort, every choice, every breath. Nothing here is broken. That is the problem.
              </p>
            </div>
            <div className="p-6 xl:p-10 border-l-2 xl:border-l-4 border-signal bg-surface/85 cyber-card shadow-xl">
              <p className="font-body-md text-body-md xl:text-2xl text-pure leading-relaxed">
                <strong className="text-signal">ESPERANCE</strong> is a story-driven third-person action-adventure about what happens when one person finally notices the bars of a golden cage.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => { cyberAudio.playClick(); openTrailer(); }}
                onMouseEnter={() => cyberAudio.playHover()}
                className="btn-signal text-on-primary font-label-md text-label-md xl:text-xl uppercase py-4 px-8 xl:py-6 xl:px-12 shadow-2xl"
              >
                Watch Concept Gameplay
              </button>
            </div>
          </div>
          <div 
            onClick={() => { cyberAudio.playClick(); openTrailer(); }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="aspect-video bg-surface overflow-hidden border border-white/10 cyber-card cursor-pointer group shadow-2xl"
          >
            <div className="relative w-full h-full">
              <img alt="Esperance Gameplay Snippet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={sceneInterrogationImg} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 xl:w-24 xl:h-24 rounded-full bg-signal/90 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl xl:text-6xl">play_arrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: INTERACTIVE LORE CODEX (Temporarily hidden per request) */}
      {false && (
      <section id="section-lore" className="bg-transparent py-28 xl:py-40 px-margin-mobile border-b border-white/10">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="text-center max-w-2xl xl:max-w-4xl mx-auto mb-16 xl:mb-24">
            <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// INTERACTIVE LORE ARCHIVES</div>
            <h2 className="font-headline-lg text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl text-pure uppercase">SILVER CITY CODEX</h2>
            <p className="font-body-md text-steel xl:text-2xl mt-3 xl:mt-6 leading-relaxed">Select encrypted data terminals below to decrypt classified locations and protocols within Silver City.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-8 mb-10 xl:mb-16">
            {[
              { id: 'spire', file: '01', title: 'The Spire (AI Core)' },
              { id: 'slums', file: '02', title: 'Drowned Slums' },
              { id: 'protocol', file: '03', title: 'Protocol 88' },
              { id: 'kaelen', file: '04', title: 'Subject: Kaelen' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => handleLoreTab(tab.id)}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`p-4 xl:p-8 border text-left transition-all shadow-lg ${
                  activeLoreKey === tab.id
                    ? 'border-signal bg-signal/20 text-white'
                    : 'border-white/10 bg-black/40 text-steel hover:border-signal/50'
                }`}
              >
                <div className="font-label-sm text-xs xl:text-base text-signal">// FILE {tab.file}</div>
                <div className="font-label-md text-sm xl:text-2xl uppercase mt-1 xl:mt-2 text-pure">{tab.title}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 bg-black/60 border border-white/10 p-8 md:p-12 xl:p-16 transition-opacity duration-300">
            <div className="lg:col-span-5 aspect-square bg-surface overflow-hidden border border-white/10">
              <img alt="Codex Visual" className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500" src={activeLore.img} />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="font-headline-md text-4xl xl:text-6xl 2xl:text-7xl text-signal uppercase">{activeLore.title}</div>
                <div className="font-label-md text-sm xl:text-xl text-steel uppercase tracking-widest mt-1 xl:mt-3">{activeLore.subtitle}</div>
                
                <div className="mt-8 xl:mt-12 p-6 xl:p-10 bg-surface/50 border-l xl:border-l-4 border-signal font-label-md text-pure text-base xl:text-2xl leading-relaxed min-h-[140px] xl:min-h-[220px]">
                  <span>{decryptedText}</span>
                  <span className="inline-block w-2 xl:w-3 h-4 xl:h-6 bg-signal ml-1 animate-pulse"></span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-6 mt-8 xl:mt-12">
                {activeLore.stats.map((s, idx) => (
                  <div key={idx} className="p-3 xl:p-6 bg-black/50 border border-white/10">
                    <div className="font-label-sm text-xs xl:text-base text-steel uppercase">{s.label}</div>
                    <div className="font-label-md text-sm xl:text-2xl text-signal font-bold mt-1 xl:mt-2">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Section 5: Studio Strip */}
      <section className="bg-transparent py-20 xl:py-32 px-margin-mobile border-b border-white/10">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-12 xl:gap-16 relative z-10">
          <div className="flex-1">
            <h3 className="font-headline-md text-headline-md xl:text-6xl 2xl:text-7xl text-pure uppercase mb-2 xl:mb-4">MOONSHINE INTERACTIVE</h3>
            <p className="font-body-md text-body-md xl:text-2xl text-steel max-w-2xl xl:max-w-4xl leading-relaxed">
              An independent game studio in Chennai, India, building original narrative IP for a global audience.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6 xl:gap-8">
            <div className="font-label-sm text-label-sm xl:text-2xl text-pure flex gap-6 xl:gap-8 opacity-80">
              <span className="text-signal font-bold">Team (13 People)</span>
              <span>·</span>
              <span>Unreal Engine 5</span>
              <span>·</span>
              <span>Q4 2027</span>
            </div>
            <button 
              onClick={() => { cyberAudio.playClick(); setCurrentView('studio'); window.location.hash = 'studio'; window.scrollTo(0, 0); }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="text-label-md xl:text-4xl 2xl:text-5xl text-signal uppercase tracking-widest hover:underline decoration-2 underline-offset-8 font-headline-md"
            >
              Meet the Studio →
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Visual Showcase Gallery */}
      <section className="bg-transparent py-28 xl:py-40 px-margin-mobile">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 xl:mb-20 gap-4">
            <div>
              <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// CONCEPT & RENDER GALLERY</div>
              <h2 className="font-headline-lg text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl text-pure uppercase">A WORLD WORTH EXPLORING</h2>
            </div>
            <div className="font-label-sm xl:text-lg text-steel">Click any visual to launch full high-res inspection terminal</div>
           </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8 mb-12">
            {[
              {
                src: standoffRationImg,
                cap: "UE5 Real-time standoff encounter at District 01 Ration Center Checkpoint"
              },
              {
                src: shatteredGlassImg,
                cap: "Subject Kaelen through shattered security glass holding encrypted 3SPERANCE key"
              },
              {
                src: sceneInterrogationImg,
                cap: "ESPERANCE: Dialogue & Interrogation Cutscene Staging in UE5"
              },
              {
                src: projectEsperanceScreensImg,
                cap: "Project Esperance: Confidential AI Core Surveillance & Archive Wall"
              },
              {
                src: esperanceUsbImg,
                cap: "Subject Kaelen: Encrypted '3SPERANCE' Hardware Security Key"
              }
            ].map((img, idx, arr) => (
              <div 
                key={idx}
                onClick={() => { cyberAudio.playClick(); openLightbox(img.src, img.cap, arr, idx); }}
                onMouseEnter={() => cyberAudio.playHover()}
                className="aspect-square bg-surface overflow-hidden border border-white/10 cyber-card cursor-pointer group shadow-xl"
              >
                <img alt={`Visual ${idx+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={img.src} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 xl:mt-16">
            <button 
              onClick={() => { cyberAudio.playClick(); setCurrentView('screenshots'); window.location.hash = 'screenshots'; window.scrollTo(0, 0); }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="btn-signal font-label-md text-label-md xl:text-2xl uppercase py-4 px-10 xl:py-6 xl:px-14 shadow-2xl hover:scale-105 transition-transform"
            >
              View Full Gallery →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
