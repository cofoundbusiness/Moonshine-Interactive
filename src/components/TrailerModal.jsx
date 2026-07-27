import React from 'react';
import { cyberAudio } from '../utils/audioEngine';
import sceneInterrogationImg from '../assets/scene-interrogation.jpg';

export default function TrailerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop p-4 xl:p-10">
      <div className="relative w-full max-w-5xl xl:max-w-7xl 2xl:max-w-[1700px] bg-surface border border-signal p-6 xl:p-12 cyber-card animate-fadeIn shadow-2xl">
        <div className="flex justify-between items-center mb-4 xl:mb-8 pb-3 xl:pb-6 border-b border-white/10">
          <div className="font-label-md text-signal uppercase tracking-widest text-sm xl:text-xl">// CINEMATIC TEASER FEED: ESPERANCE ALPHA</div>
          <button 
            onClick={() => { cyberAudio.playClick(); onClose(); }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="text-white hover:text-signal transition-all font-label-md text-lg xl:text-2xl flex items-center gap-2"
          >
            ✕ CLOSE TERMINAL
          </button>
        </div>

        <div className="aspect-video bg-black relative overflow-hidden border border-white/10 flex flex-col items-center justify-center text-center p-8 xl:p-16">
          <div className="absolute inset-0 scanlines opacity-50"></div>
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-30 animate-pulse" 
            src={sceneInterrogationImg} 
          />
          <div className="relative z-10 space-y-4 xl:space-y-8 max-w-xl xl:max-w-4xl">
            <div className="w-16 h-16 xl:w-24 xl:h-24 rounded-full border-2 xl:border-4 border-signal mx-auto flex items-center justify-center text-signal animate-spin">
              <span className="material-symbols-outlined text-3xl xl:text-5xl">sync</span>
            </div>
            <div className="font-headline-md text-3xl xl:text-6xl uppercase text-white">SIMULATING UE5 GAMEPLAY TEASER</div>
            <p className="font-label-sm text-xs xl:text-2xl text-steel leading-relaxed">
              [AUDIO FEED] "Happiness is mandatory. Sorrow is treason. Notice the bars, Kaelen..."
            </p>
            <div className="text-xs xl:text-lg text-signal font-label-md mt-4 xl:mt-8 animate-pulse">PRESS CLOSE TERMINAL TO RETURN TO WEBSITE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
