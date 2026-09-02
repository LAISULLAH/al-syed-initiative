import React, { useState, useEffect, useRef } from 'react';
import { Search, ShieldCheck, CheckCircle2, Award, Sparkles, Star, ChevronRight, Flame } from 'lucide-react';
import { BATCH_1_STUDENTS, BATCH_2_STUDENTS, CertifiedStudent } from '../data/hallOfFameData';
import { useReducedMotion } from '../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// Hall of Fame — The Imperial Golden Archive
//
// Trophy-Grade Prestige & Luxury Design:
// - Palette: Deep Obsidian Void (#030201) & Imperial Liquid Gold (#ECC870, #D4AF37, #B3832B)
// - Floating Golden Embers & Stardust Canvas Engine
// - Monumental Golden Inscription Plaques for Every Laureate
// - Strictly Preserves All 19 Real Verified Certified Students:
//   Batch 01: Araxis, Al Haris, Zulqarnain, Orvax, Ibn Adam
//   Batch 02: ALHaq, Bani Adam, Baseej, Fly-Nightingale, Jarvis, Khalid,
//             Laisullah, LegallyStalking, RadicalGates, Shaikh Sahab,
//             Spectre, STOIC MURDOCK, Vision, Yamach
// ─────────────────────────────────────────────────────────────────────────────

export const HallOfFame: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse spotlight coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  // Entrance trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // Smooth lerped cursor movement tracking for warm golden spotlight
  useEffect(() => {
    if (reducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  // Rising Golden Embers & Stardust Particles Canvas
  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool: 45 golden glowing embers
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedY: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulse += 0.025;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236, 200, 112, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reducedMotion]);

  // Filter students based on query while preserving exact verified records
  const q = searchQuery.trim().toLowerCase();
  const filterList = (list: CertifiedStudent[]) => {
    if (!q) return list;
    return list.filter((s) => s.name.toLowerCase().includes(q) || s.number.includes(q));
  };

  const filteredBatch1 = filterList(BATCH_1_STUDENTS);
  const filteredBatch2 = filterList(BATCH_2_STUDENTS);
  const totalFound = filteredBatch1.length + filteredBatch2.length;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#030201] text-mono-100 overflow-hidden select-none selection:bg-[#ECC870] selection:text-black font-sans"
    >
      {/* ── 0. Canvas Golden Embers Layer ────────────────────────── */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Cursor-Following Warm Golden Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 z-0"
        style={{
          background: reducedMotion
            ? 'radial-gradient(circle at 50% 25%, rgba(212,175,55,0.08) 0%, transparent 65%)'
            : `radial-gradient(900px circle at ${mousePos.x}px ${mousePos.y}px, rgba(236,200,112,0.08) 0%, rgba(212,175,55,0.02) 40%, transparent 70%)`,
        }}
      />

      {/* Monumental Golden Aura Backdrop */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[750px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% -10%, rgba(236,200,112,0.12) 0%, rgba(212,175,55,0.03) 45%, transparent 75%)',
        }}
      />

      {/* Fine Architectural Grid with subtle golden tint */}
      <div className="absolute inset-0 bg-grid-fine opacity-20 pointer-events-none z-0" />

      {/* Vertical Golden Hairline Margin Guides */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ECC870]/20 to-transparent" />
        <div className="absolute right-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ECC870]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-36">
        
        {/* ═════════════════════════════════════════════════════════════
            01 — HERO SECTION (THE IMPERIAL TROPHY PORTAL)
        ═════════════════════════════════════════════════════════════ */}
        <section className="mb-24 sm:mb-32 text-left">
          
          {/* Imperial Laurel Eyebrow */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#ECC870]/40 bg-gradient-to-r from-[#1F190B]/80 to-[#120F05]/80 backdrop-blur-xl mb-6 sm:mb-8 transition-all duration-700 delay-100 shadow-[0_0_25px_rgba(236,200,112,0.15)] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ECC870] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B]">
              AL SYED INITIATIVE // OFFICIAL CERTIFICATION ARCHIVE
            </span>
          </div>

          {/* Monumental Liquid Gold Heading */}
          <div className="relative">
            <h1
              className={`font-display font-black uppercase tracking-[-0.04em] leading-[0.88] mb-8 transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[8px] translate-y-6'
              }`}
              style={{ fontSize: 'clamp(3.8rem, 12vw, 10.5rem)' }}
            >
              <span className="block text-white">HALL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5D77F] to-[#AA7C11] filter drop-shadow-[0_12px_40px_rgba(236,200,112,0.3)]">
                OF FAME
              </span>
            </h1>

            {/* Glowing Golden Diamond Emblem in Background */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none select-none filter drop-shadow-[0_0_40px_rgba(236,200,112,0.4)]">
              <img
                src={`${import.meta.env.BASE_URL}favicon.png`}
                alt="Al Syed Archive Watermark"
                className="w-56 h-56 object-contain select-none pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* Supporting Text & Archive Status HUD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-6 border-t border-[#ECC870]/25">
            
            <p
              className={`lg:col-span-8 text-base sm:text-lg lg:text-xl text-mono-300 font-sans leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              A permanent record of students who have met the certification standard through skill, discipline, and determined investigation.
            </p>

            {/* Small Animated Archive / Status Line with Radiant Gold Medallion */}
            <div
              className={`lg:col-span-4 flex lg:justify-end transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#151107] to-[#0A0803] border border-[#ECC870]/40 backdrop-blur-xl shadow-[0_0_35px_rgba(236,200,112,0.15)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ECC870] shadow-[0_0_12px_#ECC870] animate-pulse shrink-0" />
                <div className="flex flex-col text-left font-mono">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#ECC870] font-bold">
                    CERTIFICATION RECORD
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-white font-bold tracking-wider">
                      BATCH 01 — BATCH 02
                    </span>
                    <span className="text-mono-600">·</span>
                    <span className="text-xs text-black font-black tracking-wider bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B] px-2 py-0.5 rounded shadow-[0_0_12px_rgba(236,200,112,0.5)]">
                      19 CERTIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ═════════════════════════════════════════════════════════════
            02 — ARCHIVE INTRO (THE GOLDEN INSCRIPTION)
        ═════════════════════════════════════════════════════════════ */}
        <section className="mb-24 sm:mb-32 py-14 sm:py-20 border-y border-[#ECC870]/25 relative overflow-hidden bg-gradient-to-b from-[#ECC870]/[0.03] via-transparent to-[#ECC870]/[0.03] text-left">
          
          {/* Golden Beam Horizon */}
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ECC870]/60 to-transparent pointer-events-none" />

          <div className="max-w-4xl space-y-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[1.08]">
              “NOT EVERYONE WHO STARTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B]">
                MAKES THE RECORD.”
              </span>
            </h2>

            <p className="text-sm sm:text-base text-mono-300 font-sans leading-relaxed max-w-2xl font-normal pt-2">
              Every name below represents a completed certification journey within the Al Syed Initiative.
            </p>
          </div>

          {/* Minimalist Gold-Trimmed Search Index Filter */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ECC870]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certified record..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#090703] border border-[#ECC870]/30 rounded-xl text-xs sm:text-sm text-white placeholder-mono-500 font-mono focus:outline-none focus:border-[#ECC870] focus:ring-1 focus:ring-[#ECC870]/30 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#ECC870] hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-[11px] font-mono text-[#ECC870] mt-2">
                Found {totalFound} matching certification record{totalFound === 1 ? '' : 's'}
              </p>
            )}
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            03 — BATCH 01: THE PIONEERS (5 CERTIFIED LAUREATES)
        ═════════════════════════════════════════════════════════════ */}
        <section className="mb-24 sm:mb-32 text-left">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-[#ECC870]/30 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#ECC870]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#ECC870]">
                  PIONEER COHORT
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
                01 / BATCH ONE
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181308] border border-[#ECC870]/40 font-mono text-xs text-[#ECC870] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(236,200,112,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] shadow-[0_0_8px_#ECC870] animate-pulse" />
              <span>5 CERTIFIED</span>
            </div>
          </div>

          {/* Monumental Golden Plaque Grid for Batch 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredBatch1.map((student, idx) => {
              const isHovered = hoveredId === student.id;

              return (
                <div
                  key={student.id}
                  onMouseEnter={() => setHoveredId(student.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-default overflow-hidden border ${
                    isHovered
                      ? 'border-[#ECC870] bg-gradient-to-b from-[#1E1709] via-[#100D05] to-[#050402] -translate-y-1.5 shadow-[0_15px_40px_-10px_rgba(236,200,112,0.25)]'
                      : 'border-[#ECC870]/20 bg-gradient-to-b from-[#100D06]/90 to-[#060502]/95 hover:border-[#ECC870]/50'
                  }`}
                >
                  {/* Top Golden Light Highlight */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#ECC870]/60 to-transparent pointer-events-none" />

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#ECC870]/40 pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#ECC870]/40 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#ECC870]/40 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#ECC870]/40 pointer-events-none" />

                  {/* Top Bar: Index + Batch Pill */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#ECC870] bg-[#ECC870]/10 px-2 py-0.5 rounded border border-[#ECC870]/25">
                      #{student.number}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mono-400">
                      BATCH 01 PIONEER
                    </span>
                  </div>

                  {/* Main Student Name */}
                  <div className="mb-6">
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8E7] to-[#ECC870] group-hover:drop-shadow-[0_0_15px_rgba(236,200,112,0.5)] transition-all duration-300">
                      {student.name}
                    </h3>
                  </div>

                  {/* Bottom Verification Seal */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-wider uppercase text-[#ECC870]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ECC870]" />
                      <span>CERTIFIED STUDENT</span>
                    </div>

                    <ShieldCheck className="w-4 h-4 text-[#ECC870]/60 group-hover:text-[#ECC870] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          {filteredBatch1.length === 0 && (
            <p className="py-8 text-xs font-mono text-mono-500">
              No matching records in Batch 01.
            </p>
          )}

        </section>

        {/* ═════════════════════════════════════════════════════════════
            06 — BATCH TRANSITION (THE GOLDEN PROGRESSION MONUMENT)
        ═════════════════════════════════════════════════════════════ */}
        <section className="mb-24 sm:mb-32 py-16 sm:py-20 border border-[#ECC870]/35 bg-gradient-to-b from-[#120E05] via-[#090703] to-[#040301] rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(236,200,112,0.18)]">
          
          {/* Top Hairline Liquid Gold Beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#ECC870] to-transparent pointer-events-none" />

          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-center md:text-left">
            
            {/* Step 1: Batch 01 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#ECC870] font-bold mb-1">
                BATCH 01
              </span>
              <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                05
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-mono-400 mt-1">
                CERTIFIED
              </span>
            </div>

            {/* Transition Arrow with Gold Glow */}
            <div className="flex flex-col items-center gap-1 text-[#ECC870]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] shadow-[0_0_6px_#ECC870]" />
              <ChevronRight className="w-5 h-5 text-[#ECC870] animate-pulse rotate-90 md:rotate-0" />
            </div>

            {/* Step 2: Batch 02 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#ECC870] font-bold mb-1">
                BATCH 02
              </span>
              <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                14
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-mono-400 mt-1">
                CERTIFIED
              </span>
            </div>

            {/* Transition Arrow with Gold Glow */}
            <div className="flex flex-col items-center gap-1 text-[#ECC870]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] shadow-[0_0_6px_#ECC870]" />
              <ChevronRight className="w-5 h-5 text-[#ECC870] animate-pulse rotate-90 md:rotate-0" />
            </div>

            {/* Step 3: Imperial Total Archive Vault */}
            <div className="flex flex-col items-center md:items-start p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1C1607] to-[#0A0803] border border-[#ECC870]/60 shadow-[0_0_35px_rgba(236,200,112,0.25)]">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#ECC870] font-black mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#ECC870]" />
                TOTAL ARCHIVE
              </span>
              <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B] tracking-tight filter drop-shadow-[0_0_15px_rgba(236,200,112,0.4)]">
                19
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white mt-1 font-bold">
                TOTAL CERTIFIED
              </span>
            </div>

          </div>

        </section>

        {/* ═════════════════════════════════════════════════════════════
            04 — BATCH 02: THE VANGUARD (14 CERTIFIED LAUREATES)
        ═════════════════════════════════════════════════════════════ */}
        <section className="mb-28 sm:mb-36 text-left">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-[#ECC870]/30 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#ECC870]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#ECC870]">
                  OPERATIONAL COHORT
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
                02 / BATCH TWO
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181308] border border-[#ECC870]/40 font-mono text-xs text-[#ECC870] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(236,200,112,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] shadow-[0_0_8px_#ECC870] animate-pulse" />
              <span>14 CERTIFIED</span>
            </div>
          </div>

          {/* Monumental Golden Plaque Grid for Batch 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredBatch2.map((student) => {
              const isHovered = hoveredId === student.id;

              return (
                <div
                  key={student.id}
                  onMouseEnter={() => setHoveredId(student.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-default overflow-hidden border ${
                    isHovered
                      ? 'border-[#ECC870] bg-gradient-to-b from-[#1E1709] via-[#100D05] to-[#050402] -translate-y-1.5 shadow-[0_15px_35px_-10px_rgba(236,200,112,0.22)]'
                      : 'border-[#ECC870]/20 bg-gradient-to-b from-[#0F0C05]/85 to-[#050402]/95 hover:border-[#ECC870]/45'
                  }`}
                >
                  {/* Top Golden Light Highlight */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-[#ECC870]/50 to-transparent pointer-events-none" />

                  {/* Corner Accent Brackets */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-[#ECC870]/30 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-[#ECC870]/30 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-[#ECC870]/30 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-[#ECC870]/30 pointer-events-none" />

                  {/* Top Bar: Index + Batch Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-[#ECC870] bg-[#ECC870]/10 px-2 py-0.5 rounded border border-[#ECC870]/20">
                      #{student.number}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-mono-400">
                      BATCH 02
                    </span>
                  </div>

                  {/* Main Student Name */}
                  <div className="mb-5 min-h-[3rem] flex items-center">
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8E7] to-[#ECC870] group-hover:drop-shadow-[0_0_12px_rgba(236,200,112,0.45)] transition-all duration-300 leading-tight">
                      {student.name}
                    </h3>
                  </div>

                  {/* Bottom Verification Seal */}
                  <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-wider uppercase text-[#ECC870]">
                      <CheckCircle2 className="w-3 h-3 text-[#ECC870]" />
                      <span>CERTIFIED STUDENT</span>
                    </div>

                    <ShieldCheck className="w-3.5 h-3.5 text-[#ECC870]/50 group-hover:text-[#ECC870] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          {filteredBatch2.length === 0 && (
            <p className="py-8 text-xs font-mono text-mono-500">
              No matching records in Batch 02.
            </p>
          )}

        </section>

        {/* ═════════════════════════════════════════════════════════════
            07 — CLOSING STATEMENT (THE IMPERIAL INSCRIPTION)
        ═════════════════════════════════════════════════════════════ */}
        <section className="pt-20 sm:pt-28 pb-16 border-t border-[#ECC870]/30 text-left relative">
          
          {/* Authentic Al Syed Archive Emblem */}
          <div className="flex items-center gap-3.5 mb-8">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center filter drop-shadow-[0_0_18px_rgba(236,200,112,0.6)]">
              <img
                src={`${import.meta.env.BASE_URL}favicon.png`}
                alt="Al Syed Initiative Insignia"
                className="w-full h-full object-contain select-none"
                loading="eager"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ECC870] font-bold">
              AL SYED INITIATIVE RECORD OF EXCELLENCE
            </span>
          </div>

          <h2
            className="font-display font-black uppercase tracking-tight leading-[0.92] max-w-4xl"
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
              letterSpacing: '-0.035em',
            }}
          >
            <span className="text-white block">“EARNED THROUGH KNOWLEDGE.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B] filter drop-shadow-[0_5px_25px_rgba(236,200,112,0.35)] block mt-1">
              REMEMBERED THROUGH EXCELLENCE.”
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-mono text-[#ECC870]">
            <span className="px-3.5 py-1.5 rounded-full bg-[#ECC870]/[0.08] border border-[#ECC870]/30">
              OFFICIAL REGISTRY
            </span>
            <span className="text-[#ECC870]/40">·</span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#ECC870]/[0.08] border border-[#ECC870]/30">
              AUTHENTICATED RECORD
            </span>
            <span className="text-[#ECC870]/40">·</span>
            <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B] text-black font-black shadow-[0_0_15px_rgba(236,200,112,0.4)]">
              19 VERIFIED GRADUATES
            </span>
          </div>
        </section>

      </div>
    </div>
  );
};
