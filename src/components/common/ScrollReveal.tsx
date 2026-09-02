import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// ScrollReveal
//
// Lightweight, buttery-smooth scroll reveal component using IntersectionObserver.
// - Natural blur-to-sharp transition
// - Opacity & subtle translateY entrance
// - Horizontal hairline expansion support
// - Strictly respects prefers-reduced-motion
// ─────────────────────────────────────────────────────────────────────────────

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  threshold?: number;
  showLine?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 450,
  threshold = 0.05,
  showLine = false,
}) => {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${className} ${
        inView
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-3 blur-[2px]'
      }`}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {showLine && (
        <div
          className={`h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 transition-transform duration-1000 ease-out origin-left ${
            inView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
          style={{ transitionDelay: `${delayMs}ms` }}
        />
      )}
      {children}
    </div>
  );
};

