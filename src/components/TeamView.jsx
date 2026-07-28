import React, { useState } from 'react';
import { cyberAudio } from '../utils/audioEngine';

const coreTeam = [
  { initials: 'AK', name: 'AKASH', role: 'Team Lead', dept: 'core', desc: 'Leads studio direction, project management, and production oversight across ESPERANCE\'s development.' },
  { initials: 'SC', name: 'SACHIN', role: 'Creative Lead', dept: 'core', desc: 'Shapes the creative vision and narrative direction that defines ESPERANCE\'s world and story.' },
  { initials: 'AT', name: 'ATISH', role: 'Lead Programmer', dept: 'core', desc: 'Architects the technical systems and Unreal Engine 5 implementation powering ESPERANCE.' },
  { initials: 'AD', name: 'ADHI', role: 'Game Programmer', dept: 'core', desc: 'Builds the gameplay systems and mechanics players will experience directly.' },
  { initials: 'YW', name: 'YASHWANTH', role: 'Game Artist', dept: 'core', desc: 'Brings ESPERANCE\'s visual world to life through asset creation and art production.' },
  { initials: 'PR', name: 'PRAGIN', role: 'Character Designer', dept: 'core', desc: 'Designs the characters players will come to know throughout ESPERANCE\'s story.' },
  { initials: 'DH', name: 'DHAYA', role: 'Environment Artist', dept: 'core', desc: 'Builds the environments and world spaces that make Silver City feel real.' },
  { initials: 'SH', name: 'SHANMUGA', role: 'UI/UX Designer', dept: 'core', desc: 'Designs the player experience and interface systems across the game.' },
  { initials: 'SJ', name: 'SANJAY', role: 'Marketing & Business Development', dept: 'core', desc: 'Leads go-to-market strategy, investor relations, and publishing outreach.' },
  { initials: 'DV', name: 'DIVYA', role: 'Storyboard Writer', dept: 'core', desc: 'Scripts and storyboards the narrative beats that drive ESPERANCE forward.' }
];

const advisors = [
  { initials: 'LN', name: 'LENIN', role: 'R&D Executive, Saram Techno', dept: 'advisor', desc: 'Advises on research and development strategy.' }
];

const contractors = [
  { initials: 'HR', name: 'HAREESH RAJA', role: 'Animator', dept: 'contractor', desc: 'Specialized gameplay and cinematic animation production.' },
  { initials: 'AB', name: 'ADRIBADRI', role: 'Concept Artist', dept: 'contractor', desc: 'Early world and character concept visualization.' }
];

export default function TeamView({ setCurrentView }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="pt-28 xl:pt-40 px-margin-mobile pb-32 xl:pb-48">
      <div className="max-w-container-max mx-auto">
        {/* Intro Header */}
        <div className="mb-16 xl:mb-24">
          <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// THIRTEEN PEOPLE. ONE WORLD. ONE STORY WORTH TELLING.</div>
          <h1 className="font-headline-lg text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-pure uppercase leading-none">THE TEAM</h1>
          <p className="font-body-lg text-steel mt-6 xl:mt-10 xl:text-2xl 2xl:text-3xl max-w-4xl leading-relaxed">
            ESPERANCE is being built by a focused team of creative and technical professionals in Chennai — covering every discipline required to bring a cinematic narrative game to life, from world design to engineering to business strategy.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-3 xl:gap-6 mb-12 xl:mb-16">
          {[
            { id: 'all', label: 'All (13)' },
            { id: 'core', label: 'Core Team (10)' },
            { id: 'advisor', label: 'Advisors (1)' },
            { id: 'contractor', label: 'Contractors (2)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { cyberAudio.playClick(); setActiveTab(tab.id); }}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-6 py-3 xl:px-10 xl:py-4 font-label-sm text-xs xl:text-lg uppercase transition-all shadow-md ${
                activeTab === tab.id
                  ? 'bg-signal text-white'
                  : 'bg-surface text-steel hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Core Team Grid */}
        {(activeTab === 'all' || activeTab === 'core') && (
          <div className="mb-20 xl:mb-32">
            <h2 className="font-headline-md text-3xl xl:text-5xl text-pure uppercase mb-8 xl:mb-12 border-b border-white/10 pb-4">Core Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-10">
              {coreTeam.map((m, idx) => (
                <div key={idx} className="cyber-card p-6 xl:p-10 border border-white/10 bg-surface flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="w-12 h-12 xl:w-16 xl:h-16 bg-signal/20 text-signal flex items-center justify-center font-headline-md text-2xl xl:text-4xl mb-4 xl:mb-6">
                      {m.initials}
                    </div>
                    <div className="font-headline-md text-2xl xl:text-4xl 2xl:text-5xl text-pure">{m.name}</div>
                    <div className="font-label-sm text-xs xl:text-base text-signal uppercase mt-1 xl:mt-2 font-bold">{m.role}</div>
                    <p className="text-xs xl:text-base 2xl:text-lg text-steel mt-4 xl:mt-6 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Advisors & Contractors Grid */}
        {(activeTab === 'all' || activeTab === 'advisor' || activeTab === 'contractor') && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-24 xl:mb-36">
            {(activeTab === 'all' || activeTab === 'advisor') && (
              <div>
                <h2 className="font-headline-md text-3xl xl:text-5xl text-pure uppercase mb-8 xl:mb-12 border-b border-white/10 pb-4">Advisors</h2>
                <div className="space-y-6 xl:space-y-10">
                  {advisors.map((m, idx) => (
                    <div key={idx} className="cyber-card p-6 xl:p-10 border border-white/10 bg-surface flex flex-col justify-between shadow-xl">
                      <div>
                        <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white/10 text-pure flex items-center justify-center font-headline-md text-2xl xl:text-4xl mb-4 xl:mb-6">
                          {m.initials}
                        </div>
                        <div className="font-headline-md text-2xl xl:text-4xl 2xl:text-5xl text-pure">{m.name}</div>
                        <div className="font-label-sm text-xs xl:text-base text-signal uppercase mt-1 font-bold">{m.role}</div>
                        <p className="text-xs xl:text-base 2xl:text-lg text-steel mt-4 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'contractor') && (
              <div>
                <h2 className="font-headline-md text-3xl xl:text-5xl text-pure uppercase mb-8 xl:mb-12 border-b border-white/10 pb-4">Contractors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-10">
                  {contractors.map((m, idx) => (
                    <div key={idx} className="cyber-card p-6 xl:p-10 border border-white/10 bg-surface flex flex-col justify-between shadow-xl">
                      <div>
                        <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white/10 text-pure flex items-center justify-center font-headline-md text-2xl xl:text-4xl mb-4 xl:mb-6">
                          {m.initials}
                        </div>
                        <div className="font-headline-md text-2xl xl:text-4xl text-pure">{m.name}</div>
                        <div className="font-label-sm text-xs xl:text-base text-signal uppercase mt-1 font-bold">{m.role}</div>
                        <p className="text-xs xl:text-base text-steel mt-4 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Page 3 CTA Block */}
        <div className="text-center p-12 xl:p-20 border border-signal bg-signal/10 cyber-card shadow-2xl">
          <div className="font-label-sm text-signal xl:text-lg uppercase tracking-widest mb-4 xl:mb-6">// EXPLORE THE VISION</div>
          <h3 className="font-headline-md text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl text-pure uppercase mb-8 xl:mb-12">
            See the world we're building.
          </h3>
          <button 
            onClick={() => { cyberAudio.playClick(); setCurrentView('screenshots'); window.location.hash = 'screenshots'; window.scrollTo(0, 0); }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="btn-signal font-label-md text-label-md xl:text-2xl uppercase py-5 px-12 xl:py-8 xl:px-16 shadow-2xl hover:scale-105 transition-transform"
          >
            View Trailer & Screenshots →
          </button>
        </div>
      </div>
    </div>
  );
}
