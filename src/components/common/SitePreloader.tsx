import React, { useState, useEffect } from 'react';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// SitePreloader (Cinematic Splash & Brand Intro)
//
// Displays on initial page load / refresh:
// - Authentic cutout diamond emblem (Zero square background, 100% transparent)
// - Enlarged prominent scale with orbital luminous tracer arc
// - Live typing "AL SYED INITIATIVE" typewriter animation
// - 1-second stay time with silky smooth dissolve exit
// ─────────────────────────────────────────────────────────────────────────────

export const SitePreloader: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');

  const fullText = 'AL SYED INITIATIVE';

  useEffect(() => {
    if (reducedMotion) {
      setMounted(false);
      return;
    }

    // Dynamic typewriter typing effect
    let currentIndex = 0;
    const startDelay = 100;
    const charInterval = 35; // 18 chars * 35ms = ~630ms

    let intervalId: ReturnType<typeof setInterval> | undefined;
    const typeTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        currentIndex++;
        setTypedText(fullText.slice(0, currentIndex));
        if (currentIndex >= fullText.length) {
          clearInterval(intervalId);
        }
      }, charInterval);
    }, startDelay);

    // Begin fade-out at 1050ms (~1 second)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1050);

    // Completely unmount from DOM at 1450ms
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1450);

    return () => {
      clearTimeout(typeTimer);
      if (intervalId) clearInterval(intervalId);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [reducedMotion]);

  if (!mounted) return null;

  return (
    <aside
      role="status"
      aria-label="Loading Al Syed Initiative"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303] select-none pointer-events-none transition-all duration-400 ease-out ${
        fadeOut ? 'opacity-0 scale-[1.03]' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle fine architectural grid pattern */}
      <div className="absolute inset-0 bg-grid-fine opacity-20 pointer-events-none" />

      {/* Ambient center radial flare */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 48%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
        }}
      />

      {/* ── Centerpiece: Enlarged Diamond Emblem & Orbital Kinetic Tracer ──── */}
      <div className="relative flex flex-col items-center justify-center z-10">
        
        {/* Orbital Tracer & Emblem Container */}
        <div className="relative flex items-center justify-center w-60 h-60 sm:w-72 sm:h-72">
          
          {/* Luminous Sweeping SVG Arc */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin pointer-events-none"
            style={{ animationDuration: '1.6s', animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            viewBox="0 0 240 240"
          >
            {/* Faint Track Ring */}
            <circle
              cx="120"
              cy="120"
              r="108"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1.5"
            />
            {/* Radiant Sweeping Arc */}
            <circle
              cx="120"
              cy="120"
              r="108"
              fill="none"
              stroke="url(#preloaderArcGrad)"
              strokeWidth="2.5"
              strokeDasharray="260 420"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="preloaderArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="60%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Dashed Reverse Ring */}
          <div
            className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-dashed border-white/15 pointer-events-none animate-spin"
            style={{ animationDuration: '2.8s', animationDirection: 'reverse' }}
          />

          {/* The Pure Diamond Insignia (Zero background square, pure transparent cutout) */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center animate-fade-in">
            <img
              src={`${import.meta.env.BASE_URL}favicon.png`}
              alt="Al Syed Initiative"
              className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]"
              loading="eager"
            />
          </div>
        </div>

        {/* ── Brand Name with Active Typewriter Writing Animation ── */}
        <div className="mt-8 flex flex-col items-center text-center space-y-2 h-14">
          <h2 className="font-display font-black text-white text-base sm:text-lg tracking-[0.32em] sm:tracking-[0.38em] uppercase select-none min-h-[1.75rem] flex items-center justify-center">
            <span>{typedText}</span>
            <span
              className={`inline-block w-[2px] h-4 sm:h-5 bg-white ml-1.5 transition-opacity ${
                fadeOut ? 'opacity-0' : 'animate-pulse'
              }`}
            />
          </h2>
          
          <div
            className={`flex items-center gap-2 text-[10px] font-mono text-mono-400 uppercase tracking-widest transition-all duration-500 ${
              typedText.length > 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
            <span>ADL FRONT · SECURE SESSION</span>
          </div>
        </div>

      </div>

    </aside>
  );
};
