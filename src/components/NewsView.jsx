import React from 'react';
import { cyberAudio } from '../utils/audioEngine';
import sceneInterrogationImg from '../assets/scene-interrogation.jpg';
import projectEsperanceScreensImg from '../assets/project-esperance-screens.jpg';
import esperanceUsbImg from '../assets/esperance-usb.jpg';

export default function NewsView() {
  const articles = [
    {
      tag: 'DEVLOG #08',
      date: 'JUNE 2026',
      title: 'Designing AI That Cares Too Much',
      desc: 'Why the scariest antagonists aren\'t monsters trying to kill you, but algorithms trying to eliminate your sadness at all costs.',
      img: sceneInterrogationImg,
      cta: 'Read Dispatch →'
    },
    {
      tag: 'PRESS RELEASE',
      date: 'APRIL 2026',
      title: 'Moonshine Reveals Flagship IP \'ESPERANCE\'',
      desc: 'Chennai-based studio announces story-driven sci-fi adventure built in UE5, targeting simultaneous PC & console release in 2027.',
      img: projectEsperanceScreensImg,
      cta: 'Download Press Kit →'
    },
    {
      tag: 'ART DEEP DIVE',
      date: 'JANUARY 2026',
      title: 'The Architecture of Oppressive Comfort',
      desc: 'Art Director Sneha Nair shares concept studies on how lighting and materials communicate surveillance and control.',
      img: esperanceUsbImg,
      cta: 'Explore Art →'
    }
  ];

  return (
    <div className="pt-28 xl:pt-40 px-margin-mobile pb-32 xl:pb-48">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16 xl:mb-24">
          <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// PRESS & DISPATCHES</div>
          <h1 className="font-headline-lg text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-pure uppercase leading-none">STUDIO DISPATCHES</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-14 2xl:gap-16">
          {articles.map((art, idx) => (
            <div key={idx} className="cyber-card border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl">
              <div>
                <div className="h-48 xl:h-80 2xl:h-96 overflow-hidden">
                  <img alt={art.title} className="w-full h-full object-cover hover:scale-105 transition-all duration-700" src={art.img} />
                </div>
                <div className="p-6 xl:p-10 2xl:p-12">
                  <div className="flex justify-between items-center text-xs xl:text-base text-signal font-label-sm mb-2 xl:mb-4">
                    <span>{art.tag}</span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="font-headline-md text-2xl xl:text-4xl 2xl:text-5xl text-pure uppercase leading-tight">{art.title}</h3>
                  <p className="font-body-md text-steel text-sm xl:text-lg 2xl:text-xl mt-3 xl:mt-6 leading-relaxed">{art.desc}</p>
                </div>
              </div>
              <div className="p-6 xl:p-10 2xl:p-12 pt-0 xl:pt-0">
                <button 
                  onClick={() => { cyberAudio.playClick(); alert(`${art.tag}: Article viewer loaded.`); }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className="text-xs xl:text-lg text-signal font-label-md uppercase tracking-wider hover:underline flex items-center gap-2 font-bold"
                >
                  {art.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
