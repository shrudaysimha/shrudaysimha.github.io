import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* INJECTED CSS: This permanently hides the ugly Windows scrollbar while keeping the scroll working */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div ref={containerRef} className="fixed inset-0 w-full h-screen flex z-30 pointer-events-none">
        
        {/* LEFT PANEL: Seamless Gradient Blend & Hidden Scrollbar */}
        {/* Changed bg color to a gradient that fades into your 3D canvas beautifully */}
        <div className="w-full lg:w-[65%] h-full bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/95 to-transparent pointer-events-auto overflow-y-auto hide-scrollbar relative z-10 px-[8vw] py-24 pb-32">

          {/* Back Button */}
          <button 
            onClick={onBack}
            className="fixed top-8 left-[8vw] z-50 text-xs tracking-[0.2em] uppercase hover:text-[#F4A261] transition-colors border border-white/20 bg-[#0f0f0f]/50 backdrop-blur-md px-6 py-2 rounded-full text-white"
          >
            &lt; Back
          </button>

          {/* Content Wrapper */}
          <div className="max-w-2xl mt-8 pr-8">
            
            <p className="animate-item text-[#F4A261] mb-4 tracking-[0.2em] uppercase font-bold text-xs">
              — Introduction
            </p>
            <h1 className="animate-item text-5xl md:text-[5rem] font-extrabold leading-[1.05] mb-8 text-white tracking-tight">
              AI & Data <br />Science.
            </h1>
            
            <p className="animate-item text-lg text-[#9CA3AF] max-w-[90%] leading-relaxed font-light mb-12">
              I’m a first-year AI & Data Science undergraduate focused on building strong foundations in programming, mathematics, and applied AI. I actively work on machine learning, data science, and early-stage generative AI projects, with an emphasis on understanding concepts deeply and applying them through hands-on implementation.
            </p>

            {/* Currently Learning - Tech List */}
            <div className="animate-item mb-14">
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Currently Learning</h3>
              <ul className="space-y-4 text-[#9CA3AF]">
                <li className="flex items-start">
                  <span className="text-[#F4A261] mr-3">▹</span>
                  <span>Python, C/C++, Data Structures & Algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4A261] mr-3">▹</span>
                  <span>Statistics, Linear Algebra, Probability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4A261] mr-3">▹</span>
                  <span>Machine Learning, Deep Learning fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4A261] mr-3">▹</span>
                  <span>Generative AI, LLMs, and RAG systems</span>
                </li>
              </ul>
            </div>

            {/* Current Project Highlight */}
            <div className="animate-item mb-14 border-l-2 border-[#F4A261] pl-6 py-2">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Current Project</h3>
              <p className="text-xl text-white font-medium">Upzeal</p>
              <p className="text-[#9CA3AF] text-sm mt-1">CTO</p>
            </div>

            {/* The Grid Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              
              <div className="animate-item bg-[#1A1A1A] p-8 text-white border border-white/5 rounded-lg transition-transform hover:-translate-y-1 duration-300 shadow-lg">
                <svg className="w-8 h-8 mb-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                <h3 className="text-xl font-bold mb-3">Looking to Collaborate</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Intermediate AI / ML / Data Science projects, and research-oriented or problem-driven tech initiatives.
                </p>
              </div>

              <div className="animate-item bg-[#F4A261] p-8 text-[#1A1A1A] rounded-lg transition-transform hover:-translate-y-1 duration-300 shadow-lg"> 
                <svg className="w-8 h-8 mb-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                <h3 className="text-xl font-bold mb-3">Seeking Opportunities</h3>
                <p className="font-medium opacity-90 text-sm leading-relaxed">
                  Internships where I can learn, build, and contribute meaningfully to real-world challenges.
                </p>
              </div>

            </div>

            {/* Footer Philosophy & Contact */}
            <div className="animate-item border-t border-white/10 pt-10">
              <p className="text-xl text-white font-medium italic mb-6">
                "I enjoy turning simple ideas into practical prototypes and improving my thinking through continuous learning and experimentation."
              </p>
              <a 
                href="mailto:shrudaysimha@gmail.com" 
                className="inline-flex items-center text-[#F4A261] hover:text-white transition-colors font-bold tracking-wide"
              >
                Mail: shrudaysimha@gmail.com 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default About;