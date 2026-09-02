import React, { useState, useRef } from 'react';
import { useReducedMotion } from '../../hooks';

interface WordPillar {
  id: string;
  word: string;
  tag: string;
  definition: string;
  depth: number;
}

const PILLARS: WordPillar[] = [
  {
    id: 'think',
    word: 'THINK',
    tag: 'PHASE 01 // COGNITIVE RECON',
    definition: 'Deconstruct assumptions. Observe attack vectors before touching a single tool.',
    depth: 1.0,
  },
  {
    id: 'investigate',
    word: 'INVESTIGATE',
    tag: 'PHASE 02 // RIGOROUS OSINT',
    definition: 'Correlate digital footprints, examine telemetry, and map exposed surfaces.',
    depth: 1.4,
  },
  {
    id: 'understand',
    word: 'UNDERSTAND',
    tag: 'PHASE 03 // CRAFT & SYNTHESIS',
    definition: 'Synthesize findings into auditable, court-ready evidence and defensive posture.',
    depth: 1.8,
  },
];

export const HeroTypographicVisual: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeWord, setActiveWord] = useState<string>('investigate');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const activePillar = PILLARS.find((p) => p.id === activeWord) || PILLARS[1];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl xl:max-w-2xl min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] rounded-3xl bg-[#070707] border border-white/[0.12] p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden select-none transition-all duration-300 hover:border-white/25 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.95)]"
      style={{
        perspective: '1000px',
      }}
      aria-label="Editorial Typographic Composition: Think, Investigate, Understand"
    >
      <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />

      {!reducedMotion && isHovered && (
        <>
          <div
            className="absolute left-0 right-0 h-px bg-white/[0.04] pointer-events-none transition-transform duration-100 ease-out"
            style={{
              transform: `translateY(${(mousePos.y + 1) * 220}px)`,
            }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(${(mousePos.x + 1) * 240}px)`,
            }}
          />
        </>
      )}

      <div className="relative z-10 flex items-center justify-between pb-4 sm:pb-5 border-b border-white/[0.08] text-[10px] font-mono text-mono-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="tracking-[0.2em] uppercase font-bold text-mono-300">
            DISCIPLINE // AL SYED
          </span>
        </div>
        <div className="flex items-center gap-3 text-mono-400 tracking-wider">
          <span>LAT 19.076° N</span>
          <span className="text-mono-600">/</span>
          <span>SPEC 01</span>
        </div>
      </div>

      <div
        className="relative z-10 my-auto py-6 sm:py-8 flex flex-col gap-3 sm:gap-4 transition-transform duration-200 ease-out"
        style={
          reducedMotion
            ? {}
            : {
                transform: `rotateX(${-mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
                transformStyle: 'preserve-3d',
              }
        }
      >
        {PILLARS.map((pillar, idx) => {
          const isActive = activeWord === pillar.id;
          const parallaxX = reducedMotion ? 0 : mousePos.x * (pillar.depth * 6);
          const parallaxY = reducedMotion ? 0 : mousePos.y * (pillar.depth * 4);

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActiveWord(pillar.id)}
              className="relative group cursor-pointer transition-all duration-200"
              style={
                reducedMotion
                  ? {}
                  : {
                      transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0px)`,
                    }
              }
            >
              <div className="flex items-baseline justify-between gap-3 overflow-hidden">
                <span
                  className={`font-display font-black tracking-tight uppercase leading-[1] block transition-all duration-300 ${
                    isActive
                      ? 'text-white text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] scale-[1.02]'
                      : 'text-mono-700 hover:text-mono-300 text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem]'
                  }`}
                  style={{
                    WebkitTextStroke: isActive ? 'none' : '1px rgba(255, 255, 255, 0.14)',
                  }}
                >
                  {pillar.word}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                  <span
                    className={`font-mono text-xs sm:text-sm font-bold tracking-widest transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-mono-700'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
              </div>

              <div
                className={`h-px transition-all duration-300 mt-2 ${
                  isActive ? 'bg-white/30 w-full' : 'bg-white/[0.05] w-1/4 group-hover:w-1/3'
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 pt-4 sm:pt-5 border-t border-white/[0.08] transition-all duration-200">
        <div className="flex items-center justify-between gap-4 mb-1.5">
          <span className="font-mono text-[10px] text-mono-400 uppercase tracking-widest font-bold">
            {activePillar.tag}
          </span>
          <span className="text-[10px] font-mono text-mono-500 tracking-wider uppercase hidden sm:inline">
            Interactive Doctrine
          </span>
        </div>
        <p className="text-xs sm:text-sm text-mono-300 font-sans leading-relaxed">
          {activePillar.definition}
        </p>
      </div>

      <span className="absolute top-3 left-3 text-mono-700 font-mono text-[9px] pointer-events-none">+</span>
      <span className="absolute top-3 right-3 text-mono-700 font-mono text-[9px] pointer-events-none">+</span>
      <span className="absolute bottom-3 left-3 text-mono-700 font-mono text-[9px] pointer-events-none">+</span>
      <span className="absolute bottom-3 right-3 text-mono-700 font-mono text-[9px] pointer-events-none">+</span>
    </div>
  );
};
