import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import type { SectionType, ViewMode } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero3D from './components/Hero3D';
import NoiseBackground from './components/NoiseBackground';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/cursor';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const mainRef = useRef<HTMLElement>(null);

  // Derive activeSection for 3D background based on viewMode
  const activeSection: SectionType = 
    viewMode === 'projects' ? 'work' : 
    viewMode === 'about' ? 'about' : 
    viewMode === 'contact' ? 'contact' :
    'home';

  // Logic: If we are NOT home, the background is dark
  const isDarkBackground = viewMode !== 'home';

  useEffect(() => {
    if (mainRef.current) {
      // Background Color Logic
      // Home: Paper (#f4f4f0)
      // Work/About: Dark (#0f0f0f)
      // Contact: Deep Blueprint Blue (#0b0f19)
      let targetColor = '#f4f4f0';
      if (viewMode === 'contact') targetColor = '#0b0f19';
      else if (viewMode !== 'home') targetColor = '#0f0f0f';

      gsap.to(mainRef.current, {
        backgroundColor: targetColor,
        duration: 1.5,
        ease: 'power2.inOut',
        delay: viewMode !== 'home' ? 0.2 : 0
      });
    }
  }, [viewMode]);

  return (
    <main 
      ref={mainRef}
      className="relative min-h-screen w-full bg-paper text-dark-grey font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden transition-colors"
    >
      <NoiseBackground />

      {/* The Custom Cursor with the isDark prop */}
      <Cursor isDark={isDarkBackground} />
      
      {/* 3D Layer */}
      <Hero3D activeSection={activeSection} />

      {/* Content Layer */}
      <div className="relative z-20">
        <Navbar 
            isHidden={viewMode !== 'home'} 
            onNavigate={setViewMode}
        />
        
        {/* Hero Section */}
        <div className={viewMode !== 'home' ? 'pointer-events-none' : ''}>
          <Hero 
            isExploring={viewMode !== 'home'} 
            onExplore={() => setViewMode('projects')} 
            activeSection={viewMode === 'projects' ? 'work' : viewMode} 
          />
        </div>

        {/* Projects View */}
        {viewMode === 'projects' && (
          <Projects onBack={() => setViewMode('home')} />
        )}

        {/* About View */}
        {viewMode === 'about' && (
          <About onBack={() => setViewMode('home')} />
        )}

        {/* Contact View */}
        {viewMode === 'contact' && (
          <Contact onBack={() => setViewMode('home')} />
        )}
      </div>
    </main>
  );
};

export default App;