import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ProjectsProps {
    onBack?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const workRef = useRef<HTMLDivElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Animate Projects In
    if (workRef.current) {
      gsap.fromTo(workRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, delay: 0.5, ease: 'power3.out' }
      );
    }
    
    // Animate Back Button
    if (backBtnRef.current) {
        gsap.fromTo(backBtnRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: 'power2.out' }
        );
    }
  }, []);

  return (
    <section 
        className="absolute top-0 right-0 w-full md:w-[60%] h-screen overflow-y-auto z-40 bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none scroll-smooth"
    >
      {/* Fixed Back Button */}
      <div className="fixed top-6 right-6 z-50">
          <button 
            ref={backBtnRef}
            onClick={onBack}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wide px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="m15 18-6-6 6-6"/>
            </svg>
            Back
          </button>
      </div>

      <div className="flex flex-col">
        {/* WORK SECTION */}
        <div ref={workRef} className="min-h-screen p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
           <div className="mb-2 pt-16 md:pt-0">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Selected Work</h2>
             <p className="text-gray-400 max-w-md">
               Deep dives into machine learning architectures, robotics, and data-driven intelligence.
             </p>
           </div>
           
           {/* Project Card: Eco-Nav Autonomous Vehicle */}
           <div 
             onClick={() => window.open('https://github.com/shrudaysimha/RENEWABLE-ENERGY-POWERED-VEHICLE', '_blank')}
             className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 cursor-pointer"
           >
               <div className="flex justify-between items-start mb-4">
                 <div className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-mono border border-orange-500/30">Robotics / IoT</div>
                 <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs font-mono">2025</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-orange-400 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                 </div>
               </div>
               <h3 className="text-2xl text-gray-100 font-semibold mb-2 group-hover:text-orange-400 transition-colors">Eco-Nav Autonomous Vehicle</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-4">
                 A renewable energy-powered autonomous vehicle featuring real-time obstacle avoidance. Integrated solar charging with ultrasonic sensor arrays for continuous, safe navigation.
               </p>
               <div className="flex items-center gap-2 mt-2">
                   <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden flex-1">
                        <div className="w-1/2 h-full bg-orange-500/50"></div>
                   </div>
                   <span className="text-[10px] text-orange-400 font-mono">SOLAR</span>
               </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;