import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Lock, 
  ChevronRight, 
  Terminal, 
  Award,
  Layers,
  GraduationCap,
  TrendingUp,
  Workflow,
  Search,
  Crosshair,
  ShieldAlert,
  Flame,
  Sparkles,
  Compass
} from 'lucide-react';
import { HeroMasterpiece } from '../components/hero/HeroMasterpiece';
import { CertificatePresentation } from '../components/home/CertificatePresentation';
import { EditorialPlans } from '../components/home/EditorialPlans';
import { PhilosophyProgression } from '../components/home/PhilosophyProgression';
import { InstitutionalBrandStory } from '../components/home/InstitutionalBrandStory';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { GlobalAmbientLighting } from '../components/common/GlobalAmbientLighting';

// ─────────────────────────────────────────────────────────────────────────────
// Home Page — Al Syed Initiative
//
// Alive, high-craft editorial brand homepage:
// 1. HERO (Crowning ADL Front Emblem, Kinetic Headline, 3 Operational Pillars)
// 2. BUILT FOR DISCIPLINED LEARNING (01 About Us · 02 Courses We Provide · 03 Our Message)
// 3. OUR STORY & OUR MISSION (Founded in 2026 // ADL Front · Al Syed) + Authentic Insignia
// 4. WHY LEARNERS CHOOSE US (Flexible structure, Professional instruction, Measured progress)
// 5. HOW YOUR JOURNEY WORKS (3-Step Onboarding Workflow with Watermarks)
// 6. CERTIFICATION / RECOGNITION (Museum-grade authentic certificate format display)
// 7. TRAINING PROGRAM OVERVIEW (Unified Batch IV Curriculum, no SaaS tiers)
// 8. APPROACH / PHILOSOPHY (Interactive 5-stage progression)
// 9. FINAL CTA ("READY TO TAKE YOUR SKILLS FURTHER?")
// ─────────────────────────────────────────────────────────────────────────────

interface HomeProps {
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAuth }) => {
  return (
    <div className="relative min-h-screen bg-[#030303] text-mono-100 overflow-x-hidden font-sans select-none">
      {/* Global Ambient Monochrome Lighting (Cursor Spotlight, Film Grain, Slow Beam Sweep) */}
      <GlobalAmbientLighting />
      
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 01 — HERO SECTION (MINIMAL ARCHITECTURAL BOUNDARY)             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-white/[0.08] bg-[#030303]">
        {/* Subtle Architectural Fine Grid Overlay */}
        <div className="absolute inset-0 bg-grid-fine pointer-events-none opacity-20 z-0" aria-hidden="true" />

        {/* Ambient Silver Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          }}
        />

        {/* Architectural Subtle Vertical Guides */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          <div className="absolute left-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
          <div className="absolute right-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
        </div>

        {/* Masterpiece Hero Architecture */}
        <HeroMasterpiece onOpenAuth={onOpenAuth} />
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 02 — WHAT YOU’RE REALLY HERE TO LEARN                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Section Header */}
          <ScrollReveal className="max-w-4xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                CURRICULUM PURPOSE // WHAT YOU LEARN
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.96] mb-6">
              What you’re really <br className="hidden sm:inline" />
              <span className="text-gradient-silver">here to learn.</span>
            </h2>

            <p className="text-lg sm:text-xl text-mono-200 font-sans leading-relaxed max-w-2xl font-normal">
              A structured approach to cybersecurity education — moving past basic walkthroughs and tool-collecting into systematic investigation and professional methodology.
            </p>
          </ScrollReveal>

          {/* 3 Editorial Blocks (Spacious, typography, numbering, dividers, NOT card-heavy) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-8 border-t border-white/10">
            
            {/* Block 01 */}
            <ScrollReveal delayMs={100} className="space-y-6 group p-6 -m-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:border hover:border-white/15">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-sm font-black text-white tracking-widest">
                  01 //
                </span>
                <span className="text-[11px] font-mono text-mono-400 uppercase tracking-widest font-semibold group-hover:text-mono-200 transition-colors">
                  PERSPECTIVE
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug group-hover:text-mono-100 transition-colors">
                See the bigger picture
              </h3>

              <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed">
                OSINT, reconnaissance, attack-surface mapping and practical security workflows.
              </p>
            </ScrollReveal>

            {/* Block 02 */}
            <ScrollReveal delayMs={250} className="space-y-6 group p-6 -m-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:border hover:border-white/15">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-sm font-black text-white tracking-widest">
                  02 //
                </span>
                <span className="text-[11px] font-mono text-mono-400 uppercase tracking-widest font-semibold group-hover:text-mono-200 transition-colors">
                  METHODOLOGY
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug group-hover:text-mono-100 transition-colors">
                Work the process
              </h3>

              <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed">
                Understand how information is gathered, connected, tested and interpreted.
              </p>
            </ScrollReveal>

            {/* Block 03 */}
            <ScrollReveal delayMs={400} className="space-y-6 group p-6 -m-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02] hover:border hover:border-white/15">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-sm font-black text-white tracking-widest">
                  03 //
                </span>
                <span className="text-[11px] font-mono text-mono-400 uppercase tracking-widest font-semibold group-hover:text-mono-200 transition-colors">
                  MINDSET
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug group-hover:text-mono-100 transition-colors">
                Think beyond the tool
              </h3>

              <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed">
                Develop judgement instead of simply learning which tool or technique to use.
              </p>
            </ScrollReveal>

          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 03 — WHY AL SYED EXISTS (INSTITUTIONAL BRAND STORY)            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <ScrollReveal>
            <InstitutionalBrandStory />
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 04 — THE AL SYED STANDARD (BRAND MANIFESTO)                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <ScrollReveal className="max-w-4xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                BRAND MANIFESTO // OPERATIONAL ETHOS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.96] mb-6">
              The Al Syed <br className="hidden sm:inline" />
              <span className="text-gradient-silver">Standard.</span>
            </h2>

            <p className="text-lg sm:text-xl text-mono-200 font-sans leading-relaxed max-w-2xl font-normal">
              Cybersecurity isn't learned by collecting tools. It's built through curiosity, discipline, and the ability to turn information into understanding.
            </p>
          </ScrollReveal>

          {/* 3 Premium Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 01 — CURIOSITY */}
            <ScrollReveal delayMs={100}>
              <div className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#090909] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
                {/* Giant numeric watermark */}
                <span className="font-mono font-black text-8xl text-white/[0.03] absolute top-4 right-6 pointer-events-none group-hover:text-white/[0.08] transition-colors duration-300">
                  01
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-black tracking-widest text-mono-300 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                      01 // PRINCIPLE
                    </span>
                    
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Search className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-snug mb-4 group-hover:text-mono-100 transition-colors">
                    Curiosity
                  </h3>

                  <p className="text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
                    Ask better questions.
                  </p>
                </div>

                <div className="relative z-10 mt-12 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-mono-200 tracking-wider uppercase font-semibold group-hover:border-white/30 group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    QUESTION EVERYTHING
                  </span>
                  <ArrowRight className="w-4 h-4 text-mono-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200" />
                </div>
              </div>
            </ScrollReveal>

            {/* 02 — DISCIPLINE */}
            <ScrollReveal delayMs={250}>
              <div className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#090909] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
                {/* Giant numeric watermark */}
                <span className="font-mono font-black text-8xl text-white/[0.03] absolute top-4 right-6 pointer-events-none group-hover:text-white/[0.08] transition-colors duration-300">
                  02
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-black tracking-widest text-mono-300 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                      02 // PRINCIPLE
                    </span>
                    
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-snug mb-4 group-hover:text-mono-100 transition-colors">
                    Discipline
                  </h3>

                  <p className="text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
                    Follow the process, not shortcuts.
                  </p>
                </div>

                <div className="relative z-10 mt-12 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-mono-200 tracking-wider uppercase font-semibold group-hover:border-white/30 group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    PROCESS OVER NOISE
                  </span>
                  <ArrowRight className="w-4 h-4 text-mono-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200" />
                </div>
              </div>
            </ScrollReveal>

            {/* 03 — JUDGEMENT */}
            <ScrollReveal delayMs={400}>
              <div className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#090909] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
                {/* Giant numeric watermark */}
                <span className="font-mono font-black text-8xl text-white/[0.03] absolute top-4 right-6 pointer-events-none group-hover:text-white/[0.08] transition-colors duration-300">
                  03
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-black tracking-widest text-mono-300 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                      03 // PRINCIPLE
                    </span>
                    
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Compass className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-snug mb-4 group-hover:text-mono-100 transition-colors">
                    Judgement
                  </h3>

                  <p className="text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
                    Know what the information actually means.
                  </p>
                </div>

                <div className="relative z-10 mt-12 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-mono-200 tracking-wider uppercase font-semibold group-hover:border-white/30 group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    UNDERSTAND BEFORE ACTING
                  </span>
                  <ArrowRight className="w-4 h-4 text-mono-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200" />
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Bottom Micro-Text Line */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-mono-200 tracking-[0.25em] uppercase font-bold">
              <span className="text-white">CURIOSITY</span>
              <span className="text-mono-600">//</span>
              <span className="text-white">DISCIPLINE</span>
              <span className="text-mono-600">//</span>
              <span className="text-white">JUDGEMENT</span>
            </div>

            <div className="text-[11px] font-mono text-mono-500 uppercase tracking-widest font-semibold">
              BRAND MANIFESTO // AL SYED INITIATIVE
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 05 — ONBOARDING: FROM FIRST STEP TO FIELD READY                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#030303] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <ScrollReveal className="max-w-4xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                PRACTICAL ROADMAP // ONBOARDING
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.98] mb-6">
              From first step to <br className="hidden sm:inline" />
              <span className="text-gradient-silver">field ready.</span>
            </h2>

            <p className="text-lg sm:text-xl text-mono-200 font-sans leading-relaxed max-w-2xl font-normal">
              A focused path from structured learning to practical cybersecurity work.
            </p>
          </ScrollReveal>

          {/* 3 Distinctive Editorial Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Stage 01 */}
            <ScrollReveal delayMs={100}>
              <div className="group relative p-8 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
                {/* Subtle watermark */}
                <span className="font-mono font-black text-7xl text-white/[0.03] absolute top-5 right-6 pointer-events-none group-hover:text-white/[0.08] transition-colors duration-300">
                  01
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-black tracking-widest text-mono-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      STAGE 01
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-black font-mono font-black text-sm flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                      1
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug mb-4 group-hover:text-mono-100 transition-colors">
                    Start with the foundations
                  </h3>

                  <p className="text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
                    Build the right understanding before touching advanced workflows.
                  </p>
                </div>

                <div className="relative z-10 mt-10 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-mono-300 tracking-wider uppercase font-semibold group-hover:border-white/25 group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white" />
                    BUILD THE BASE
                  </span>
                  <ArrowRight className="w-4 h-4 text-mono-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </ScrollReveal>

            {/* Stage 02 */}
            <ScrollReveal delayMs={250}>
              <div className="group relative p-8 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
                {/* Subtle watermark */}
                <span className="font-mono font-black text-7xl text-white/[0.03] absolute top-5 right-6 pointer-events-none group-hover:text-white/[0.08] transition-colors duration-300">
                  02
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-black tracking-widest text-mono-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      STAGE 02
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-black font-mono font-black text-sm flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                      2
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug mb-4 group-hover:text-mono-100 transition-colors">
                    Think like an investigator
                  </h3>

                  <p className="text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
                    Learn to observe, question, research, and connect information.
                  </p>
                </div>

                <div className="relative z-10 mt-10 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-mono-300 tracking-wider uppercase font-semibold group-hover:border-white/25 group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white" />
                    DEVELOP THE MINDSET
                  </span>
                  <ArrowRight className="w-4 h-4 text-mono-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </ScrollReveal>

            {/* Stage 03 */}
            <ScrollReveal delayMs={400}>
              <div className="group relative p-8 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
                {/* Subtle watermark */}
                <span className="font-mono font-black text-7xl text-white/[0.03] absolute top-5 right-6 pointer-events-none group-hover:text-white/[0.08] transition-colors duration-300">
                  03
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-black tracking-widest text-mono-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      STAGE 03
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-black font-mono font-black text-sm flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                      3
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug mb-4 group-hover:text-mono-100 transition-colors">
                    Put it into practice
                  </h3>

                  <p className="text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
                    Apply your knowledge through guided practical work and real security scenarios.
                  </p>
                </div>

                <div className="relative z-10 mt-10 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-mono-300 tracking-wider uppercase font-semibold group-hover:border-white/25 group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white" />
                    APPLY THE SKILL
                  </span>
                  <ArrowRight className="w-4 h-4 text-mono-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Bottom Micro-Text Progression Line */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-mono-300 tracking-[0.25em] uppercase font-bold">
              <span className="text-white">LEARN</span>
              <span className="text-mono-600">→</span>
              <span className="text-white">THINK</span>
              <span className="text-mono-600">→</span>
              <span className="text-white">APPLY</span>
            </div>

            <div className="text-[11px] font-mono text-mono-500 uppercase tracking-widest">
              FIELD MATURITY PIPELINE // AL SYED INITIATIVE
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 06 — PROOF OF PROGRESS: CREDENTIAL ARCHIVE                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <ScrollReveal className="max-w-4xl mb-16 lg:mb-20 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                PROOF OF PROGRESS // CREDENTIAL ARCHIVE
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.98] mb-6">
              Progress deserves <br className="hidden sm:inline" />
              <span className="text-gradient-silver">to be remembered.</span>
            </h2>

            <p className="text-lg sm:text-xl text-mono-200 font-sans leading-relaxed max-w-2xl font-normal">
              Every completed program represents time, discipline, and work. Recognition should reflect that journey.
            </p>
          </ScrollReveal>

          {/* Large Museum-Grade Certificate Presentation Component */}
          <ScrollReveal delayMs={150}>
            <CertificatePresentation />
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 07 — TRAINING PROGRAM OVERVIEW SECTION                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <ScrollReveal className="max-w-3xl mb-16 lg:mb-20 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                OUR TRAINING PROGRAM // OVERVIEW
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.05] mb-6">
              Equal, comprehensive access for <br className="hidden sm:inline" />
              <span className="text-gradient-silver">every participant.</span>
            </h2>

            <p className="text-lg sm:text-xl text-mono-200 font-sans leading-relaxed max-w-2xl font-normal">
              No divided tiers or gated features. Every enrolled student receives identical, complete access to our live instructor sessions, investigation toolkits, doubt clearing support, and official certificate.
            </p>
          </ScrollReveal>

          {/* Unified Training Program Component */}
          <ScrollReveal delayMs={150}>
            <EditorialPlans onSelectPlan={() => onOpenAuth('signup')} />
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 08 — APPROACH / PHILOSOPHY SECTION                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="approach" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <PhilosophyProgression />
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 09 — FINAL CTA SECTION                                          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 sm:py-36 bg-[#060606] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-fine opacity-25 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <ScrollReveal className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                JOIN AL SYED INITIATIVE
              </span>
            </div>

            {/* Large Monumental Typography Headline */}
            <h2
              className="font-display font-black text-white tracking-tight uppercase leading-[0.95] mb-8"
              style={{
                fontSize: 'clamp(3rem, 6.5vw, 5.8rem)',
                letterSpacing: '-0.04em',
              }}
            >
              Ready to take <br />
              <span className="text-gradient-silver">your skills further?</span>
            </h2>

            <p className="text-lg sm:text-xl text-mono-200 font-sans max-w-2xl leading-relaxed mb-10 font-normal">
              Explore the Al Syed Initiative and find a learning path built around practical cybersecurity knowledge.
            </p>

            {/* CTA Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenAuth('signup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 hover:bg-mono-100 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.35)] active:scale-[0.98]"
              >
                <span>ENROLL IN BATCH IV</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-white font-semibold text-xs tracking-wider uppercase rounded-xl border border-white/20 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/[0.1] active:scale-[0.98]"
                >
                  SPEAK WITH ADMISSIONS
                </button>
              </Link>
            </div>

            {/* Bottom Architectural Register Mark */}
            <div className="mt-20 pt-8 border-t border-white/[0.08] w-full max-w-xl flex items-center justify-between text-[11px] font-mono text-mono-400 uppercase tracking-widest font-semibold">
              <span>AL SYED INITIATIVE // ADL FRONT</span>
              <span>SECURE LEARNING ARCHITECTURE</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};
