import React from 'react';
import { cyberAudio } from '../utils/audioEngine';

export default function TrailerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop p-4 xl:p-10">
      <div className="relative w-full max-w-5xl xl:max-w-7xl 2xl:max-w-[1700px] max-h-[95vh] overflow-hidden bg-surface border border-signal p-4 sm:p-6 xl:p-12 cyber-card animate-fadeIn shadow-2xl flex flex-col">
        <div className="flex justify-between items-center mb-4 xl:mb-8 pb-3 xl:pb-6 border-b border-white/10 shrink-0">
          <div className="font-label-md text-signal uppercase tracking-widest text-xs sm:text-sm xl:text-xl truncate mr-4">// CINEMATIC TEASER FEED: ESPERANCE ALPHA</div>
          <button 
            onClick={() => { cyberAudio.playClick(); onClose(); }}
            onMouseEnter={() => cyberAudio.playHover()}
            aria-label="Close"
            className="text-steel hover:text-signal transition-all text-2xl xl:text-4xl flex items-center justify-center w-10 h-10 xl:w-14 xl:h-14 cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>

        <div 
          className="bg-black relative overflow-hidden border border-white/10 mx-auto w-full shrink"
          style={{ aspectRatio: '16/9', maxHeight: '70vh', maxWidth: 'calc(70vh * 16 / 9)' }}
        >
          <iframe 
            className="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/GtqPdGWZqlA?autoplay=1&rel=0" 
            title="Moonshine Interactive Trailer" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
