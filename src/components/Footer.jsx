import React from 'react';
import { cyberAudio } from '../utils/audioEngine';

export default function Footer({ setCurrentView }) {
  const handleNav = (id) => {
    cyberAudio.playClick();
    setCurrentView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = id;
  };

  return (
    <footer className="py-20 xl:py-32 px-margin-mobile border-t border-white/10 bg-void">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 xl:gap-20 mb-16 xl:mb-24">
          <div>
            <div className="font-headline-md text-headline-md xl:text-6xl 2xl:text-7xl text-pure mb-2 xl:mb-4">MOONSHINE INTERACTIVE — CHENNAI, INDIA</div>
            <p className="font-label-sm text-label-sm xl:text-xl text-steel uppercase tracking-widest">Unreal Engine 5 Narrative Game Studio</p>
          </div>
          <nav className="flex flex-wrap gap-6 xl:gap-12">
            <button onClick={() => handleNav('games')} onMouseEnter={() => cyberAudio.playHover()} className="text-left text-steel hover:text-signal transition-colors font-label-sm text-sm xl:text-lg uppercase font-bold">Home</button>
            <button onClick={() => handleNav('studio')} onMouseEnter={() => cyberAudio.playHover()} className="text-left text-steel hover:text-signal transition-colors font-label-sm text-sm xl:text-lg uppercase font-bold">Studio</button>
            <button onClick={() => handleNav('team')} onMouseEnter={() => cyberAudio.playHover()} className="text-left text-steel hover:text-signal transition-colors font-label-sm text-sm xl:text-lg uppercase font-bold">Team</button>
            <button onClick={() => handleNav('screenshots')} onMouseEnter={() => cyberAudio.playHover()} className="text-left text-steel hover:text-signal transition-colors font-label-sm text-sm xl:text-lg uppercase font-bold">Trailer & Screenshots</button>
            <button onClick={() => handleNav('contact')} onMouseEnter={() => cyberAudio.playHover()} className="text-left text-steel hover:text-signal transition-colors font-label-sm text-sm xl:text-lg uppercase font-bold">Contact</button>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 xl:pt-14 border-t border-white/10 gap-8">
          <div className="flex gap-8 xl:gap-14">
            <a className="text-steel hover:text-signal transition-colors font-label-sm text-label-sm xl:text-lg uppercase" href="#linkedin">LinkedIn</a>
            <a className="text-steel hover:text-signal transition-colors font-label-sm text-label-sm xl:text-lg uppercase" href="#instagram">Instagram</a>
            <a className="text-steel hover:text-signal transition-colors font-label-sm text-label-sm xl:text-lg uppercase" href="#discord">Discord</a>
          </div>
          <p className="text-steel font-label-sm text-label-sm xl:text-base uppercase opacity-80">
            © 2026 MoonShine Interactive. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
