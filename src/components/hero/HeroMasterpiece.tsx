import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// HeroMasterpiece — The Original Living Kinetic Viewport
//
// Al Syed Initiative Signature Atmosphere:
// - Cinematic line-by-line blur-to-sharp entrance
// - Interactive reacting "HOW." with silver/white glow
// - Subtle interactive cursor tracking, background grid, and ambient spotlight
// - Magnetic hover physics on CTAs
// - 100% Monochrome Black / White / Gray
// ─────────────────────────────────────────────────────────────────────────────

interface HeroMasterpieceProps {
  onOpenAuth?: (mode?: 'login' | 'signup') => void;
}

export const HeroMasterpiece: React.FC<HeroMasterpieceProps> = () => {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Mouse coordinates and smoothed parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringHow, setIsHoveringHow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Magnetic button states
  const [btn1Offset, setBtn1Offset] = useState({ x: 0, y: 0 });
  const [btn2Offset, setBtn2Offset] = useState({ x: 0, y: 0 });

  // Trigger entrance reveal after preloader logo finishes
  useEffect(() => {
    // If preloader already finished earlier or reduced motion is enabled
    if ((window as any).__preloaderDone || reducedMotion) {
      const timer = setTimeout(() => setIsLoaded(true), 80);
      return () => clearTimeout(timer);
    }

    const handlePreloaderDone = () => {
      setTimeout(() => setIsLoaded(true), 120);
    };

    window.addEventListener('site-preloader-done', handlePreloaderDone);

    // Fallback timer if event is missed
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1250);

    return () => {
      window.removeEventListener('site-preloader-done', handlePreloaderDone);
      clearTimeout(fallbackTimer);
    };
  }, [reducedMotion]);

  // Smooth mouse movement tracking for parallax & spotlight
  useEffect(() => {
    if (reducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates from center (-1 to 1)
      targetX = (x / rect.width - 0.5) * 2;
      targetY = (y / rect.height - 0.5) * 2;
    };

    const animate = () => {
      // Smooth lerping
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  // Magnetic hover for buttons
  const handleButtonMagnetic = (
    e: React.MouseEvent<HTMLElement>,
    setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.18;
    const offsetY = (e.clientY - centerY) * 0.18;
    setter({ x: offsetX, y: offsetY });
  };

  const handleButtonLeave = (
    setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    setter({ x: 0, y: 0 });
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center select-none overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* ── 1. Sophisticated Living Monochrome Background ──────────── */}
      
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 z-0"
        style={{
          background: reducedMotion
            ? 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.03) 0%, transparent 65%)'
            : `radial-gradient(750px circle at ${50 + mousePos.x * 20}% ${45 + mousePos.y * 20}%, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.01) 40%, transparent 75%)`,
        }}
      />

      {/* Subtle Living Grid with Breathing Drift */}
      <div
        className="absolute inset-0 bg-grid-fine pointer-events-none opacity-25 z-0 transition-transform duration-700 ease-out"
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(${mousePos.x * -6}px, ${mousePos.y * -6}px, 0)`,
        }}
      />

      {/* Atmospheric Hairline Guides with Slow Ambient Shimmer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        
        {/* Slow horizontal scanning beam */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* ── 2. Content Container with Kinetic Parallax ──────────────── */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center transition-transform duration-500 ease-out"
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 0)`,
        }}
      >
        
        {/* Top Brand Eyebrow Pill */}
        <div
          className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md text-mono-200 font-mono text-xs uppercase tracking-[0.22em] mb-8 sm:mb-12 shadow-sm transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
          <span className="font-semibold tracking-widest text-white">
            AL SYED INITIATIVE // CYBERSECURITY EDUCATION
          </span>
        </div>

        {/* ── 3. Monumental Kinetic Headline (Line-by-Line Entrance) ─── */}
        <h1
          className="font-display font-black text-white uppercase leading-[0.92] max-w-5xl mb-8 select-none"
          style={{
            fontSize: 'clamp(2.75rem, 7.2vw, 6.25rem)',
          }}
        >
          {/* Line 1 */}
          <span
            className={`block transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0 tracking-[-0.04em]' : 'opacity-0 translate-y-8 blur-[10px] tracking-[0.04em]'
            }`}
          >
            <span className="inline-block transition-colors duration-200 hover:text-white/80">The</span>{' '}
            <span className="inline-block transition-colors duration-200 hover:text-white/80">skill</span>{' '}
            <span className="inline-block transition-colors duration-200 hover:text-white/80">isn't</span>
          </span>

          {/* Line 2 */}
          <span
            className={`block transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0 tracking-[-0.04em]' : 'opacity-0 translate-y-8 blur-[10px] tracking-[0.04em]'
            }`}
          >
            <span className="inline-block transition-colors duration-200 hover:text-white/80">knowing</span>{' '}
            <span className="inline-block transition-colors duration-200 hover:text-white/80">more.</span>
          </span>

          {/* Line 3: Reacting "HOW." */}
          <span
            className={`block transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0 tracking-[-0.04em]' : 'opacity-0 translate-y-8 blur-[10px] tracking-[0.04em]'
            }`}
          >
            <span className="text-white/45 inline-block transition-colors duration-200 hover:text-white/70">
              It's knowing{' '}
            </span>
            <span
              onMouseEnter={() => setIsHoveringHow(true)}
              onMouseLeave={() => setIsHoveringHow(false)}
              className="inline-block cursor-pointer transition-all duration-300 relative text-gradient-silver group"
              style={{
                transform: isHoveringHow ? 'scale(1.04) translateY(-1px)' : 'scale(1) translateY(0)',
                textShadow: isHoveringHow
                  ? '0 0 25px rgba(255,255,255,0.75), 0 0 50px rgba(255,255,255,0.35)'
                  : 'none',
              }}
            >
              how.
              {/* Subtle hairline under-glow when active */}
              <span
                className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-300 ${
                  isHoveringHow ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
                }`}
              />
            </span>
          </span>
        </h1>

        {/* ── 4. Thoughtful Supporting Description ─────────────────── */}
        <p
          className={`text-mono-200 text-lg sm:text-xl lg:text-2xl font-sans max-w-3xl leading-relaxed mb-12 sm:mb-14 font-normal text-center mx-auto transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'
          }`}
        >
          Cybersecurity education built around structured learning, practical investigation, and the discipline to think beyond the tools.
        </p>

        {/* ── 5. Balanced Action CTAs with Magnetic Feedback ───────── */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'
          }`}
        >
          {/* Primary CTA (Magnetic) */}
          <Link
            to="/courses"
            onMouseMove={(e) => handleButtonMagnetic(e, setBtn1Offset)}
            onMouseLeave={() => handleButtonLeave(setBtn1Offset)}
            style={{
              transform: `translate3d(${btn1Offset.x}px, ${btn1Offset.y}px, 0)`,
              transition: btn1Offset.x === 0 ? 'transform 0.4s ease-out' : 'none',
            }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 sm:px-11 py-4 bg-white text-black font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-sm hover:bg-mono-100 hover:shadow-[0_0_35px_-5px_rgba(255,255,255,0.4)] active:scale-[0.98]"
          >
            <span>Explore Al Syed</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>

          {/* Secondary CTA (Magnetic) */}
          <a
            href="#approach"
            onMouseMove={(e) => handleButtonMagnetic(e, setBtn2Offset)}
            onMouseLeave={() => handleButtonLeave(setBtn2Offset)}
            style={{
              transform: `translate3d(${btn2Offset.x}px, ${btn2Offset.y}px, 0)`,
              transition: btn2Offset.x === 0 ? 'transform 0.4s ease-out' : 'none',
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 sm:px-11 py-4 text-mono-100 font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-white/20 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/[0.08] active:scale-[0.98]"
          >
            Our Approach
          </a>
        </div>

      </div>

      {/* ── 6. Minimal Architectural Scroll Indicator ─────────────── */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <span className="font-mono text-[9px] text-mono-400 tracking-[0.25em] uppercase font-semibold">
          SCROLL
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 p-1 flex justify-center">
          <div className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
        </div>
      </div>

    </div>
  );
};
