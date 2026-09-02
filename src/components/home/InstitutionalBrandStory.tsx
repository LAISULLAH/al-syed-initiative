import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// InstitutionalBrandStory
//
// Sophisticated, human, authoritative institutional story for Al Syed Initiative.
//
// Heading:
// WHY AL SYED EXISTS.
//
// Subtext:
// A cybersecurity initiative built around knowledge, awareness, investigation,
// and responsible practice.
//
// Left Side:
// - Real story with highlighted phrases:
//   "CRITICAL THINKING", "RESPONSIBLE INVESTIGATION", "DIGITAL AWARENESS", "PRACTICAL SECURITY"
// - Mission statement: OUR PURPOSE
//   "Build people who can think independently, investigate responsibly, and navigate the digital world with confidence."
//
// Right Side:
// - The authentic ADL Front Emblem Showcase (100% transparent PNG with glowing
//   telemetry rings and silver backlight).
//
// Bottom:
// KNOWLEDGE IS THE FOUNDATION.
// DISCIPLINE IS THE METHOD.
// RESPONSIBILITY IS THE STANDARD.
// ─────────────────────────────────────────────────────────────────────────────

export const InstitutionalBrandStory: React.FC = () => {
  return (
    <div className="w-full text-left">
      
      {/* ── Section Header ─────────────────────────────────────────── */}
      <div className="max-w-4xl mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
          <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
            FOUNDATIONAL STORY // INSTITUTION
          </span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.96] mb-6">
          Why Al Syed <br className="hidden sm:inline" />
          <span className="text-gradient-silver">Exists.</span>
        </h2>

        <p className="text-lg sm:text-xl text-mono-200 font-sans leading-relaxed max-w-2xl font-normal">
          A cybersecurity initiative built around knowledge, awareness, investigation, and responsible practice.
        </p>
      </div>

      {/* ── Main Editorial Story Grid (Asymmetric Layout) ──────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Real Institutional Story & Purpose */}
        <div className="lg:col-span-6 space-y-10">
          
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-mono-200 font-sans leading-relaxed font-normal">
              Founded under the Advanced Digital Lawforce Front (ADL Front) by cyber activist Al Syed, this initiative carries forward an uncompromising commitment: cultivating a generation equipped with{' '}
              <span className="text-white font-black tracking-wide border-b border-white/30 pb-0.5">
                CRITICAL THINKING
              </span>{' '}
              and{' '}
              <span className="text-white font-black tracking-wide border-b border-white/30 pb-0.5">
                DIGITAL AWARENESS
              </span>{' '}
              to confront injustice, manipulation, and disinformation in the digital era.
            </p>

            <p className="text-lg sm:text-xl text-mono-300 font-sans leading-relaxed font-normal">
              Built on the conviction that knowledge and disciplined method are the ultimate instruments of truth, the initiative provides rigorous education across OSINT, reconnaissance, and{' '}
              <span className="text-white font-black tracking-wide border-b border-white/30 pb-0.5">
                PRACTICAL SECURITY
              </span>{' '}
              — developing individuals grounded in ethical accountability and{' '}
              <span className="text-white font-black tracking-wide border-b border-white/30 pb-0.5">
                RESPONSIBLE INVESTIGATION
              </span>.
            </p>
          </div>

          {/* Separate Mission Statement: OUR PURPOSE */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-mono-400 uppercase tracking-widest font-bold">
                OUR PURPOSE
              </span>
            </div>

            <blockquote className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-snug">
              “Build people who can think independently, investigate responsibly, and navigate the digital world with confidence.”
            </blockquote>
          </div>

        </div>

        {/* Right Column: Pure Large ADL Front Insignia Showcase */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#060606] border border-white/15 flex flex-col items-center justify-between min-h-[500px] lg:min-h-[560px] relative overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.95)] group hover:border-white/35 transition-all duration-500">
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-grid-fine opacity-25 pointer-events-none" />

            {/* Ambient radial silver backlight directly behind logo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
              }}
            />

            {/* Corner Register Crosshairs */}
            <span className="absolute top-5 left-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>
            <span className="absolute top-5 right-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>
            <span className="absolute bottom-5 left-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>
            <span className="absolute bottom-5 right-5 text-mono-500 font-mono text-xs pointer-events-none">+</span>

            {/* Top Telemetry Header */}
            <div className="relative z-10 w-full flex items-center justify-between pb-6 border-b border-white/10 mb-auto">
              <span className="font-mono text-xs font-bold text-mono-400 uppercase tracking-widest">
                OFFICIAL INSIGNIA
              </span>
              <span className="font-mono text-xs text-white font-bold tracking-wider">
                ADL FRONT // 2026
              </span>
            </div>

            {/* Centerpiece: Pure Large Logo Floating with Orbiting Rings */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full my-auto py-6">
              <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
                
                {/* Outer Slow-Rotating Astronomical Ring */}
                <div
                  className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"
                  style={{ animation: 'spin 60s linear infinite' }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_14px_white]" />
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/50" />
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50" />
                </div>

                {/* Middle Dashed Telemetry Ring */}
                <div
                  className="absolute inset-6 rounded-full border border-dashed border-white/15 pointer-events-none"
                  style={{ animation: 'spin 45s linear infinite reverse' }}
                />

                {/* The Pure Diamond Emblem (100% Authentic, Transparent Background) */}
                <div className="relative w-56 h-56 sm:w-68 sm:h-68 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={`${import.meta.env.BASE_URL}favicon.png`}
                    alt="Al Syed Initiative Insignia"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(255,255,255,0.45)]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Attribution Badge Underneath the Logo */}
              <div className="mt-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/20 text-xs font-mono text-mono-200 uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
                <span className="text-white font-bold">AL SYED INITIATIVE</span>
                <span className="text-mono-600">·</span>
                <span className="text-mono-300">ADL FRONT</span>
              </div>
            </div>

            {/* Bottom Architectural Coordinates Bar */}
            <div className="relative z-10 mt-auto pt-6 border-t border-white/[0.08] w-full flex items-center justify-between text-[11px] font-mono text-mono-400 uppercase tracking-widest font-semibold">
              <span>AUTHENTIC EMBLEM</span>
              <span>SOVEREIGN INVESTIGATION</span>
            </div>

          </div>
        </div>

      </div>

      {/* ── Bottom Authoritative Statement Triad ───────────────────── */}
      <div className="mt-20 pt-10 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs text-mono-500 uppercase tracking-widest block">
              PILLAR I
            </span>
            <p className="font-display font-black text-lg sm:text-xl text-white tracking-tight uppercase">
              Knowledge is the foundation.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-xs text-mono-500 uppercase tracking-widest block">
              PILLAR II
            </span>
            <p className="font-display font-black text-lg sm:text-xl text-white tracking-tight uppercase">
              Discipline is the method.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-xs text-mono-500 uppercase tracking-widest block">
              PILLAR III
            </span>
            <p className="font-display font-black text-lg sm:text-xl text-white tracking-tight uppercase">
              Responsibility is the standard.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
