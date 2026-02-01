import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button.tsx';
import type { ViewMode } from '../types';

interface NavbarProps {
  isHidden: boolean;
  onNavigate: (mode: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isHidden, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate Navbar visibility
  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isHidden ? -100 : 0,
        opacity: isHidden ? 0 : 1,
        duration: 0.8,
        ease: 'power3.inOut',
        pointerEvents: isHidden ? 'none' : 'all',
      });
    }
  }, [isHidden]);

  const navItems = [
    { label: 'Work', mode: 'projects' as ViewMode },
    { label: 'About', mode: 'about' as ViewMode },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* 1. Added hover effect to Logo area */}
        <div 
            className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            onClick={() => onNavigate('home')}
        >
           {/* Logo Placeholder */}
           <div className="w-8 h-8 bg-dark-grey rounded-lg"></div>
           <span className="font-bold text-xl tracking-tight text-dark-grey">Hruday's Portfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 shadow-sm">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              onClick={() => onNavigate(item.mode)}
              /* 2. Changed transition-colors to transition-all and added hover:-translate-y-1 */
              className="text-sm font-medium text-gray-600 hover:text-dark-grey transition-all duration-300 hover:-translate-y-1 bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
           {/* 3. Added hover effect to Contact Button */}
           <Button 
             variant="secondary"
             className="!px-5 !py-2 text-sm hidden sm:flex transition-transform duration-300 hover:-translate-y-1"
             onClick={() => onNavigate('contact')}
           >
             Contact
           </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;