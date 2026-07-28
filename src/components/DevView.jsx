import React, { useState } from 'react';
import { cyberAudio } from '../utils/audioEngine';
import CharactersShowcase from './CharactersShowcase';

export default function DevView() {
  const [activeTab, setActiveTab] = useState('characters');

  return (
    <div className="pt-28 xl:pt-40 px-margin-mobile pb-32 xl:pb-48 relative z-10">
      <div className="max-w-container-max mx-auto">
        {/* Dev Sandbox Header Banner */}
        <div className="p-6 xl:p-10 bg-signal/15 border-2 border-signal/60 mb-12 xl:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_30px_rgba(238,40,60,0.25)]">
          <div>
            <div className="flex items-center gap-3 text-signal font-label-sm text-xs xl:text-base tracking-[0.3em] uppercase mb-1">
              <span className="w-3 h-3 bg-signal animate-ping inline-block rounded-full"></span>
              <span>// MOONSHINE INTERNAL SANDBOX //</span>
            </div>
            <h1 className="font-headline-lg text-4xl sm:text-5xl xl:text-7xl text-pure uppercase leading-none">
              DEVELOPER PROTOTYPE HUB
            </h1>
            <p className="font-body-md text-steel text-sm xl:text-xl mt-2">
              Confidential UI showcases, interactive character rosters, and experimental gameplay interface mockups.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="px-4 py-2 bg-black border border-signal/80 text-signal font-label-md text-xs xl:text-base uppercase tracking-widest">
              STATUS: DEV MODE ACTIVE
            </span>
            <span className="font-label-sm text-[11px] text-steel uppercase">
              CLEARANCE: LEVEL 0 STUDIO ENGINEERING
            </span>
          </div>
        </div>

        {/* Sandbox Navigation Sub-Tabs */}
        <div className="flex flex-wrap gap-3 xl:gap-4 mb-12 border-b border-white/10 pb-6">
          {[
            { id: 'characters', label: 'Character Roster Showcase', badge: 'NEW' },
            { id: 'telemetry', label: 'Rain & Audio Engine Telemetry', badge: 'SYS' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { cyberAudio.playClick(); setActiveTab(tab.id); }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-6 py-3.5 xl:px-8 xl:py-4 border font-label-md text-xs sm:text-sm xl:text-lg uppercase tracking-wider transition-all flex items-center gap-3 ${
                activeTab === tab.id
                  ? 'bg-signal text-white border-signal font-bold shadow-lg'
                  : 'bg-black/60 text-steel border-white/15 hover:border-white/50 hover:text-pure'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`px-2 py-0.5 text-[10px] font-bold ${activeTab === tab.id ? 'bg-black text-signal' : 'bg-signal/20 text-signal'}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'characters' && (
          <div className="animate-fade-in">
            <CharactersShowcase />
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="cyber-card bg-surface/90 border border-white/20 p-8 xl:p-14 space-y-8 animate-fade-in">
            <div className="border-b border-white/10 pb-6">
              <h3 className="font-headline-md text-3xl xl:text-5xl text-pure uppercase mb-2">
                CYBER RAIN & AUDIO ENGINE METRICS
              </h3>
              <p className="font-body-md text-steel text-base xl:text-xl">
                Real-time particle and sound synthesizer test bench active across the current browser context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-black/60 border border-white/10 space-y-3">
                <div className="font-label-sm text-xs text-signal uppercase">// ATMOSPHERIC RAIN POOL</div>
                <div className="font-headline-md text-4xl text-pure">160 DROPLETS</div>
                <div className="font-body-md text-xs text-steel">
                  Active particle vortex radius: `115px`. Crimson brightness boost: `100% neon surge` inside magnetic core.
                </div>
              </div>

              <div className="p-6 bg-black/60 border border-white/10 space-y-3">
                <div className="font-label-sm text-xs text-signal uppercase">// AUDIO SYNTHESIZER</div>
                <div className="font-headline-md text-4xl text-pure">WEB AUDIO API</div>
                <div className="font-body-md text-xs text-steel">
                  Zero-dependency synthesized UI soundscape (`cyberAudio`). Generates crisp hover ticks, click thuds, and glitch waves.
                </div>
              </div>

              <div className="p-6 bg-black/60 border border-white/10 space-y-3">
                <div className="font-label-sm text-xs text-signal uppercase">// RENDER PERFORMANCE</div>
                <div className="font-headline-md text-4xl text-pure">60+ FPS LOCK</div>
                <div className="font-body-md text-xs text-steel">
                  Canvas rendering isolated on dedicated hardware-accelerated context with `requestAnimationFrame` optimization.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
