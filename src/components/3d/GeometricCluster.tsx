import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks';

interface ParticleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const GeometricCluster: React.FC<{ height?: string; density?: number }> = ({
  height = '300px',
  density = 38
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let heightPx = (canvas.height = canvas.parentElement?.clientHeight || 300);

    const nodes: ParticleNode[] = [];
    for (let i = 0; i < density; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * heightPx,
        vx: (Math.random() - 0.5) * (reducedMotion ? 0.05 : 0.4),
        vy: (Math.random() - 0.5) * (reducedMotion ? 0.05 : 0.4),
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, heightPx);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.18;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > heightPx) n.vy *= -1;

        ctx.fillStyle = `rgba(255, 255, 255, ${n.alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      heightPx = canvas.height = canvas.parentElement?.clientHeight || 300;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, reducedMotion]);

  return (
    <div style={{ height }} className="relative w-full overflow-hidden pointer-events-none opacity-40">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
