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
      className="relative w-full min-h-[96vh] flex flex-col justify-between select-none overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12"
    >
      <HeroScene />

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
        style={{
          background: 'radial-gradient(ellipse 95% 85% at 50% 50%, transparent 0%, rgba(0,0,0,0.35) 65%, #000000 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-mono-300 font-mono text-[10px] uppercase tracking-[0.2em] shadow-sm transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
              <span className="font-semibold tracking-widest text-white">
                CYBERSECURITY • OSINT • DIGITAL LAWFORCE
              </span>
            </div>

            <div
              className={`transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1
                className="font-display font-black text-white tracking-tight uppercase leading-[0.92] select-none"
                style={{ fontSize: 'clamp(3rem, 7.2vw, 6.2rem)', letterSpacing: '-0.04em' }}
              >
                AL SYED <br />
                <span className="text-gradient-silver">INITIATIVE.</span>
              </h1>
            </div>

            <div
              className={`space-y-3 max-w-xl transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="font-mono text-xs sm:text-sm text-[#86868b] tracking-wider uppercase font-semibold">
                The skill isn't knowing more. It's knowing how.
              </p>

              <p className="text-mono-300 text-sm sm:text-base leading-relaxed font-normal">
                Field-grade cyber intelligence education, dark-web reconnaissance, and tactical evidence synthesis built for serious investigators.
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                to="/courses"
                className="portfolio-btn-primary"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#divisions"
                className="portfolio-btn-secondary"
              >
                <span>Our Methodology</span>
              </a>
            </div>

          </div>

          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

        </div>

        <div
          className={`w-full pt-12 mt-12 border-t border-white/[0.08] transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 text-left">
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                1,000+
              </h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                INVESTIGATORS TRAINED
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                100%
              </h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                LAWFUL & ETHICAL STANDARD
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm">
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
        className={`w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-auto flex items-center justify-between pointer-events-none transition-all duration-1000 delay-700 mx-auto ${
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
