import React, { useState, useRef, useEffect } from 'react';
import { Award, FileText, CheckCircle2 } from 'lucide-react';
import { useReducedMotion } from '../../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// CertificatePresentation (Proof of Progress)
//
// High-craft archival credential showcase for Al Syed Initiative.
// - Starts slightly blurred / concealed, smoothly reveals on scroll
// - Subtle interactive perspective tilt & zoom on hover
// - Elegant monochrome lighting (no holograms or neon gimmicks)
// - 3 Details: COMPLETION, RECOGNITION, CREDENTIAL
// - Bottom statement: LEARNED. COMPLETED. RECOGNIZED.
// ─────────────────────────────────────────────────────────────────────────────

interface DetailItem {
  label: string;
  desc: string;
}

const DETAILS: DetailItem[] = [
  {
    label: 'COMPLETION',
    desc: 'A record of completed learning.',
  },
  {
    label: 'RECOGNITION',
    desc: 'An official record of achievement.',
  },
  {
    label: 'CREDENTIAL',
    desc: 'A lasting proof of progress.',
  },
];

export const CertificatePresentation: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Smooth scroll-based reveal using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Subtle interactive parallax tilt on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = ((e.clientX - centerX) / (rect.width / 2)) * 3;
    const y = ((e.clientY - centerY) / (rect.height / 2)) * -3;

    setTilt({ x: Math.max(-3, Math.min(3, x)), y: Math.max(-3, Math.min(3, y)) });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-3xl bg-[#070707] border border-white/15 p-6 sm:p-10 lg:p-14 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.95)] overflow-hidden select-none transition-all duration-300 hover:border-white/30 text-left"
      aria-label="Proof of Progress Credential Archive"
    >
      {/* Background fine grid overlay */}
      <div className="absolute inset-0 bg-grid-fine opacity-25 pointer-events-none" />

      {/* Ambient center radial backlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.06) 0%, transparent 65%)',
        }}
      />

      {/* ── Top Bar: Official Credential Archive Telemetry ──────────── */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-5">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0 shadow-sm">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs sm:text-sm tracking-[0.22em] text-white uppercase font-black">
                OFFICIAL RECORD ARCHIVE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-mono-300 font-mono mt-1">
              Al Syed Initiative · Digital Lawforce Front
            </p>
          </div>
        </div>

        {/* Verification Specimen Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 text-xs font-mono text-white self-start sm:self-auto font-semibold">
          <FileText className="w-4 h-4 text-white" />
          <span>AUTHENTIC FORMAT</span>
        </div>
      </div>

      {/* ── Central Archival Certificate Display with Scroll Reveal ─── */}
      <div className="relative z-10 my-10 flex justify-center">
        <div
          className={`relative w-full max-w-4xl rounded-2xl bg-[#0d0d0d] border border-white/20 p-4 sm:p-6 lg:p-8 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-700 ease-out group hover:border-white/45 ${
            isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-60 blur-[3px] scale-[0.98]'
          }`}
          style={{
            transform: reducedMotion
              ? undefined
              : `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          }}
        >
          {/* Subtle Framing Hairlines */}
          <div className="absolute inset-3 border border-white/[0.08] pointer-events-none rounded-xl" />

          {/* Corner Crosshairs */}
          <span className="absolute top-5 left-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>
          <span className="absolute top-5 right-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>
          <span className="absolute bottom-5 left-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>
          <span className="absolute bottom-5 right-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>

          {/* Authentic Certificate Image (Smooth Parallax Zoom on Hover) */}
          <div className="relative rounded-xl overflow-hidden bg-black border border-white/15 shadow-inner" data-protected-image>
            <img
              src={`${import.meta.env.BASE_URL}certificate-exact.png`}
              alt="Official Al Syed Initiative Certificate of Excellence"
              className="w-full h-auto block object-contain select-none transition-transform duration-700 group-hover:scale-[1.015]"
              loading="eager"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>

      {/* ── Below Certificate: 3 Concise Details ─────────────────────── */}
      <div className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {DETAILS.map((item, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-mono-400 block mb-2 font-bold group-hover:text-white transition-colors">
                {item.label}
              </span>
              <p className="text-base sm:text-lg text-white font-medium font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            <div className="mt-5 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-mono-500 uppercase tracking-widest">
              OFFICIAL ATTRIBUTE
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom Statement Line: LEARNED. COMPLETED. RECOGNIZED. ─── */}
      <div className="relative z-10 mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-mono-200 tracking-[0.28em] uppercase font-black">
          <span className="text-white">LEARNED.</span>
          <span className="text-white">COMPLETED.</span>
          <span className="text-white">RECOGNIZED.</span>
        </div>

        <div className="text-[11px] font-mono text-mono-500 uppercase tracking-widest">
          AUTHENTIC CREDENTIAL SPECIFICATION // BATCH IV
        </div>
      </div>

    </div>
  );
};
