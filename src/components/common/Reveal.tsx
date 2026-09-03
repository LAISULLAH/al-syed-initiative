import React, { useState, useEffect, useRef, ElementType } from 'react';
import { useReducedMotion } from '../../hooks';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = useReducedMotion();

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
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion, threshold, rootMargin]);

  return { ref, inView };
}

interface RevealProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  splitWords?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  as: Component = 'div',
  children,
  className = '',
  delayMs = 0,
  durationMs = 800,
  splitWords = false,
}) => {
  const { ref, inView } = useRevealOnScroll<HTMLElement>();
  const reducedMotion = useReducedMotion();

  const isHeading = Component === 'h1' || Component === 'h2';
  const shouldSplit = (splitWords || isHeading) && typeof children === 'string' && !reducedMotion;

  if (shouldSplit && typeof children === 'string') {
    const words = children.split(' ');

    return (
      <Component ref={ref} className={`${className} inline-block`}>
        {words.map((word, idx) => (
          <span
            key={idx}
            className="inline-block transition-all"
            style={{
              transitionDuration: `${durationMs}ms`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${delayMs + idx * 50}ms`,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
              filter: inView ? 'blur(0)' : 'blur(4px)',
              marginRight: idx < words.length - 1 ? '0.25em' : '0',
              willChange: 'opacity, transform, filter',
            }}
          >
            {word}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      className={`${className} transition-all`}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delayMs}ms`,
        opacity: inView || reducedMotion ? 1 : 0,
        transform: inView || reducedMotion ? 'translateY(0)' : 'translateY(24px)',
        filter: inView || reducedMotion ? 'blur(0)' : 'blur(4px)',
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </Component>
  );
};

interface RevealGroupProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export const RevealGroup: React.FC<RevealGroupProps> = ({
  as: Component = 'div',
  children,
  className = '',
  threshold = 0.05,
}) => {
  const { ref, inView } = useRevealOnScroll<HTMLElement>({ threshold });

  return (
    <Component
      ref={ref}
      className={`reveal-group ${inView ? 'is-in-view' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};

interface CountUpProps {
  end: number;
  start?: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  durationMs = 1200,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const { ref, inView } = useRevealOnScroll<HTMLSpanElement>();
  const [count, setCount] = useState(start);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOutCubic);
      setCount(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, end, start, durationMs, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

interface TypewriterProps {
  text: string;
  speedMs?: number;
  delayMs?: number;
  className?: string;
  cursor?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speedMs = 25,
  delayMs = 0,
  className = '',
  cursor = true,
}) => {
  const { ref, inView } = useRevealOnScroll<HTMLSpanElement>();
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setDisplayed(text);
      setShowCursor(false);
      return;
    }

    let timer: number;
    let charIndex = 0;

    const startTyping = () => {
      const interval = window.setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayed(text.slice(0, charIndex));
          charIndex++;
        } else {
          window.clearInterval(interval);
          window.setTimeout(() => setShowCursor(false), 600);
        }
      }, speedMs);
    };

    timer = window.setTimeout(startTyping, delayMs);
    return () => {
      window.clearTimeout(timer);
    };
  }, [inView, text, speedMs, delayMs, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && showCursor && (
        <span className="inline-block animate-pulse font-normal ml-0.5 text-white/70">
          |
        </span>
      )}
    </span>
  );
};
