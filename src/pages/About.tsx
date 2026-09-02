import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Search, 
  Share2, 
  FileCheck, 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';

export const About: React.FC = () => {
  return (
    <PageContainer>
      <div className="max-w-5xl mx-auto text-left select-none pb-24">
        
        {/* ═════════════════════════════════════════════════════════════
            01 — HERO HEADER
        ═════════════════════════════════════════════════════════════ */}
        <header className="pt-6 pb-20 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 font-bold">
              ABOUT AL SYED INITIATIVE
            </span>
            <span className="text-mono-600">·</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono text-white tracking-wider uppercase font-semibold">
              PRACTICAL OSINT TRAINING
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[1.02] mb-8">
            Learn to investigate. <br />
            <span className="text-gradient-silver">Learn to understand.</span>
          </h1>

          <div className="max-w-3xl space-y-4">
            <p className="text-xl sm:text-2xl text-white font-sans font-medium leading-relaxed">
              Al Syed Initiative is a practical cybersecurity training platform focused on Open-Source Intelligence (OSINT).
            </p>
            <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed">
              Our training is built around the skills that matter beyond individual tools — finding information, connecting evidence, analysing digital footprints, and documenting findings with clarity and responsibility.
            </p>
          </div>
        </header>

        {/* ═════════════════════════════════════════════════════════════
            02 — WHAT WE FOCUS ON
        ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 block mb-3 font-bold">
              CORE CAPABILITIES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              WHAT WE FOCUS ON
            </h2>
            <p className="text-lg text-white font-sans leading-relaxed">
              OSINT is more than searching the internet.
            </p>
            <p className="text-base text-mono-300 font-sans leading-relaxed mt-2">
              It is the ability to turn publicly available information into meaningful, well-supported findings.
            </p>
            <p className="text-xs font-mono text-mono-400 tracking-wider uppercase mt-4">
              Our approach focuses on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 01 / DISCOVERY */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-mono-400 tracking-widest block mb-4">
                  01 / DISCOVERY
                </span>
                <p className="text-base text-mono-200 font-sans leading-relaxed">
                  Learn how to find relevant information across publicly available sources and recognise what deserves closer attention.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-mono-400">
                <Search className="w-3.5 h-3.5 text-white" />
                <span>SURFACE DETECTION</span>
              </div>
            </div>

            {/* 02 / ANALYSIS */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-mono-400 tracking-widest block mb-4">
                  02 / ANALYSIS
                </span>
                <p className="text-base text-mono-200 font-sans leading-relaxed">
                  Connect information, identify relationships and patterns, and understand what individual pieces of evidence actually mean.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-mono-400">
                <Share2 className="w-3.5 h-3.5 text-white" />
                <span>ENTITY CORRELATION</span>
              </div>
            </div>

            {/* 03 / DOCUMENTATION */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-mono-400 tracking-widest block mb-4">
                  03 / DOCUMENTATION
                </span>
                <p className="text-base text-mono-200 font-sans leading-relaxed">
                  Organise findings clearly, verify sources, and communicate conclusions in a structured and responsible way.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-mono-400">
                <FileCheck className="w-3.5 h-3.5 text-white" />
                <span>AUDITABLE REPORTS</span>
              </div>
            </div>

          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            03 — WHY AL SYED EXISTS
        ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 block font-bold">
                INSTITUTIONAL PURPOSE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
                WHY AL SYED EXISTS
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
                <p>
                  The internet contains an enormous amount of information.
                </p>
                <p className="text-white font-medium">
                  The difficult part is not finding more of it. <br />
                  The difficult part is knowing what matters.
                </p>
                <p className="text-mono-300">
                  Al Syed Initiative was created to make OSINT learning more structured and practical — helping learners move beyond random searches and isolated tools towards a repeatable investigation process.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#090909] border border-white/15 space-y-6 shadow-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-mono-400 font-bold block">
                OUR FOCUS IS SIMPLE:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-display font-black text-xl text-white tracking-wider">
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>OBSERVE.</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>INVESTIGATE.</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>VERIFY.</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>DOCUMENT.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            04 — HOW WE TEACH
        ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 border-b border-white/10">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 block mb-3 font-bold">
              PEDAGOGICAL METHODOLOGY
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              HOW WE TEACH
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* 1. THINK BEFORE YOU SEARCH */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                THINK BEFORE YOU SEARCH
              </h3>
              <p className="text-white font-medium text-base mb-2">
                Good investigation begins with a question.
              </p>
              <p className="text-mono-300 text-sm sm:text-base leading-relaxed">
                Learners are encouraged to define the objective, understand the context, and approach each investigation with a clear methodology.
              </p>
            </div>

            {/* 2. FOLLOW THE EVIDENCE */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                FOLLOW THE EVIDENCE
              </h3>
              <p className="text-white font-medium text-base mb-2">
                Information becomes useful when it can be connected and verified.
              </p>
              <p className="text-mono-300 text-sm sm:text-base leading-relaxed">
                Our training emphasises source awareness, correlation, research discipline and careful interpretation.
              </p>
            </div>

            {/* 3. DOCUMENT THE FINDING */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                DOCUMENT THE FINDING
              </h3>
              <p className="text-white font-medium text-base mb-2">
                A discovery is only as useful as the way it is communicated.
              </p>
              <p className="text-mono-300 text-sm sm:text-base leading-relaxed">
                Learners develop habits around organising evidence, recording sources and presenting findings clearly.
              </p>
            </div>

          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            05 — OUR TRAINING PRINCIPLES
        ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 border-b border-white/10">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 block mb-3 font-bold">
              FOUNDATIONAL ETHOS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              OUR TRAINING PRINCIPLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 01 / CURIOSITY */}
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/25 transition-all">
              <span className="text-xs font-mono font-bold text-mono-400 tracking-widest block mb-3">
                01 / CURIOSITY
              </span>
              <p className="text-lg text-white font-sans font-medium leading-relaxed">
                Ask better questions before looking for answers.
              </p>
            </div>

            {/* 02 / DISCIPLINE */}
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/25 transition-all">
              <span className="text-xs font-mono font-bold text-mono-400 tracking-widest block mb-3">
                02 / DISCIPLINE
              </span>
              <p className="text-lg text-white font-sans font-medium leading-relaxed">
                Follow a repeatable process instead of relying on shortcuts.
              </p>
            </div>

            {/* 03 / RESPONSIBILITY */}
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/25 transition-all">
              <span className="text-xs font-mono font-bold text-mono-400 tracking-widest block mb-3">
                03 / RESPONSIBILITY
              </span>
              <p className="text-lg text-white font-sans font-medium leading-relaxed">
                Investigate within legal and ethical boundaries and understand the impact of the information you handle.
              </p>
            </div>

          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            06 — THE AL SYED JOURNEY
        ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 block mb-3 font-bold">
              INVESTIGATIVE WORKFLOW
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              THE AL SYED JOURNEY
            </h2>
            <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed">
              From the first question to a documented finding.
            </p>
          </div>

          {/* Workflow Sequence */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#060606] border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-2 items-center text-center font-display font-black text-sm sm:text-base tracking-wider text-white">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                QUESTION
              </div>
              <div className="text-mono-500 font-mono text-xs font-bold py-1 sm:py-0">
                <span className="hidden sm:inline">→</span>
                <span className="sm:hidden">↓</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                SEARCH
              </div>
              <div className="text-mono-500 font-mono text-xs font-bold py-1 sm:py-0">
                <span className="hidden sm:inline">→</span>
                <span className="sm:hidden">↓</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                CONNECT
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-2 items-center text-center font-display font-black text-sm sm:text-base tracking-wider text-white mt-3 sm:mt-4">
              <div className="hidden sm:block col-span-1" />
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 sm:col-span-1">
                VERIFY
              </div>
              <div className="text-mono-500 font-mono text-xs font-bold py-1 sm:py-0">
                <span className="hidden sm:inline">→</span>
                <span className="sm:hidden">↓</span>
              </div>
              <div className="p-4 rounded-xl bg-white text-black sm:col-span-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                DOCUMENT
              </div>
              <div className="hidden sm:block col-span-1" />
            </div>

            <p className="mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm font-mono text-mono-400 text-center">
              This is the workflow we want learners to understand — not simply a collection of tools to memorise.
            </p>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            07 — BUILT THROUGH PRACTICE (BATCHES & HALL OF FAME)
        ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 block mb-3 font-bold">
              VERIFIED TRACK RECORD
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              BUILT THROUGH PRACTICE
            </h2>
            <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed">
              The Al Syed Initiative has conducted multiple OSINT Professional Training Program batches, bringing learners through structured, instructor-led training and practical investigation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="font-display font-black text-xl text-white uppercase block mb-1">
                BATCH I
              </span>
              <span className="font-mono text-xs text-mono-400 uppercase tracking-widest">
                CERTIFIED STUDENTS
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="font-display font-black text-xl text-white uppercase block mb-1">
                BATCH II
              </span>
              <span className="font-mono text-xs text-mono-400 uppercase tracking-widest">
                CERTIFIED STUDENTS
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="font-display font-black text-xl text-white uppercase block mb-1">
                BATCH III
              </span>
              <span className="font-mono text-xs text-mono-400 uppercase tracking-widest">
                CERTIFIED STUDENTS
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#090909] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-mono-300 font-sans">
              Explore the Hall of Fame to see the certified students who completed the journey.
            </p>
            <Link
              to="/hall-of-fame"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-mono-100 transition-all shrink-0"
            >
              <Award className="w-4 h-4" />
              <span>Hall of Fame →</span>
            </Link>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            08 — OUR PURPOSE
        ═════════════════════════════════════════════════════════════ */}
        <section className="py-20 border-b border-white/10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-mono-400 block mb-3 font-bold">
            MISSION STATEMENT
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-6">
            OUR PURPOSE
          </h2>
          <p className="text-xl sm:text-2xl text-white font-sans font-medium leading-relaxed max-w-4xl">
            To help people develop the knowledge, investigative thinking and responsible practices needed to navigate publicly available information with clarity and confidence.
          </p>
        </section>

        {/* ═════════════════════════════════════════════════════════════
            09 — CALL TO ACTION
        ═════════════════════════════════════════════════════════════ */}
        <section className="pt-20">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/15 text-center flex flex-col items-center">
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-3">
              READY TO START YOUR OSINT JOURNEY?
            </h3>
            <p className="text-base sm:text-lg text-mono-300 font-sans mb-8 max-w-xl">
              Explore the OSINT Professional Training Program.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-mono-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95"
            >
              <span>VIEW PROGRAMS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </PageContainer>
  );
};

export default About;
