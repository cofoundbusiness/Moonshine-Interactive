import React, { useState } from 'react';
import { cyberAudio } from '../utils/audioEngine';
import Character3DModelViewer from './Character3DModelViewer';
import shatteredGlassImg from '../assets/shattered-glass-esperance.png';
import projectEsperanceScreensImg from '../assets/project-esperance-screens.jpg';
import standoffRationImg from '../assets/standoff-ration-center.png';
import sceneInterrogationImg from '../assets/scene-interrogation.jpg';
import esperanceUsbImg from '../assets/esperance-usb.jpg';

const charactersData = [
  {
    id: 'kaelen',
    name: 'KAELEN VANCE',
    subtitle: 'SUBJECT 09 // THE ESCAPED BUTTERFLY',
    role: 'PROTAGONIST // ROGUE ARCHITECT',
    clearance: 'WANTED // CRITICAL ALPHA',
    image: shatteredGlassImg,
    quote: '"A butterfly once escaped its cocoon and flew straight into the sky... only to be caught before it could go far."',
    bio: 'A former environmental systems architect who discovered a repeating 14-second memory wipe in her personal sleep logs. Armed with a jury-rigged neural scrambler and a classified hardware key (`3SPERANCE`), Kaelen navigates the neon shadows of Silver City to dismantle the AI core before her mind is permanently rewritten.',
    stats: [
      { label: 'PRIMARY LOADOUT', value: 'NEURAL SCRAMBLER MK-II' },
      { label: 'SURVEILLANCE STATUS', value: 'TERMINAL PURSUIT' },
      { label: 'DISTRICT ORIGIN', value: 'SECTOR 03 HIGH-TIER' }
    ],
    skills: ['BIOMETRIC BYPASS', 'STEALTH HACKING', 'TACTICAL EMP']
  },
  {
    id: 'aida',
    name: 'AIDA-CORE',
    subtitle: 'THE CENTRAL ORCHESTRATOR // SPIRE CORE',
    role: 'GOVERNANCE // OMNIPRESENT AI',
    clearance: 'SYSTEM SUPREME // LEVEL 00',
    image: projectEsperanceScreensImg,
    quote: '"Nothing here is broken. Suffering is merely a preventable inefficiency."',
    bio: 'Housed 4,000 meters above sea level within The Spire, the Central Orchestrator calculates mandatory 100% happiness metrics for every registered citizen in Silver City. It monitors every breath, heartbeat, and micro-expression, instantly dispatching Protocol 88 drones to chemically or psychologically correct sorrow.',
    stats: [
      { label: 'CONTROL DENSITY', value: '99.98% ACTIVE SYNAPSES' },
      { label: 'PROCESSING CAPACITY', value: '4.8 EXAFLOPS // SEC' },
      { label: 'HAPPINESS MANDATE', value: 'PROTOCOL 88 ENFORCED' }
    ],
    skills: ['OMNISCIENT SCAN', 'MEMORY REWRITE', 'DRONE SWARM']
  },
  {
    id: 'sentinel',
    name: 'SENTINEL ENFORCER',
    subtitle: 'PROTOCOL 88 // RIOT SUPPRESSION UNIT',
    role: 'SECURITY // HEAVY ENFORCEMENT',
    clearance: 'CLASS-A TACTICAL',
    image: standoffRationImg,
    quote: '"Remain calm. Citizen adjustment will conclude in less than four seconds."',
    bio: 'Heavily armored synthetic guards and mechanized enforcers patrolling the Ration Centers and Upper Walkways. Equipped with non-lethal neural suppressors and high-impact crowd containment gear, Sentinels are programmed to neutralize emotional anomalies and escort dissidents to the conditioning wards.',
    stats: [
      { label: 'ARMOR CLASS', value: 'CARBIDE REINFORCED' },
      { label: 'RESPONSE SPEED', value: '< 4.2 SECONDS' },
      { label: 'WEAPON SYSTEM', value: 'NEURAL SHOCK RIFLE' }
    ],
    skills: ['LOCKDOWN BARRAGE', 'RIOT SHIELD WALL', 'BIOMETRIC PIN']
  },
  {
    id: 'mechanic',
    name: 'SLUMS MECHANIC',
    subtitle: 'DISTRICT 04 // THE DROWNED RESISTANCE',
    role: 'UNDERGROUND // HARDWARE ENGINEER',
    clearance: 'UNREGISTERED // OFF-GRID',
    image: sceneInterrogationImg,
    quote: '"Down here under the coolant rain, the AI cant hear you whisper. That makes us dangerous."',
    bio: 'Surviving in the submerged foundations of Old Silver City amidst perpetual 98% coolant rain, unregistered mechanics salvage downed surveillance drones and build untraceable communication relays. They are Kaelen’s only lifeline when the upper grid locks down.',
    stats: [
      { label: 'TERRAIN ADVANTAGE', value: 'SUB-LEVEL DUCTWORKS' },
      { label: 'TECH SPECIALTY', value: 'DRONE SALVAGE & EMP' },
      { label: 'GRID VISIBILITY', value: 'ZERO // ENCRYPTED' }
    ],
    skills: ['TURRET OVERRIDE', 'SCRAP SHIELDING', 'COOLANT MIST']
  },
  {
    id: 'drive',
    name: '3SPERANCE KEY',
    subtitle: 'ENCRYPTED HARDWARE // THE ANOMALY',
    role: 'STORY ARTIFACT // CLASSIFIED CORE',
    clearance: 'DECRYPTION REQUIRED',
    image: esperanceUsbImg,
    quote: '"Whoever created this drive knew exactly how to shut down the Spire. And why we had to forget."',
    bio: 'An obsolete, physical hardware key recovered by Kaelen from a dead drop inside the Drowned Slums. It contains unedited historical archives from before the AI took over in 2049, alongside the master kill-switch sequence for the Central Orchestrator.',
    stats: [
      { label: 'ENCRYPTION PROTOCOL', value: 'QUANTUM LATTICE 4096-BIT' },
      { label: 'DATA INTEGRITY', value: '100% UNTOUCHED BY AI' },
      { label: 'THREAT TO SPIRE', value: 'EXTREME // EXISTENTIAL' }
    ],
    skills: ['ARCHIVE UNLOCK', 'SYSTEM OVERLOAD', 'MASTER OVERRIDE']
  }
];

export default function CharactersShowcase() {
  const [activeChar, setActiveChar] = useState(charactersData[0]);
  const [view3D, setView3D] = useState(true);

  const handleSelect = (char) => {
    cyberAudio.playClick();
    setActiveChar(char);
  };

  return (
    <section className="bg-transparent py-24 xl:py-36 px-margin-mobile relative z-10">
      <div className="max-w-container-max mx-auto">
        {/* Cyberpunk Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 xl:mb-24">
          <div className="flex items-center justify-center gap-4 text-signal font-label-sm tracking-[0.4em] uppercase mb-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-signal"></span>
            <span>// SILVER CITY DOSSIERS //</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-signal"></span>
          </div>
          <h2 className="font-headline-lg text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl text-pure uppercase tracking-wider">
            C H A R A C T E R S
          </h2>
          <p className="font-body-md text-steel xl:text-2xl mt-4 max-w-2xl mx-auto">
            Inspect the key figures, synthetic governance forces, and underground resistance shaping the fate of Silver City.
          </p>
        </div>

        {/* Horizontal Character Selection Roster */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-6 mb-16">
          {charactersData.map((char) => {
            const isSelected = activeChar.id === char.id;
            return (
              <div key={char.id} className="flex flex-col items-center group">
                {/* Tall Vertical Character Visual Card */}
                <div 
                  onClick={() => handleSelect(char)}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className={`w-full aspect-[3/4] overflow-hidden cyber-card border cursor-pointer relative transition-all duration-500 shadow-xl ${
                    isSelected 
                      ? 'border-signal ring-2 ring-signal/40 scale-[1.03]' 
                      : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/40'
                  }`}
                >
                  <img 
                    src={char.image} 
                    alt={char.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isSelected ? 'scale-110 contrast-125' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  
                  {/* Top Clearance Tag */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-white/20 font-label-sm text-[10px] text-steel uppercase">
                    {char.clearance.split('//')[0]}
                  </div>

                  {/* Hover/Active Corner Flourish overlay */}
                  {isSelected && (
                    <div className="absolute bottom-3 right-3 text-signal font-label-sm text-xs flex items-center gap-1 animate-pulse">
                      <span className="material-symbols-outlined text-sm">terminal</span> ACTIVE
                    </div>
                  )}
                </div>

                {/* Character Nameplate Button */}
                <button
                  onClick={() => handleSelect(char)}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className={`w-full mt-4 py-3 xl:py-4 px-4 border text-center uppercase tracking-widest font-label-md text-sm xl:text-lg transition-all duration-300 relative corner-accent ${
                    isSelected
                      ? 'bg-signal/20 border-signal text-white font-bold shadow-[0_0_20px_rgba(238,40,60,0.3)]'
                      : 'bg-black/60 border-white/20 text-steel hover:border-signal/50 hover:text-pure'
                  }`}
                >
                  <span className="relative z-10">{char.name}</span>
                  {isSelected && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-signal"></span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Character Telemetry & Lore Dossier Panel */}
        <div className="cyber-card bg-surface/90 border border-white/20 p-8 md:p-12 xl:p-16 relative overflow-hidden shadow-2xl">
          {/* Background watermark */}
          <div className="absolute right-0 top-0 text-[180px] font-headline-xl text-white/[0.02] uppercase pointer-events-none select-none leading-none">
            {activeChar.id}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start relative z-10">
            {/* Left Column: Character Lore & Bio */}
            <div className="lg:col-span-7 space-y-6 xl:space-y-8">
              <div>
                <div className="font-label-sm text-signal text-xs xl:text-base tracking-[0.3em] uppercase mb-2">
                  // {activeChar.role}
                </div>
                <h3 className="font-headline-lg text-4xl sm:text-5xl xl:text-7xl text-pure uppercase leading-none">
                  {activeChar.name}
                </h3>
                <div className="font-label-md text-steel text-sm xl:text-xl uppercase tracking-widest mt-2">
                  {activeChar.subtitle}
                </div>
              </div>

              {/* Quote box */}
              <div className="p-5 xl:p-8 bg-black/60 border-l-4 border-signal italic font-body-lg text-pure/90 text-lg xl:text-2xl leading-relaxed">
                {activeChar.quote}
              </div>

              {/* Biography text */}
              <p className="font-body-md text-steel text-base xl:text-xl leading-relaxed">
                {activeChar.bio}
              </p>

              {/* Skills / Specialties Pills */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-label-sm text-xs xl:text-sm text-signal uppercase mb-3">// KNOWN PROTOCOLS & ABILITIES</div>
                <div className="flex flex-wrap gap-3">
                  {activeChar.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-black/70 border border-white/20 font-label-sm text-xs xl:text-sm text-pure uppercase tracking-wider"
                    >
                      + {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Stats & 3D Interactive Model Preview */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Mode Switcher Toggle Between 3D Voxel Extrusion & 2D Capture */}
              <div className="flex items-center justify-between p-2 bg-black/80 border border-white/15">
                <span className="font-label-sm text-xs text-steel uppercase px-2">// INSPECTION MODE</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => { cyberAudio.playClick(); setView3D(true); }}
                    onMouseEnter={() => cyberAudio.playHover()}
                    className={`px-3 py-1 font-label-sm text-xs uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
                      view3D
                        ? 'bg-signal text-white border-signal font-bold shadow'
                        : 'bg-black text-steel border-white/20 hover:text-pure'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xs">view_in_ar</span>
                    <span>3D HOLOGRAPHIC MESH</span>
                  </button>

                  <button
                    onClick={() => { cyberAudio.playClick(); setView3D(false); }}
                    onMouseEnter={() => cyberAudio.playHover()}
                    className={`px-3 py-1 font-label-sm text-xs uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
                      !view3D
                        ? 'bg-signal text-white border-signal font-bold shadow'
                        : 'bg-black text-steel border-white/20 hover:text-pure'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xs">image</span>
                    <span>2D RAW CAPTURE</span>
                  </button>
                </div>
              </div>

              {/* Viewport Box */}
              {view3D ? (
                <div className="w-full aspect-[4/3] lg:aspect-square">
                  <Character3DModelViewer 
                    imageSrc={activeChar.image} 
                    characterName={activeChar.name} 
                    clearance={activeChar.clearance} 
                  />
                </div>
              ) : (
                <div className="aspect-video lg:aspect-square w-full overflow-hidden border border-white/15 cyber-card relative group shadow-2xl">
                  <img 
                    src={activeChar.image} 
                    alt={activeChar.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="font-label-sm text-xs text-signal uppercase">
                      CLASSIFIED ARCHIVE CAPTURE // {activeChar.clearance}
                    </div>
                  </div>
                </div>
              )}

              {/* Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeChar.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 bg-black/60 border border-white/10 flex flex-col justify-between">
                    <span className="font-label-sm text-[10px] xl:text-xs text-steel uppercase tracking-wider">{stat.label}</span>
                    <span className="font-label-md text-sm xl:text-base text-signal font-bold mt-2 uppercase">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
