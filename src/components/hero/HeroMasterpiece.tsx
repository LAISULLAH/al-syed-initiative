import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks';

interface HeroMasterpieceProps {
  onOpenAuth?: (mode?: 'login' | 'signup') => void;
}

export const HeroMasterpiece: React.FC<HeroMasterpieceProps> = () => {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [isHoveringHow, setIsHoveringHow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [btn1Offset, setBtn1Offset] = useState({ x: 0, y: 0 });
  const [btn2Offset, setBtn2Offset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if ((window as any).__preloaderDone || reducedMotion) {
      const timer = setTimeout(() => setIsLoaded(true), 40);
      return () => clearTimeout(timer);
    }

    const handlePreloaderDone = () => {
      setTimeout(() => setIsLoaded(true), 60);
    };

    window.addEventListener('site-preloader-done', handlePreloaderDone);

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      window.removeEventListener('site-preloader-done', handlePreloaderDone);
      clearTimeout(fallbackTimer);
    };
  }, [reducedMotion]);

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
      
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.008) 40%, transparent 70%)',
        }}
      />

      <div className="absolute inset-0 bg-grid-fine pointer-events-none opacity-20 z-0" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        <div
          className={`relative w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <svg className="absolute inset-0 w-full h-full animate-[spinSlow_20s_linear_infinite]" viewBox="0 0 200 200" fill="none">
            <defs>
              <linearGradient id="spinner-firstHalf" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="spinner-secondHalf" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path stroke="url(#spinner-secondHalf)" strokeWidth="2.5" d="M 10 100 A 90 90 0 0 1 190 100" />
            <path stroke="url(#spinner-firstHalf)" strokeWidth="2.5" d="M 190 100 A 90 90 0 0 1 10 100" />
          </svg>
          <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spinSlowReverse_14s_linear_infinite] opacity-40" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="85" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 8" />
          </svg>
          <div className="relative z-10 w-12 h-12 rounded-full bg-white/[0.05] border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-mono-200 font-mono text-[11px] uppercase tracking-[0.2em] mb-6 shadow-sm transition-all duration-450 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 blur-[2px]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
          <span className="font-semibold tracking-widest text-white">
            AL SYED INITIATIVE // ADL FRONT
          </span>
        </div>

        <h1
          className="font-display font-black text-white uppercase leading-[0.92] max-w-5xl mb-6 select-none"
          style={{
            fontSize: 'clamp(2.75rem, 7.2vw, 6.25rem)',
          }}
        >
          <span
            className={`block transition-all duration-500 delay-50 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0 tracking-[-0.04em]' : 'opacity-0 translate-y-3 blur-[3px] tracking-[-0.02em]'
            }`}
          >
            <span className="inline-block transition-colors duration-200 hover:text-white/80">The</span>{' '}
            <span className="inline-block transition-colors duration-200 hover:text-white/80">skill</span>{' '}
            <span className="inline-block transition-colors duration-200 hover:text-white/80">isn't</span>
          </span>

          <span
            className={`block transition-all duration-500 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0 tracking-[-0.04em]' : 'opacity-0 translate-y-3 blur-[3px] tracking-[-0.02em]'
            }`}
          >
            <span className="inline-block transition-colors duration-200 hover:text-white/80">knowing</span>{' '}
            <span className="inline-block transition-colors duration-200 hover:text-white/80">more.</span>
          </span>

          <span
            className={`block transition-all duration-500 delay-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0 tracking-[-0.04em]' : 'opacity-0 translate-y-3 blur-[3px] tracking-[-0.02em]'
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
              <span
                className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-300 ${
                  isHoveringHow ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
                }`}
              />
            </span>
          </span>
        </h1>

        <p
          className={`text-mono-200 text-base sm:text-lg lg:text-xl font-sans max-w-3xl leading-relaxed mb-10 font-normal text-center mx-auto transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'
          }`}
        >
          Cybersecurity education built around structured learning, practical investigation, and the discipline to think beyond the tools.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16 transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'
          }`}
        >
          <Link
            to="/courses"
            className="portfolio-btn-primary w-full sm:w-auto text-center"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href="#divisions"
            className="portfolio-btn-secondary w-full sm:w-auto text-center"
          >
            <span>Our Methodology</span>
          </a>
        </div>

        <div
          className={`w-full max-w-5xl pt-8 border-t border-white/[0.08] transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                1,000+
              </h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                INVESTIGATORS TRAINED
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                100%
              </h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                LAWFUL & ETHICAL STANDARD
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                03
              </h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                COMPLETED OPERATIONAL COHORTS
              </p>
            </div>
          </div>
        </div>

      </div>

      <div
        className={`mt-12 flex flex-col items-center gap-2 pointer-events-none transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <span className="font-mono text-[9px] text-[#86868b] tracking-[0.25em] uppercase font-semibold">
          Scroll down to discover
        </span>
        <div className="w-4 h-6 rounded-full border border-white/20 p-0.5 flex justify-center">
          <div className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
        </div>
      </div>

    </div>
  );
};
