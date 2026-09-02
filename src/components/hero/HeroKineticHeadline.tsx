import React, { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// HeroKineticHeadline
//
// Editorial Swiss typography with living kinetic rhythm:
// - Clean, razor-sharp letterforms (ZERO artificial glow / zero blur shadows)
// - Organic subtle wave breathing across words (continuous, elegant life)
// - Gentle interactive mouse parallax depth
// - Refined letter-spacing response on interaction
// ─────────────────────────────────────────────────────────────────────────────

interface WordConfig {
  word: string;
  delay: number; // Staggered kinetic wave delay
}

const LINE_1: WordConfig[] = [
  { word: 'The', delay: 0 },
  { word: 'skill', delay: 0.2 },
  { word: "isn't", delay: 0.4 },
];

const LINE_2: WordConfig[] = [
  { word: 'knowing', delay: 0.6 },
  { word: 'more.', delay: 0.8 },
];

const LINE_3: WordConfig[] = [
  { word: "It's", delay: 1.0 },
  { word: 'knowing', delay: 1.2 },
  { word: 'how.', delay: 1.4 },
];

export const HeroKineticHeadline: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!headlineRef.current) return;
      const rect = headlineRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = ((e.clientX - centerX) / (window.innerWidth / 2)) * 6;
      const y = ((e.clientY - centerY) / (window.innerHeight / 2)) * 4;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  return (
    <h1
      ref={headlineRef}
      className="font-display font-black text-white tracking-tight uppercase select-none leading-[0.98]"
      style={{
        fontSize: 'clamp(2.75rem, 5.2vw, 4.75rem)',
        letterSpacing: '-0.035em',
      }}
      aria-label="The skill isn't knowing more. It's knowing how."
    >
      {/* ── Line 1 ──────────────────────────────────────────────────── */}
      <span
        className="block transition-transform duration-300 ease-out will-change-transform"
        style={
          reducedMotion
            ? {}
            : {
                transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
              }
        }
      >
        {LINE_1.map(({ word, delay }) => (
          <span
            key={word}
            onMouseEnter={() => setHoveredWord(word)}
            onMouseLeave={() => setHoveredWord(null)}
            className={`inline-block mr-[0.22em] transition-all duration-300 cursor-default ${
              hoveredWord === word ? 'text-white -translate-y-1' : 'text-white/90 hover:text-white'
            }`}
            style={
              reducedMotion
                ? {}
                : {
                    animation: `kineticWordFloat 4s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }
            }
          >
            {word}
          </span>
        ))}
      </span>

      {/* ── Line 2 ──────────────────────────────────────────────────── */}
      <span
        className="block transition-transform duration-300 ease-out will-change-transform mt-1"
        style={
          reducedMotion
            ? {}
            : {
                transform: `translate3d(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px, 0)`,
              }
        }
      >
        {LINE_2.map(({ word, delay }) => (
          <span
            key={word}
            onMouseEnter={() => setHoveredWord(word)}
            onMouseLeave={() => setHoveredWord(null)}
            className={`inline-block mr-[0.22em] transition-all duration-300 cursor-default ${
              hoveredWord === word ? 'text-white -translate-y-1' : 'text-mono-300 hover:text-white'
            }`}
            style={
              reducedMotion
                ? {}
                : {
                    animation: `kineticWordFloat 4s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }
            }
          >
            {word}
          </span>
        ))}
      </span>

      {/* ── Line 3: Crisp Satin Contrast (ZERO artificial glow) ────── */}
      <span
        className="block transition-transform duration-300 ease-out will-change-transform mt-1"
        style={
          reducedMotion
            ? {}
            : {
                transform: `translate3d(${mouseOffset.x * 1.1}px, ${mouseOffset.y * 1.1}px, 0)`,
              }
        }
      >
        <span className="relative inline-block text-white">
          {LINE_3.map(({ word, delay }) => (
            <span
              key={word}
              onMouseEnter={() => setHoveredWord(word)}
              onMouseLeave={() => setHoveredWord(null)}
              className={`inline-block mr-[0.22em] transition-all duration-300 cursor-default text-white ${
                hoveredWord === word ? '-translate-y-1.5 text-white' : 'text-mono-100 hover:text-white'
              }`}
              style={
                reducedMotion
                  ? {}
                  : {
                      animation: `kineticWordFloat 4s ease-in-out infinite`,
                      animationDelay: `${delay}s`,
                    }
              }
            >
              {word}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
};
