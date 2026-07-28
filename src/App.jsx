import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GamesView from './components/GamesView';
import StudioView from './components/StudioView';
import TeamView from './components/TeamView';
import ScreenshotsView from './components/ScreenshotsView';
import NewsView from './components/NewsView';
import ContactView from './components/ContactView';
import CyberRainCanvas from './components/CyberRainCanvas';
import TrailerModal from './components/TrailerModal';
import LightboxModal from './components/LightboxModal';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('games');
  const [audioEnabled, setAudioEnabled] = useState(false);
  
  // Modals
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', caption: '', gallery: null, index: 0 });

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validViews = ['games', 'studio', 'team', 'screenshots', 'news', 'contact'];
    if (validViews.includes(hash)) {
      setCurrentView(hash);
    }
  }, []);

  const openLightbox = (src, caption, gallery = null, index = 0) => {
    setLightbox({ isOpen: true, src, caption, gallery, index });
  };

  const handleLightboxNext = () => {
    if (lightbox.gallery && lightbox.index < lightbox.gallery.length - 1) {
      const nextIndex = lightbox.index + 1;
      const nextItem = lightbox.gallery[nextIndex];
      setLightbox({ ...lightbox, src: nextItem.src, caption: nextItem.caption || nextItem.cap, index: nextIndex });
    }
  };

  const handleLightboxPrev = () => {
    if (lightbox.gallery && lightbox.index > 0) {
      const prevIndex = lightbox.index - 1;
      const prevItem = lightbox.gallery[prevIndex];
      setLightbox({ ...lightbox, src: prevItem.src, caption: prevItem.caption || prevItem.cap, index: prevIndex });
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'studio':
        return <StudioView setCurrentView={setCurrentView} />;
      case 'team':
        return <TeamView setCurrentView={setCurrentView} />;
      case 'screenshots':
      case 'news':
        return (
          <ScreenshotsView 
            openTrailer={() => setTrailerOpen(true)} 
            openLightbox={openLightbox} 
          />
        );
      case 'contact':
        return <ContactView />;
      case 'games':
      default:
        return (
          <GamesView 
            openTrailer={() => setTrailerOpen(true)} 
            openLightbox={openLightbox} 
            setCurrentView={setCurrentView}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-void text-pure font-body-md relative overflow-x-hidden">
      <CyberRainCanvas currentView={currentView} />
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        audioEnabled={audioEnabled} 
        setAudioEnabled={setAudioEnabled} 
      />

      <main className="flex-grow relative z-10">
        {renderView()}
      </main>

      <Footer setCurrentView={setCurrentView} />

      <TrailerModal 
        isOpen={trailerOpen} 
        onClose={() => setTrailerOpen(false)} 
      />

      <LightboxModal 
        isOpen={lightbox.isOpen} 
        src={lightbox.src} 
        caption={lightbox.caption} 
        onClose={() => setLightbox({ ...lightbox, isOpen: false })} 
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
        hasNext={lightbox.gallery && lightbox.index < lightbox.gallery.length - 1}
        hasPrev={lightbox.gallery && lightbox.index > 0}
      />
    </div>
  );
}
