import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AboutProps {
    onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const backBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Animation In
        if (containerRef.current) {
             gsap.fromTo(containerRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
             );
        }

        if (backBtnRef.current) {
            gsap.fromTo(backBtnRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power2.out' }
            );
        }
    }, []);

    return (
        <section className="absolute top-0 right-0 w-full h-screen overflow-hidden z-40 bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none flex items-center justify-center">
            
            {/* Back Button */}
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

            <div ref={containerRef} className="w-full max-w-5xl p-4 md:p-8">
                {/* Glassmorphic Card */}
                <div className="w-full relative bg-white/5 backdrop-blur-xl border-l border-white/20 rounded-xl md:rounded-3xl p-6 md:p-0 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/50">
                    
                    {/* Vertical Header */}
                    <div className="hidden md:flex w-16 bg-black/20 border-r border-white/10 items-center justify-center">
                        <span className="transform -rotate-90 whitespace-nowrap text-xs font-bold tracking-[0.3em] text-white/40 uppercase">
                            About The Architect
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                        
                        {/* Text */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white">
                                Building the <span className="text-blue-500">Future</span> of Intelligence.
                            </h3>
                            
                            <div className="space-y-4 text-sm md:text-base text-gray-300 font-light">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                                        <span className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Where I’m working</span>
                                        <p>Currently a first-year AI & Data Science student at CMRIT building strong foundations in coding, math, and AI projects.</p>
                                    </div>
                                    
                                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <span className="block text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">What I’m currently learning</span>
                                        <p>C/C++, Python, Data Structures, Machine Learning, and engineering fundamentals.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-green-500/30 transition-colors">
                                            <span className="block text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Collaborate on</span>
                                            <p>Beginner–intermediate AI, ML, data science, and automation projects.</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-yellow-500/30 transition-colors">
                                            <span className="block text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Looking for help with</span>
                                            <p>Improving real-world project structure, best coding practices, and research-oriented workflows.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-pink-500/30 transition-colors">
                                        <span className="block text-xs font-bold text-pink-400 uppercase tracking-wider mb-1">Ask me about</span>
                                        <p>AI agents, problem-solving approaches, early-stage research ideas, and academic guidance.</p>
                                    </div>

                                    <div className="italic text-gray-400 border-l-2 border-white/20 pl-4 py-1">
                                        <span className="font-semibold text-white">Fun fact:</span> I love turning simple ideas into practical prototypes—even if it means building them from scratch!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;