import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// HeroAmbientAtmosphere (HeroAmbientEmbers)
//
// An award-winning combination of:
// 1. Interactive Cursor Spotlight (Smooth luxury radial illumination tracking mouse)
// 2. Cinematic Atmospheric Micro-Embers (Delicate silver & deep ruby sparks)
// 3. Subtle Breathing Ambient Heat Haze at bottom
//
// 100% 60fps canvas, ultra-refined opacity, zero distraction from typography.
// ─────────────────────────────────────────────────────────────────────────────

interface Spark {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  color: string;
  glowColor: string;
  life: number;
  maxLife: number;
  swaySpeed: number;
  swayOffset: number;
}

export const HeroAmbientEmbers: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates with smooth lerping
    let targetMouseX = width / 2;
    let targetMouseY = height / 3;
    let currentMouseX = targetMouseX;
    let currentMouseY = targetMouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Color palette: delicate deep ruby, amber spark, and silver-white core
    const sparkPalette = [
      { fill: 'rgba(255, 80, 60, ', glow: 'rgba(220, 38, 38, 0.4)' },     // Subtle ruby spark
      { fill: 'rgba(255, 255, 255, ', glow: 'rgba(255, 255, 255, 0.6)' }, // Silver-white core
      { fill: 'rgba(240, 90, 60, ', glow: 'rgba(185, 28, 28, 0.35)' },   // Deep flame spark
      { fill: 'rgba(220, 220, 230, ', glow: 'rgba(200, 200, 220, 0.5)' }, // Cool starlight
    ];

    const sparks: Spark[] = [];
    const sparkCount = 38; // Perfectly balanced, delicate, non-distracting

    const createSpark = (fromBottom = false): Spark => {
      const palette = sparkPalette[Math.floor(Math.random() * sparkPalette.length)];
      const maxLife = Math.random() * 220 + 140;

      return {
        x: Math.random() * width,
        y: fromBottom ? height + Math.random() * 20 : Math.random() * height,
        size: Math.random() * 2 + 0.6, // Micro-sized, elegant sparks
        speedY: Math.random() * 0.9 + 0.4,
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: 0,
        maxOpacity: Math.random() * 0.55 + 0.15,
        color: palette.fill,
        glowColor: palette.glow,
        life: fromBottom ? 0 : Math.random() * maxLife,
        maxLife,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * Math.PI * 2,
      };
    };

    for (let i = 0; i < sparkCount; i++) {
      sparks.push(createSpark(false));
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse position
      currentMouseX += (targetMouseX - currentMouseX) * 0.06;
      currentMouseY += (targetMouseY - currentMouseY) * 0.06;

      // ── 1. Interactive Cursor Radial Spotlight ─────────────────────
      const spotlightRadius = Math.min(width, height) * 0.55;
      const spotlightGrad = ctx.createRadialGradient(
        currentMouseX,
        currentMouseY,
        0,
        currentMouseX,
        currentMouseY,
        spotlightRadius
      );
      spotlightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.045)');
      spotlightGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.012)');
      spotlightGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = spotlightGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 2. Atmospheric Micro-Sparks with Air Turbulence ───────────
      for (let i = 0; i < sparks.length; i++) {
        const p = sparks[i];
        p.life++;

        // Smooth fade-in, sustain, and fade-out
        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.opacity = (progress / 0.2) * p.maxOpacity;
        } else if (progress > 0.75) {
          p.opacity = ((1 - progress) / 0.25) * p.maxOpacity;
        }

        // Air turbulence upward motion
        p.y -= p.speedY;
        p.x += Math.sin(p.life * p.swaySpeed + p.swayOffset) * 0.45 + p.speedX;

        // Reset if cooled or out of view
        if (p.life >= p.maxLife || p.y < -20 || p.x < -20 || p.x > width + 20) {
          sparks[i] = createSpark(true);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.opacity)})`;
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = p.size * 4;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Bottom ambient cinematic heat glow (extremely subtle & tasteful) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(220, 38, 38, 0.08) 0%, rgba(153, 27, 27, 0.02) 50%, transparent 80%)',
        }}
      />
      {/* 60fps Interactive Spotlight + Delicate Micro-Embers Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
