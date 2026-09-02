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

  if (reducedMotion) return null;

  return (
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
  );
};

