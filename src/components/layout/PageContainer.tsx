import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '../../hooks';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: '5xl' | '6xl' | '7xl';
  withGrid?: boolean;
}

interface RedactionBar {
  id: number;
  top: string;
  left: string;
  width: string;
  height: string;
  opacity: number;
  duration: string;
  delay: string;
}

interface CaseStamp {
  text: string;
  top: string;
  left?: string;
  right?: string;
  rotation: string;
  duration: string;
  delay: string;
}

const generateBars = (mobile: boolean): RedactionBar[] => {
  const count = mobile ? 5 : 11;
  const items: RedactionBar[] = [];
  const verticalStep = 80 / count;

  for (let i = 0; i < count; i++) {
    const top = `${Math.floor(10 + i * verticalStep + (Math.random() * 4 - 2))}%`;
    const leftVal = Math.floor(Math.random() * 75 + 5);
    const left = `${leftVal}%`;
    const width = `${Math.floor(Math.random() * 180 + 80)}px`;
    const height = `${Math.floor(Math.random() * 8 + 14)}px`;
    const opacity = +(Math.random() * 0.2 + 0.5).toFixed(2);
    const duration = `${(Math.random() * 4 + 6).toFixed(1)}s`;
    const delay = `${(Math.random() * 7).toFixed(1)}s`;

    items.push({
      id: i,
      top,
      left,
      width,
      height,
      opacity,
      duration,
      delay,
    });
  }
  return items;
};

const getStampTexts = (path: string): string[] => {
  if (path.includes('/courses')) {
    return ['ACTIVE COHORT', 'DECLASSIFIED', 'RESTRICTED'];
  }
  if (path.includes('/hall-of-fame')) {
    return ['VERIFIED', 'DOSSIER ARCHIVE', 'RECORD #089'];
  }
  if (path.includes('/about')) {
    return ['DOCTRINE // ADL', 'CLASSIFIED', 'CASE #0447'];
  }
  if (path.includes('/contact')) {
    return ['COMM DESK', 'ENCRYPTED CHANNEL', 'RESTRICTED'];
  }
  if (path.includes('/faq')) {
    return ['KNOWLEDGE BASE', 'DECLASSIFIED', 'CASE #0447'];
  }
  return ['CLASSIFIED', 'VERIFIED', 'CASE #0447'];
};

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  maxWidth = '7xl',
  withGrid = true,
}) => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
          const current = Math.min(1, Math.max(0, window.scrollY / maxScroll));
          setScrollProgress(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 128;
    canvas.width = size;
    canvas.height = size;

    const imgData = ctx.createImageData(size, size);
    const buffer = new Uint32Array(imgData.data.buffer);

    let intervalId: number;

    const updateNoise = () => {
      const len = buffer.length;
      for (let i = 0; i < len; i++) {
        const val = (Math.random() * 255) | 0;
        buffer[i] = (255 << 24) | (val << 16) | (val << 8) | val;
      }
      ctx.putImageData(imgData, 0, 0);
    };

    updateNoise();
    intervalId = window.setInterval(updateNoise, 200);

    return () => window.clearInterval(intervalId);
  }, [reducedMotion, isMobile]);

  const redactionBars = useMemo(() => generateBars(isMobile), [isMobile]);
  const stampTexts = useMemo(() => getStampTexts(location.pathname), [location.pathname]);

  const stamps: CaseStamp[] = useMemo(() => {
    if (isMobile) {
      return [
        {
          text: stampTexts[0],
          top: '16%',
          right: '3%',
          rotation: '-14deg',
          duration: '0s',
          delay: '0s',
        },
      ];
    }
    return [
      {
        text: stampTexts[0],
        top: '12%',
        left: '2%',
        rotation: '-15deg',
        duration: '18s',
        delay: '0s',
      },
      {
        text: stampTexts[1],
        top: '46%',
        right: '2%',
        rotation: '-13deg',
        duration: '22s',
        delay: '-7s',
      },
      {
        text: stampTexts[2],
        top: '78%',
        left: '3%',
        rotation: '-17deg',
        duration: '20s',
        delay: '-14s',
      },
    ];
  }, [isMobile, stampTexts]);

  const topGlowY = 15 + scrollProgress * 25;
  const secondaryGlowX = 60 - scrollProgress * 20;
  const secondaryGlowY = 40 + scrollProgress * 30;

  const maxWidthClass =
    maxWidth === '5xl'
      ? 'max-w-5xl'
      : maxWidth === '6xl'
      ? 'max-w-6xl'
      : 'max-w-7xl';

  return (
    <div className={`page-bg relative min-h-screen text-mono-100 overflow-hidden font-sans select-none ${className}`}>
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(ellipse 55% 35% at 50% ${topGlowY}%, rgba(255, 255, 255, 0.13) 0%, rgba(255,255,255,0.04) 45%, transparent 75%),
            radial-gradient(ellipse 80% 60% at 50% ${topGlowY + 10}%, rgba(255, 255, 255, 0.06) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at ${secondaryGlowX}% ${secondaryGlowY}%, rgba(255, 255, 255, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 88% 92%, rgba(0, 212, 255, 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 8% 78%, rgba(0, 180, 255, 0.025) 0%, transparent 65%),
            linear-gradient(180deg, #050505 0%, #080808 40%, #0a0a0a 70%, #070707 100%)
          `,
        }}
      />

      {!reducedMotion && (
        <>
          <div
            className="ambient-orb z-0"
            style={{
              width: '40vw',
              height: '40vw',
              background: 'rgba(0, 212, 255, 1)',
              bottom: '-8vw',
              right: '-8vw',
              animationDelay: '0s',
              animationDuration: '12s',
            }}
          />
          <div
            className="ambient-orb z-0"
            style={{
              width: '30vw',
              height: '30vw',
              background: 'rgba(0, 160, 255, 1)',
              top: '30%',
              left: '-6vw',
              animationDelay: '-5s',
              animationDuration: '16s',
            }}
          />
        </>
      )}

      {withGrid && (
        <div className="fixed inset-0 osint-grid opacity-50 md:opacity-100 pointer-events-none z-0" />
      )}

      <div className="fixed inset-0 osint-scanlines opacity-15 md:opacity-30 pointer-events-none z-0" />
      <div className="osint-scan-bar opacity-35 md:opacity-60 pointer-events-none z-[1]" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
        {redactionBars.map((bar) => (
          <div
            key={bar.id}
            className={`redaction-bar ${!isMobile && !reducedMotion ? 'animated' : ''}`}
            style={{
              top: bar.top,
              left: bar.left,
              width: bar.width,
              height: bar.height,
              backgroundColor: `rgba(0, 0, 0, ${bar.opacity})`,
              ['--bar-opacity' as any]: bar.opacity,
              ['--bar-duration' as any]: bar.duration,
              ['--bar-delay' as any]: bar.delay,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
        {stamps.map((stamp, idx) => (
          <div
            key={idx}
            className={`case-stamp ${!isMobile && !reducedMotion ? 'animated' : ''} text-4xl sm:text-6xl lg:text-7xl`}
            style={{
              top: stamp.top,
              left: stamp.left,
              right: stamp.right,
              transform: `rotate(${stamp.rotation})`,
              opacity: isMobile || reducedMotion ? 0.025 : undefined,
              ['--stamp-max-opacity' as any]: 0.04,
              ['--stamp-duration' as any]: stamp.duration,
              ['--stamp-delay' as any]: stamp.delay,
            }}
          >
            <span className="border-2 border-white/20 px-4 py-1.5 rounded-sm inline-block backdrop-blur-[1px]">
              {stamp.text}
            </span>
          </div>
        ))}
      </div>

      {!isMobile && !reducedMotion ? (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none mix-blend-overlay z-[2] opacity-[0.05]"
        />
      ) : (
        <div className="fixed inset-0 static-grain opacity-[0.02] pointer-events-none z-[2]" />
      )}

      <div className="fixed inset-0 page-vignette hidden lg:block z-[3]" />

      <div className={`relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 ${maxWidthClass}`}>
        {children}
      </div>
    </div>
  );
};
