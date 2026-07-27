import React, { useState } from 'react';
import { cyberAudio } from '../utils/audioEngine';

export default function ContactView() {
  const [transmitting, setTransmitting] = useState(false);
  const [complete, setComplete] = useState(false);
  const [logs, setLogs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    cyberAudio.playSuccess();
    setTransmitting(true);
    setLogs(['> INITIALIZING QUANTUM SECURE COMMS...']);

    const steps = [
      "[INFO] Routing encrypted inquiry to Chennai Studio HQ...",
      "[INFO] Verifying sub-net checksum & anti-spam filters...",
      "[SUCCESS] Transmission received by Moonshine Communications Matrix.",
      "[SYSTEM] Studio Coordinator Nithya Venkat will respond within 24–48 hours."
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setTransmitting(false);
          setComplete(true);
        }
      }, (index + 1) * 600);
    });
  };

  return (
    <div className="pt-28 xl:pt-40 px-margin-mobile pb-32 xl:pb-48">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
        {/* Studio Contact Information */}
        <div className="lg:col-span-5 space-y-10 xl:space-y-14">
          <div>
            <div className="font-label-sm text-signal xl:text-lg tracking-[0.3em] uppercase mb-2 xl:mb-4">// DIRECT FREQUENCY</div>
            <h1 className="font-headline-lg text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-pure uppercase leading-none">GET IN TOUCH</h1>
            <p className="font-body-md text-steel mt-4 xl:mt-8 xl:text-2xl 2xl:text-3xl leading-relaxed">
              Whether you're an investor, a publisher, or someone who wants to know more — we'd love to hear from you.
            </p>
          </div>

          {/* Contact Details Card per Content Document Page 5 */}
          <div className="p-6 xl:p-10 bg-surface border border-white/10 cyber-card shadow-xl space-y-4 xl:space-y-6">
            <div className="font-label-sm text-xs xl:text-base text-signal uppercase">// MOONSHINE INTERACTIVE</div>
            <div className="font-headline-md text-2xl xl:text-4xl text-pure">Chennai, Tamil Nadu, India</div>
            <p className="text-sm xl:text-lg text-steel pt-2 border-t border-white/10">For investment, publishing, or general inquiries:</p>
            <div className="font-label-md text-lg xl:text-2xl text-signal select-all">contact@moonshineinteractive.studio</div>
            
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-6 xl:gap-8">
              <a href="#linkedin" onClick={() => cyberAudio.playClick()} className="flex items-center gap-2 text-sm xl:text-lg text-pure hover:text-signal transition-colors font-label-md">
                <span className="material-symbols-outlined text-signal">business</span> LinkedIn // Moonshine Studio
              </a>
              <a href="#instagram" onClick={() => cyberAudio.playClick()} className="flex items-center gap-2 text-sm xl:text-lg text-pure hover:text-signal transition-colors font-label-md">
                <span className="material-symbols-outlined text-signal">photo_camera</span> Instagram // @MoonshineInteractive
              </a>
            </div>
          </div>

          {/* Section — Coming Soon per Content Document Page 5 */}
          <div className="p-6 xl:p-10 bg-signal/10 border border-signal cyber-card shadow-2xl">
            <div className="font-label-sm text-signal text-xs xl:text-base uppercase tracking-widest mb-2">// COMING SOON</div>
            <h3 className="font-headline-md text-2xl xl:text-4xl text-pure uppercase mb-3">JOIN THE JOURNEY</h3>
            <p className="text-sm xl:text-lg text-steel leading-relaxed">
              We're building something we can't wait to share. Sign-ups for updates will open as ESPERANCE moves closer to launch.
            </p>
            <div className="mt-4 pt-4 border-t border-signal/30 font-label-sm text-xs xl:text-base text-signal font-bold uppercase">
              Currently in development.
            </div>
          </div>
        </div>

        {/* Interactive Terminal Transmission Form */}
        <div className="lg:col-span-7 cyber-card border border-white/10 p-8 sm:p-12 xl:p-16 2xl:p-20 shadow-2xl">
          <h2 className="font-headline-md text-3xl xl:text-5xl 2xl:text-6xl text-pure uppercase mb-6 xl:mb-10">// SECURE TRANSMISSION TERMINAL</h2>
          <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
              <div>
                <label className="block font-label-sm text-xs xl:text-base text-steel uppercase mb-2 xl:mb-3">Sender Name / Alias *</label>
                <input required type="text" placeholder="Alex Chen" className="w-full bg-black/60 border border-white/20 p-3.5 xl:p-5 text-white focus:border-signal focus:outline-none font-label-md text-sm xl:text-lg transition-colors" />
              </div>
              <div>
                <label className="block font-label-sm text-xs xl:text-base text-steel uppercase mb-2 xl:mb-3">Return Frequency (Email) *</label>
                <input required type="email" placeholder="alex@media-network.com" className="w-full bg-black/60 border border-white/20 p-3.5 xl:p-5 text-white focus:border-signal focus:outline-none font-label-md text-sm xl:text-lg transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
              <div>
                <label className="block font-label-sm text-xs xl:text-base text-steel uppercase mb-2 xl:mb-3">Inquiry Category *</label>
                <select className="w-full bg-black/60 border border-white/20 p-3.5 xl:p-5 text-white focus:border-signal focus:outline-none font-label-md text-sm xl:text-lg transition-colors">
                  <option>Press & Media Interview Request</option>
                  <option>Publishing / Distribution Partnership</option>
                  <option>Community & Content Creator Program</option>
                  <option>General Studio Feedback</option>
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-xs xl:text-base text-steel uppercase mb-2 xl:mb-3">Organization / Outlet</label>
                <input type="text" placeholder="Independent / Cyber Gaming Quarterly" className="w-full bg-black/60 border border-white/20 p-3.5 xl:p-5 text-white focus:border-signal focus:outline-none font-label-md text-sm xl:text-lg transition-colors" />
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-xs xl:text-base text-steel uppercase mb-2 xl:mb-3">Transmission Message *</label>
              <textarea required rows="5" placeholder="Enter your inquiry or dispatch message for the Chennai development team..." className="w-full bg-black/60 border border-white/20 p-3.5 xl:p-5 text-white focus:border-signal focus:outline-none font-label-md text-sm xl:text-lg transition-colors"></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={transmitting || complete}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`w-full py-4 xl:py-6 font-label-md text-label-md xl:text-xl uppercase tracking-widest text-center transition-all shadow-xl ${
                complete ? 'bg-green-600 text-white shadow-[0_0_20px_rgba(22,163,74,0.5)]' : 'btn-signal'
              }`}
            >
              {transmitting ? 'ENCRYPTING & TRANSMITTING...' : complete ? 'DISPATCH RECEIVED // TRANSMISSION COMPLETE' : 'TRANSMIT MESSAGE TO CHENNAI HQ'}
            </button>

            {logs.length > 0 && (
              <div className="bg-black/90 p-4 xl:p-6 border border-white/10 font-label-sm max-h-40 overflow-y-auto space-y-1">
                {logs.map((log, i) => (
                  <div key={i} className={`text-xs xl:text-sm ${i === 0 ? 'text-signal' : 'text-green-400'}`}>{log}</div>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
