import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// GlobalAmbientLighting
//
// Living monochrome atmospheric layer:
// - Smooth cursor-following ambient spotlight
// - Faint architectural grid drift
// - Ultra-subtle film grain overlay
// - Slow moving light sweep across section boundaries
// - Strictly black, white & silver/gray (ZERO color)
// ─────────────────────────────────────────────────────────────────────────────

export const GlobalAmbientLighting: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const targetRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const currentRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      // Smooth lerp for liquid, organic motion
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.07;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.07;
      setCoords({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {/* ── 1. Cursor-Following Ambient Spotlight ──────────────────── */}
      {coords.x > -500 && (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(650px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.008) 45%, transparent 75%)`,
          }}
        />
      )}

      {/* ── 2. Ultra-Subtle Film Grain Texture ─────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* ── 3. Slow Ambient Light Sweep Hairline ───────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-beam-sweep" />
      </div>
    </div>
  );
};

