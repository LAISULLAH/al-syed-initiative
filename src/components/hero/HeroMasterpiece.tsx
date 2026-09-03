import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks';
import { HeroScene } from '../3d/HeroScene';

interface HeroMasterpieceProps {
  onOpenAuth?: (mode?: 'login' | 'signup') => void;
}

export const HeroMasterpiece: React.FC<HeroMasterpieceProps> = () => {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-[96vh] flex flex-col justify-between text-center select-none overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12"
    >
      <HeroScene />

      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent pointer-events-none z-[1] laser-scan-beam shadow-[0_0_25px_#00f0ff]" />

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 65%, #000000 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center pt-8 sm:pt-14">
        
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-mono-300 font-mono text-[10px] uppercase tracking-[0.2em] mb-8 shadow-sm transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
          <span className="font-semibold tracking-widest text-white">
            ADL FRONT // ACTIVE COHORT IV
          </span>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <div className="relative w-14 h-14 sm:w-18 sm:h-18 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current opacity-90 hover:opacity-100 transition-opacity">
              <circle cx="50" cy="18" r="3.2" />
              <circle cx="40" cy="22" r="3.0" /><circle cx="60" cy="22" r="3.0" />
              <circle cx="30" cy="28" r="2.8" /><circle cx="70" cy="28" r="2.8" />
              <circle cx="22" cy="36" r="2.6" /><circle cx="78" cy="36" r="2.6" />
              <circle cx="18" cy="46" r="2.5" /><circle cx="82" cy="46" r="2.5" />
              <circle cx="22" cy="56" r="2.5" /><circle cx="78" cy="56" r="2.5" />
              <circle cx="30" cy="66" r="2.6" /><circle cx="70" cy="66" r="2.6" />
              <circle cx="40" cy="74" r="2.8" /><circle cx="60" cy="74" r="2.8" />
              <circle cx="50" cy="82" r="3.2" />
              <circle cx="50" cy="34" r="3.4" />
              <circle cx="42" cy="42" r="3.0" /><circle cx="58" cy="42" r="3.0" />
              <circle cx="50" cy="48" r="3.6" />
              <circle cx="50" cy="58" r="3.6" />
              <circle cx="50" cy="68" r="3.4" />
            </svg>
          </div>

          <div className="hidden sm:block w-[1.5px] h-14 sm:h-20 bg-white/20" />

          <div className="flex flex-col text-center sm:text-left">
            <h1
              className="font-display font-black text-white tracking-[0.2em] sm:tracking-[0.32em] uppercase leading-none select-none drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]"
              style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6.2rem)' }}
            >
              AL SYED
            </h1>
            <p className="font-mono text-[11px] sm:text-xs text-[#86868b] tracking-[0.28em] uppercase font-semibold mt-2.5">
              OSINT & DIGITAL LAWFORCE // SYSTEMATIC INVESTIGATION
            </p>
          </div>
        </div>

        <p
          className={`text-mono-200 text-base sm:text-lg lg:text-xl font-sans max-w-2xl leading-relaxed mb-10 font-normal text-center mx-auto transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'
          }`}
        >
          The skill isn't knowing more. It's knowing how. Cybersecurity education built around structured investigation and operational methodology.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 transition-all duration-700 delay-400 ${
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
            <div className="p-4 rounded-xl bg-black/50 border border-white/[0.06] backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                1,000+
              </h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                INVESTIGATORS TRAINED
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/[0.06] backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                100%
              </h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                LAWFUL & ETHICAL STANDARD
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/[0.06] backdrop-blur-sm">
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
        className={`w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 flex items-center justify-between pointer-events-none transition-all duration-1000 delay-700 mx-auto ${
          isLoaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] text-[#86868b] tracking-[0.25em] uppercase font-semibold">
            SCROLL DOWN TO DISCOVER
          </span>
          <div className="w-3.5 h-5 rounded-full border border-white/20 p-0.5 flex justify-center">
            <div className="w-1 h-1 rounded-full bg-white animate-bounce" />
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#86868b] tracking-wider uppercase font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
          <span>ADL THREAT MATRIX ACTIVE // LAT: 19.0760° N</span>
        </div>
      </div>

    </div>
  );
};
