import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface ContactProps {
    onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const backBtnRef = useRef<HTMLButtonElement>(null);
    const [emailCopied, setEmailCopied] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Fade in Grid
        if (gridRef.current) {
            tl.fromTo(gridRef.current, 
                { opacity: 0 },
                { opacity: 0.15, duration: 1.5 }
            );
        }

        // Slide in Container
        if (containerRef.current) {
            tl.fromTo(containerRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 1.0 },
                "-=1.0"
            );
        }

        // Back Button
        if (backBtnRef.current) {
            tl.fromTo(backBtnRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.6"
            );
        }
    }, []);

    const playSuccessSound = () => {
        try {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContext) return;
            
            const ctx = new AudioContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            // Subtle high-tech blip
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, ctx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            
            oscillator.start();
            oscillator.stop(ctx.currentTime + 0.1);
        } catch (e) {
            // Ignore audio errors
        }
    };

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (emailCopied) return;

        navigator.clipboard.writeText("shrudaysimha@gmail.com");
        setEmailCopied(true);
        playSuccessSound();

        setTimeout(() => {
            setEmailCopied(false);
        }, 2000);
    };

    const socialLinks = [
        {
            label: "LINKEDIN",
            sub: "NETWORK",
            href: "https://linkedin.com",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="1.5" d="M4 4h4v4H4zM4 16h4v4H4zM16 4h4v4h-4zM16 16h4v4h-4z" />
                    <path stroke="currentColor" strokeWidth="1.5" d="M8 6h8M6 8v8M18 8v8M8 18h8" strokeOpacity="0.5" />
                </svg>
            )
        },
        {
            label: "GITHUB",
            sub: "REPOSITORIES",
            href: "https://github.com/shrudaysimha",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" strokeWidth="1.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" clipPath="inset(50% 0 0 0)" />
                     <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                     <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                     <path d="M12 4v8M7 14l5-4 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
            )
        },
        {
            label: "EMAIL",
            sub: "CONTACT",
            href: "mailto:shrudaysimha@gmail.com",
            isEmail: true,
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="1.5" d="M2 6h20v12H2z" />
                    <path stroke="currentColor" strokeWidth="1.5" d="M2 6l10 7 10-7" />
                    <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
            )
        }
    ];

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
            
            {/* Technical Blueprint Grid Overlay */}
            <div 
                ref={gridRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }}
            />

            {/* Back Button */}
            <div className="fixed top-6 right-6 z-50">
                <button
                    ref={backBtnRef}
                    onClick={onBack}
                    className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors duration-300 text-sm font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-cyan-500/20 bg-black/40 backdrop-blur-md hover:bg-cyan-900/20"
                >
                    <span className="text-xs mr-1">[ESC]</span>
                    Abort
                </button>
            </div>

            {/* Main Control Panel Container */}
            <div ref={containerRef} className="flex flex-col gap-4 w-full px-4 md:items-center">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-sm font-mono text-cyan-500 tracking-[0.3em] uppercase mb-2">System // Connect</h2>
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-transparent mx-auto"></div>
                </div>

                {socialLinks.map((link, index) => {
                    const isActive = link.isEmail && emailCopied;
                    
                    return (
                        <a 
                            key={index}
                            href={link.isEmail ? '#' : link.href}
                            onClick={link.isEmail ? handleEmailClick : undefined}
                            target={link.isEmail ? undefined : "_blank"}
                            rel={link.isEmail ? undefined : "noopener noreferrer"}
                            className={`group relative w-full md:w-[600px] h-24 flex items-center bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#00f3ff] transition-all duration-500 ease-out hover:translate-x-5 overflow-hidden rounded-sm ${isActive ? 'border-green-500/50' : ''}`}
                        >
                            {/* Hover Fill Effect (Subtle) */}
                            <div className="absolute inset-0 bg-[#00f3ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Arrow Reveal - Left Side */}
                            <div className="absolute left-0 w-12 h-full flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out">
                                <svg className={`w-6 h-6 ${isActive ? 'text-green-400' : 'text-[#00f3ff]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* Content Grid */}
                            <div className="flex-1 flex items-center justify-between px-8 pl-8 group-hover:pl-16 transition-all duration-300">
                                
                                {/* Text Group */}
                                <div className="flex flex-col">
                                    <span className={`text-2xl md:text-3xl font-mono font-light transition-colors duration-300 tracking-tight ${isActive ? 'text-green-400 font-bold' : 'text-white group-hover:text-[#00f3ff]'}`}>
                                        {isActive ? "COPIED TO CLIPBOARD" : link.label}
                                    </span>
                                    <span className={`text-[10px] font-mono tracking-[0.2em] uppercase ${isActive ? 'text-green-400/60' : 'text-gray-500 group-hover:text-[#00f3ff]/60'}`}>
                                        // {isActive ? "shrudaysimha@gmail.com" : link.sub}
                                    </span>
                                </div>

                                {/* Icon Container */}
                                <div className={`w-12 h-12 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ${isActive ? 'text-green-400 opacity-100' : ''}`}>
                                    {link.icon}
                                </div>
                            </div>

                            {/* Technical Corners */}
                            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-[#00f3ff] ${isActive ? 'border-green-400' : ''}`}></div>
                            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-[#00f3ff] ${isActive ? 'border-green-400' : ''}`}></div>
                        </a>
                    );
                })}

            </div>
        </div>
    );
};

export default Contact;