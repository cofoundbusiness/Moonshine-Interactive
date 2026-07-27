import React from 'react';
import { cyberAudio } from '../utils/audioEngine';

export default function LightboxModal({ isOpen, onClose, src, caption }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop p-4 xl:p-10"
      onClick={() => { cyberAudio.playClick(); onClose(); }}
    >
      <div 
        className="relative max-w-5xl xl:max-w-7xl 2xl:max-w-[1700px] w-full bg-black border border-white/20 p-4 xl:p-8 cyber-card animate-fadeIn shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={() => { cyberAudio.playClick(); onClose(); }}
          onMouseEnter={() => cyberAudio.playHover()}
          className="absolute top-6 right-6 z-10 bg-black/80 px-4 py-2 xl:px-8 xl:py-3 border border-white/20 text-white hover:text-signal font-label-sm xl:text-lg transition-all"
        >
          ✕ CLOSE
        </button>
        <div className="aspect-video bg-black overflow-hidden flex items-center justify-center">
          <img className="max-w-full max-h-[80vh] object-contain" src={src} />
        </div>
        <div className="p-4 xl:p-6 font-label-md text-sm xl:text-xl text-signal uppercase tracking-widest text-center border-t border-white/10">
          {caption}
        </div>
      </div>
    </div>
  );
}
