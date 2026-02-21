import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// 1. Define the props interface
interface CursorProps {
  isDark: boolean; // true = we are on a dark background
}

const Cursor: React.FC<CursorProps> = ({ isDark }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move logic
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    // Hover logic (Scale effect)
    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive');

      if (isClickable) {
        gsap.to(cursorRef.current, {
          scale: 3,
          opacity: 0.4,
          duration: 0.2
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 0.8, // Reset to standard opacity
          duration: 0.2
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', onHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', onHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        hidden md:block 
        fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] 
        transform -translate-x-1/2 -translate-y-1/2
        transition-colors duration-500 ease-in-out
        ${isDark ? 'bg-[#f4f4f0]' : 'bg-gray-800'}
      `}
    />
  );
};

export default Cursor;