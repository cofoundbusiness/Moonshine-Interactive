import React from 'react';
import moonshineLogoImg from '../assets/moonshine-logo.jpg';

export default function StudioView() {
  return (
    <div className="pt-28 xl:pt-40 px-margin-mobile pb-32 xl:pb-48">
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-3xl xl:max-w-5xl mx-auto mb-20 xl:mb-32">
          <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// THE STUDIO</div>
          <h1 className="font-headline-lg text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-pure uppercase leading-none">BUILDING STORIES WORTH REMEMBERING</h1>
          <p className="font-body-lg text-steel mt-4 xl:mt-8 xl:text-2xl 2xl:text-3xl leading-relaxed uppercase tracking-wider">From Chennai to the world.</p>
          <div className="mt-10 xl:mt-16 flex justify-center">
            <div className="p-4 xl:p-6 bg-black/80 border border-white/10 cyber-card shadow-2xl max-w-sm xl:max-w-md">
              <img src={moonshineLogoImg} alt="Moonshine Interactive Studio Logo" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Studio Core Pillars from Content Document Page 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16 mb-24 xl:mb-36">
          <div className="cyber-card p-8 xl:p-14 2xl:p-16 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-signal font-headline-md text-3xl xl:text-5xl 2xl:text-6xl mb-4 xl:mb-6">WHO WE ARE</div>
              <p className="font-body-md text-steel xl:text-xl 2xl:text-2xl leading-relaxed">
                MoonShine Interactive is an independent game development studio based in Chennai, India. We are a team of thirteen people united by one belief: that narrative-driven games deserve the same craft, ambition, and visual quality as any major studio production — regardless of where they are made.
              </p>
            </div>
            <p className="font-body-md text-pure xl:text-xl 2xl:text-2xl leading-relaxed mt-6 pt-6 border-t border-white/10 font-bold">
              We build original intellectual property. Not outsourced work. Not licensed projects. Games that are ours, start to finish.
            </p>
          </div>

          <div className="cyber-card p-8 xl:p-14 2xl:p-16 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-signal font-headline-md text-3xl xl:text-5xl 2xl:text-6xl mb-4 xl:mb-6">OUR MISSION</div>
              <p className="font-body-md text-steel xl:text-xl 2xl:text-2xl leading-relaxed">
                MoonShine Interactive exists to build original narrative-driven game IP from India for a global audience.
              </p>
            </div>
            <p className="font-body-md text-steel xl:text-xl 2xl:text-2xl leading-relaxed mt-6 pt-6 border-t border-white/10">
              Our long-term vision is to become a sustainable studio that develops premium, story-first experiences — not a studio that survives on outsourced contract work for other companies.
            </p>
          </div>

          <div className="cyber-card p-8 xl:p-14 2xl:p-16 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-signal font-headline-md text-3xl xl:text-5xl 2xl:text-6xl mb-4 xl:mb-6">WHAT WE BUILD</div>
              <p className="font-body-md text-steel xl:text-xl 2xl:text-2xl leading-relaxed">
                <strong className="text-pure">ESPERANCE</strong> is our first original title — a story-driven third-person narrative adventure built in Unreal Engine 5.
              </p>
            </div>
            <p className="font-body-md text-steel xl:text-xl 2xl:text-2xl leading-relaxed mt-6 pt-6 border-t border-white/10">
              It is currently in development, with our team focused on building a world worth exploring and a story worth remembering.
            </p>
          </div>
        </div>

        {/* Studio Pipeline / Roadmap */}
        <div className="bg-black/50 border border-white/10 p-10 md:p-14 xl:p-20 2xl:p-24 shadow-2xl">
          <h2 className="font-headline-md text-4xl xl:text-6xl 2xl:text-7xl text-pure uppercase mb-10 xl:mb-16">// DEVELOPMENT MILESTONES</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 xl:gap-10 relative">
            <div className="p-6 xl:p-10 bg-surface border-t-2 xl:border-t-4 border-signal">
              <div className="text-signal font-label-md xl:text-lg">Q1 2024</div>
              <div className="font-headline-md text-2xl xl:text-4xl 2xl:text-5xl mt-2 xl:mt-4 text-white">FOUNDATION</div>
              <p className="text-xs xl:text-base 2xl:text-lg text-steel mt-2 xl:mt-4 leading-relaxed">Studio inception in Chennai. Core world-building and lore architecture for Silver City established.</p>
            </div>
            <div className="p-6 xl:p-10 bg-surface border-t-2 xl:border-t-4 border-signal">
              <div className="text-signal font-label-md xl:text-lg">Q3 2025</div>
              <div className="font-headline-md text-2xl xl:text-4xl 2xl:text-5xl mt-2 xl:mt-4 text-white">VERTICAL SLICE</div>
              <p className="text-xs xl:text-base 2xl:text-lg text-steel mt-2 xl:mt-4 leading-relaxed">First playable stealth-narrative combat loop completed. AI behavior tree prototypes deployed.</p>
            </div>
            <div className="p-6 xl:p-10 bg-surface border-t-2 xl:border-t-4 border-white/20">
              <div className="text-yellow-400 font-label-md xl:text-lg">IN PROGRESS // 2026</div>
              <div className="font-headline-md text-2xl xl:text-4xl 2xl:text-5xl mt-2 xl:mt-4 text-white">ALPHA SHOWCASE</div>
              <p className="text-xs xl:text-base 2xl:text-lg text-steel mt-2 xl:mt-4 leading-relaxed">Full level blockouts for Districts 01 through 06. Motion capture & voice recording sessions.</p>
            </div>
            <div className="p-6 xl:p-10 bg-surface border-t-2 xl:border-t-4 border-white/20 opacity-70">
              <div className="text-steel font-label-md xl:text-lg">TARGET // Q4 2027</div>
              <div className="font-headline-md text-2xl xl:text-4xl 2xl:text-5xl mt-2 xl:mt-4 text-white">GLOBAL LAUNCH</div>
              <p className="text-xs xl:text-base 2xl:text-lg text-steel mt-2 xl:mt-4 leading-relaxed">Simultaneous PC (Steam/Epic) and next-gen console release.</p>
            </div>
          </div>
        </div>

        {/* Page 2 CTA Block from Content Document */}
        <div className="mt-20 xl:mt-32 text-center p-12 xl:p-20 border border-signal bg-signal/10 cyber-card shadow-2xl">
          <div className="font-label-sm text-signal xl:text-lg uppercase tracking-widest mb-4 xl:mb-6">// THE TALENT BEHIND THE WORLD</div>
          <h3 className="font-headline-md text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl text-pure uppercase mb-8 xl:mb-12">
            Want to know who's building ESPERANCE?
          </h3>
          <button 
            onClick={() => { window.location.hash = 'team'; }}
            className="btn-signal font-label-md text-label-md xl:text-2xl uppercase py-5 px-12 xl:py-8 xl:px-16 shadow-2xl hover:scale-105 transition-transform"
          >
            Meet the Team →
          </button>
        </div>
      </div>
    </div>
  );
}
