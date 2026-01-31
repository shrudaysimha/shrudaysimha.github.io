import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';
import Hero3D from './Hero3D';
import type { SectionType } from '../types';

interface HeroProps {
  onExplore?: () => void;
  isExploring?: boolean;
  activeSection: SectionType; // Add this to pass to Hero3D
}

const Hero: React.FC<HeroProps> = ({ onExplore, isExploring = false, activeSection }) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const btnContainerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Animation Logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = "power3.out";
      
      if (!isExploring) {
        // --- Entrance Animation ---
        const tl = gsap.timeline({ defaults: { ease } });

        if (textRef.current && subTextRef.current && btnContainerRef.current) {
            
            // Initial Badge Animation (if referencing it)
            if (badgeRef.current) {
               tl.fromTo(badgeRef.current, 
                 { opacity: 0, scale: 0.8 },
                 { opacity: 1, scale: 1, duration: 0.6 }
               );
            }

            // Ensure initial state is set for the 'from' tween to work correctly on re-entries
            tl.fromTo(textRef.current.children, 
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
            )
            .fromTo(subTextRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(btnContainerRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );
        }
        
        if (tagsRef.current) {
            gsap.fromTo(tagsRef.current.children,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.8, delay: 1.5, stagger: 0.2, ease: 'back.out(1.7)' }
            );
        }
      } else {
        // --- Exit Animation ---
        const duration = 0.8;
        const exitEase = "power2.inOut";

        if (badgeRef.current) {
            gsap.to(badgeRef.current, { y: -30, opacity: 0, duration, ease: exitEase });
        }
        if (textRef.current) {
            gsap.to(textRef.current.children, { y: -50, opacity: 0, stagger: 0.05, duration, ease: exitEase });
        }
        if (subTextRef.current) {
            gsap.to(subTextRef.current, { y: -50, opacity: 0, duration, ease: exitEase, delay: 0.1 });
        }
        if (btnContainerRef.current) {
            gsap.to(btnContainerRef.current, { y: -20, opacity: 0, duration, ease: exitEase, delay: 0.1 });
        }
        if (tagsRef.current) {
            gsap.to(tagsRef.current, { opacity: 0, scale: 0.9, duration: 0.5 });
        }
      }
    });

    return () => ctx.revert(); // Clean up GSAP context on prop change/unmount
  }, [isExploring]);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      
      {/* 3D Background - Now integrated HERE */}
      <Hero3D activeSection={activeSection} />

      {/* Floating UI Tags */}
      <div ref={tagsRef} className="absolute inset-0 pointer-events-none z-20 overflow-hidden hidden md:block">
        <div className="absolute top-[30%] right-[15%] lg:right-[20%] animate-float-slow">
            <div className="bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono text-gray-600 font-medium">Accuracy: 98.2%</span>
            </div>
        </div>
        <div className="absolute bottom-[25%] left-[20%] lg:left-[25%] animate-float-delayed">
             <div className="bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500">Epochs:</span>
                <span className="text-xs font-mono text-dark-grey font-bold">500</span>
            </div>
        </div>
        <div className="absolute bottom-[35%] right-[10%] lg:right-[15%] animate-float-slower">
             <div className="bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-lg px-3 py-1.5 flex items-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">Loss Function</span>
                <span className="text-xs font-mono text-blue-600 font-medium">0.0241</span>
            </div>
        </div>
      </div>

      {/* Main Content - Added z-10 here to sit ON TOP of Hero3D (which is z-0) */}
      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
        <div className="relative z-0">
            <div ref={badgeRef} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                AI / ML Specialist
            </div>

            <h1 ref={textRef} className="flex flex-col items-center leading-[0.85] text-dark-grey font-bold tracking-tighter mb-8 select-none">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem]">From Code</span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 pb-2">
  To Reality
</span>
            </h1>

            <p ref={subTextRef} className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto text-center mb-10 leading-relaxed font-normal">
              Building the next generation of cognitive systems. 
              Focusing on Large Language Models, Computer Vision, and Predictive Analytics.
            </p>
        </div>

        <div ref={btnContainerRef} className="relative z-30 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button 
            variant="primary" 
            className="w-full sm:w-auto shadow-xl shadow-blue-600/10"
            onClick={onExplore}
          >
            Explore Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Button>
          <Button 
            variant="secondary" 
            className="w-full sm:w-auto bg-white/50 backdrop-blur-sm"
            onClick={() => window.open('https://github.com/shrudaysimha', '_blank')}
          >
            GitHub Profile
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
        }
        @keyframes float-slower {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite 0.5s; }
      `}</style>
    </section>
  );
};

export default Hero;