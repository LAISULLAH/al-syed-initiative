import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from '../../hooks';

export const GlobalAmbientLighting: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isRunning = false;

    const loop = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (spotlightRef.current && currentX > -500) {
        spotlightRef.current.style.background = `radial-gradient(650px circle at ${Math.round(currentX)}px ${Math.round(currentY)}px, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.008) 45%, transparent 75%)`;
      }

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        isRunning = false;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        rafRef.current = requestAnimationFrame(loop);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMoveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('a') || target.closest('button') || target.closest('[data-cursor="pointer"]'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('mousemove', onMouseMoveCursor, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMoveCursor);
      window.removeEventListener('scroll', onScroll);
    };
  }, [reducedMotion]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
        <div
          ref={spotlightRef}
          className="absolute inset-0 transition-opacity duration-300"
        />

        <div
          className="absolute inset-0 opacity-[0.022] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-beam-sweep" />
        </div>
      </div>

      {!reducedMotion && cursorPos.x > -50 && (
        <div
          className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden lg:block"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
          }}
        >
          <div
            className={`rounded-full border transition-all duration-200 ${
              isHovered
                ? 'w-10 h-10 border-white/40 bg-white/10 backdrop-blur-xs'
                : 'w-4 h-4 border-white/30 bg-transparent'
            }`}
          />
          <div className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-white" />
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-black/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-[#86868b] hover:text-white hover:border-white/30 transition-all duration-200 shadow-lg active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        )}

        <button
          onClick={() => setSoundActive(!soundActive)}
          aria-label="Toggle telemetry audio"
          className="h-10 px-3.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-md flex items-center gap-2.5 text-[#86868b] hover:text-white hover:border-white/30 transition-all duration-200 shadow-lg active:scale-95"
        >
          <div className="flex items-end gap-0.5 h-3">
            <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'animate-[soundBarPulse_0.6s_ease-in-out_infinite]' : 'h-1'}`} />
            <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'animate-[soundBarPulse_0.9s_ease-in-out_infinite_0.2s]' : 'h-2'}`} />
            <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'animate-[soundBarPulse_0.7s_ease-in-out_infinite_0.4s]' : 'h-1.5'}`} />
            <span className={`w-0.5 bg-white rounded-full ${soundActive ? 'animate-[soundBarPulse_1.1s_ease-in-out_infinite_0.1s]' : 'h-2.5'}`} />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase font-semibold hidden sm:inline">
            {soundActive ? 'ATMOSPHERE ON' : 'ATMOSPHERE'}
          </span>
        </button>
      </div>
    </>
  );
};

