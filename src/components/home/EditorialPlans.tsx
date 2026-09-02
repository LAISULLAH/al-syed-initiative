import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Video, 
  Clock, 
  Wrench, 
  MessageSquare, 
  Award, 
  Sparkles, 
  Search, 
  Terminal, 
  Layers, 
  Cpu, 
  Lock,
  ChevronRight,
  Radar,
  Radio,
  Activity,
  Zap
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// EditorialPlans — Alive, Kinetic & High-Tech OSINT Flagship Program Section
//
// Dynamic "Never Dead" Features:
// - Live Operational Telemetry Feed with real-time status pulses
// - Interactive Live Investigator Terminal that updates as you switch phases
// - Animated Scanning Laser Horizon and glowing node connection lines
// - Luminous Hover Aura & Kinetic Feedback on every card
// - Real Verified Batch IV Enrollment Pipeline & WhatsApp Instant Dispatch
// ─────────────────────────────────────────────────────────────────────────────

interface EditorialPlansProps {
  onSelectPlan?: (planId: string) => void;
}

interface CurriculumPhase {
  number: string;
  tag: string;
  title: string;
  duration: string;
  focus: string;
  skills: string[];
  terminalLog: {
    command: string;
    output: string[];
    telemetry: string;
  };
}

const CURRICULUM_PHASES: CurriculumPhase[] = [
  {
    number: '01',
    tag: 'PHASE 01 // FOUNDATIONS',
    title: 'Digital Footprints & OPSEC Hardening',
    duration: 'Weeks 1 — 3',
    focus: 'Establishing bulletproof operational security and investigative hygiene before touching target reconnaissance.',
    skills: [
      'Isolated Browser Profiles & Anti-Fingerprinting',
      'Sock Puppet Creation & Account Compartmentalization',
      'Advanced Search Engine Dorking Heuristics',
      'Surface Footprint Sanitization & Metadata Scrubbing'
    ],
    terminalLog: {
      command: 'alsyed-opsec --init-sandbox --stealth-level=max',
      output: [
        '✔ Virtual sandbox initialized (isolated environment)',
        '✔ Canvas fingerprinting masked · WebRTC leak patched',
        '✔ Operational profile compartmentalized into Tier-1 silo',
        '✔ Telemetry baseline established: 0.00% target footprint'
      ],
      telemetry: 'OPSEC STATUS: ENCRYPTED & ISOLATED'
    }
  },
  {
    number: '02',
    tag: 'PHASE 02 // RECONNAISSANCE',
    title: 'Entity Intelligence & SOCMINT Deep-Dive',
    duration: 'Weeks 4 — 6',
    focus: 'Extracting actionable intelligence from digital identities, social graphs, and cross-platform footprints.',
    skills: [
      'Username Permutation & Profile Cross-Graphing',
      'Email & Phone Number Reverse Resolution',
      'Telegram, Discord & Dark Web Channel Intelligence',
      'Breach Metadata & Identity Pivot Analysis'
    ],
    terminalLog: {
      command: 'alsyed-recon --target-entity --cross-graph --deep',
      output: [
        '✔ Correlating 14 social network identifiers across graphs',
        '✔ Reverse phone resolution linked to regional carrier gateway',
        '✔ Breach archive pivot identified matching crypt-hash',
        '✔ Target entity map constructed with 94.6% correlation confidence'
      ],
      telemetry: 'SOCMINT RESOLUTION: COMPLETE'
    }
  },
  {
    number: '03',
    tag: 'PHASE 03 // GEOSPATIAL',
    title: 'GEOINT, IMINT & Chronolocation',
    duration: 'Weeks 7 — 9',
    focus: 'Pinpointing exact physical locations and capture timestamps from raw unstructured imagery, videos, and environmental cues.',
    skills: [
      'Satellite Imagery & Landmark Triangulation',
      'Sun Shadow Azimuth Geometry & Chronolocation',
      'EXIF, Compression Forensics & Sensor Artifacts',
      'Deepfake & Manipulated Media Spectral Analysis'
    ],
    terminalLog: {
      command: 'alsyed-geoint --triangulate --shadow-azimuth --calc-time',
      output: [
        '✔ Horizon landmark vectors extracted from 4k video frame',
        '✔ Sun elevation: 34.2° | Azimuth: 142.8° -> Timestamp: 14:22:10 UTC',
        '✔ Digital elevation model matched with satellite raster imagery',
        '✔ Geographic coordinates verified: 33.8938° N, 35.5018° E'
      ],
      telemetry: 'GEOINT ACCURACY: RADIUS < 15 METERS'
    }
  },
  {
    number: '04',
    tag: 'PHASE 04 // CAPSTONE',
    title: 'Evidence Dossiers & Legal Verification',
    duration: 'Weeks 10 — 12',
    focus: 'Synthesizing investigative findings into admissible legal briefs and structured evidentiary dossiers.',
    skills: [
      'Digital Chain-of-Custody & Timestamp Hashing',
      'Coordinated Disinformation Campaign Attribution',
      'Formal Court-Ready Evidentiary Dossier Authoring',
      'Final Capstone Defense & Hall of Fame Induction'
    ],
    terminalLog: {
      command: 'alsyed-dossier --compile --sign --verify-custody',
      output: [
        '✔ Cryptographic SHA-256 evidence tree finalized & timestamped',
        '✔ Influence network topology rendered (nodes: 1,420, edges: 8,910)',
        '✔ Evidentiary brief compiled conforming to forensic standards',
        '✔ Candidate approved for official Al Syed Initiative Certification'
      ],
      telemetry: 'CHAIN OF CUSTODY: CRYPTOGRAPHICALLY SEALED'
    }
  }
];

const PROGRAM_INCLUSIONS = [
  {
    icon: Video,
    tag: 'LIVE DRILLS',
    title: 'Live Instructor Masterclasses',
    desc: 'Weekly mentor-guided sessions featuring real-time case breakdown, live investigation demonstrations, and practical student drills.'
  },
  {
    icon: Clock,
    tag: 'UNLIMITED VAULT',
    title: 'Lifetime Recording Archive',
    desc: 'Unrestricted on-demand access to all high-definition recordings, reference decks, and technique breakdowns to study at your own pace.'
  },
  {
    icon: Wrench,
    tag: 'TOOLKIT',
    title: 'Curated OSINT Toolkit & Workflows',
    desc: 'Proprietary investigation checklists, script repositories, custom search scrapers, and operational security guidelines.'
  },
  {
    icon: MessageSquare,
    tag: '1:1 DESK',
    title: 'Direct Mentor Doubt Support',
    desc: 'Direct communication channels with lead investigators for guidance on difficult case scenarios, tooling errors, and technique refinement.'
  },
  {
    icon: ShieldCheck,
    tag: 'CASE FILES',
    title: 'Real Synthetic Case Dossiers',
    desc: 'Simulated real-world forensic investigations requiring cross-platform pivot analysis, geolocating assets, and building complete profiles.'
  },
  {
    icon: Award,
    tag: 'HALL OF FAME',
    title: 'Official Certified Credential',
    desc: 'Cryptographically verifiable completion certificate awarded upon capstone submission, recorded into the official Al Syed Hall of Fame.'
  }
];

export const EditorialPlans: React.FC<EditorialPlansProps> = ({ onSelectPlan }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [terminalFlicker, setTerminalFlicker] = useState(false);

  // Trigger brief terminal command refresh flicker when switching phases
  useEffect(() => {
    setTerminalFlicker(true);
    const timer = setTimeout(() => setTerminalFlicker(false), 200);
    return () => clearTimeout(timer);
  }, [activePhaseIndex]);

  const currentPhase = CURRICULUM_PHASES[activePhaseIndex];

  return (
    <div className="w-full space-y-16 select-none text-left">
      
      {/* ── 1. The Monumental Master Program Card ─────────────────── */}
      <div className="relative rounded-3xl bg-[#060606] border border-white/20 p-6 sm:p-10 lg:p-14 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Subtle Architectural Fine Grid Overlay */}
        <div className="absolute inset-0 bg-grid-fine opacity-25 pointer-events-none" />

        {/* Animated Scanning Laser Beam across top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none animate-pulse" />

        {/* Ambient Silver Backlight */}
        <div
          className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />

        {/* ── Top Header Section: Live Operational HUD ─────────────── */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-8">
          <div className="space-y-4 max-w-3xl">
            
            {/* Pulsing Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/25 text-xs font-mono text-white uppercase tracking-widest font-bold backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span>LIVE COHORT PIPELINE // BATCH IV SYLLABUS</span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[1.02]">
              OSINT Professional <br className="hidden sm:inline" />
              <span className="text-gradient-silver">Training Program.</span>
            </h3>

            <p className="text-base sm:text-lg text-mono-200 font-sans leading-relaxed">
              A structured, 12-week comprehensive investigative academy teaching real-world open-source intelligence, identity attribution, geospatial triangulation, and ethical digital forensics.
            </p>
          </div>

          {/* Action & Status Capsule */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/30 text-xs font-mono text-white uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(255,255,255,0.12)]">
              <Activity className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>BATCH IV · ADMISSIONS OPENING SOON</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onSelectPlan && onSelectPlan('batch-4')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 hover:bg-mono-100 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.45)] active:scale-[0.98] cursor-pointer"
              >
                <span>INQUIRE FOR BATCH IV</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919970875040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-white/40 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all active:scale-[0.98]"
              >
                <span>WHATSAPP DESK</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Cohort Telemetry HUD Bar (Live Statistics) ───────────── */}
        <div className="relative z-10 py-6 border-b border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] uppercase tracking-widest text-mono-400 block mb-1">
              PROGRAM DURATION
            </span>
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-mono-400" />
              <span>12 WEEKS INTENSIVE</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] uppercase tracking-widest text-mono-400 block mb-1">
              INSTRUCTION FORMAT
            </span>
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-mono-400" />
              <span>LIVE SESSIONS + ON-DEMAND</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] uppercase tracking-widest text-mono-400 block mb-1">
              PREREQUISITES
            </span>
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-mono-400" />
              <span>NONE (ZERO TO ADVANCED)</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] uppercase tracking-widest text-mono-400 block mb-1">
              CREDENTIAL STATUS
            </span>
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>OFFICIAL CERTIFICATION</span>
            </span>
          </div>
        </div>

        {/* ── 2. Interactive Curriculum Roadmap + Live Terminal ────── */}
        <div className="relative z-10 pt-10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>CURRICULUM ROADMAP // 4 STRUCTURED PHASES</span>
            </span>
            <span className="text-xs font-mono text-mono-400">
              Select a phase to simulate live terminal investigative readout
            </span>
          </div>

          {/* Phase Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {CURRICULUM_PHASES.map((phase, idx) => {
              const active = activePhaseIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                    active
                      ? 'border-white bg-white/[0.08] shadow-[0_0_25px_rgba(255,255,255,0.12)] -translate-y-1'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Top Active Indicator Beam */}
                  {active && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_white]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${active ? 'text-white' : 'text-mono-500'}`}>
                      {phase.number}
                    </span>
                    <span className="text-[10px] font-mono text-mono-400">
                      {phase.duration}
                    </span>
                  </div>

                  <h4 className={`font-display text-sm font-bold tracking-tight uppercase leading-snug transition-colors ${
                    active ? 'text-white' : 'text-mono-300 group-hover:text-white'
                  }`}>
                    {phase.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Breakdown + Live Investigator Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left 7 Cols: Phase Overview & Core Skills */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/15 flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-mono-400 font-bold">
                    {currentPhase.tag} · {currentPhase.duration}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-white/[0.06] text-white px-2.5 py-0.5 rounded border border-white/15">
                    CORE SYLLABUS
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                  {currentPhase.title}
                </h3>

                <p className="text-sm text-mono-300 font-sans leading-relaxed mb-6">
                  {currentPhase.focus}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPhase.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="text-xs text-mono-200 font-sans font-medium leading-tight">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-mono-400">
                <span>INSTRUCTOR GUIDED DRILLS</span>
                <span className="text-white font-bold">WEEKS INCLUDED</span>
              </div>
            </div>

            {/* Right 5 Cols: Live Operational Terminal Preview */}
            <div className="lg:col-span-5 rounded-2xl bg-[#030303] border border-white/20 p-5 font-mono text-xs flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
                    <span className="text-[10px] uppercase tracking-widest text-mono-400 ml-2 font-semibold">
                      AL SYED // INVESTIGATOR WORKFLOW
                    </span>
                  </div>
                  <Terminal className="w-4 h-4 text-mono-400" />
                </div>

                {/* Command Line */}
                <div className={`space-y-3 transition-opacity duration-200 overflow-x-auto ${terminalFlicker ? 'opacity-30' : 'opacity-100'}`}>
                  <div className="flex items-center gap-2 text-mono-300 whitespace-nowrap">
                    <span className="text-white font-bold">$</span>
                    <span className="text-white font-semibold">{currentPhase.terminalLog.command}</span>
                  </div>

                  {/* Output lines */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.06] whitespace-nowrap sm:whitespace-normal break-words">
                    {currentPhase.terminalLog.output.map((line, lIdx) => (
                      <div key={lIdx} className="text-mono-300 text-[11px] leading-relaxed flex items-start gap-1.5">
                        <span className="text-mono-500 shrink-0">&gt;</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Status Pill */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-mono-400 font-bold uppercase tracking-wider">
                  {currentPhase.terminalLog.telemetry}
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>ONLINE</span>
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ── 3. Six Core Program Inclusions (Kinetic Glass Cards) ─── */}
        <div className="relative z-10 mt-14 pt-10 border-t border-white/10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white font-bold">
              WHAT EVERY ENROLLED PARTICIPANT RECEIVES (FULL INCLUSIVE ACCESS)
            </span>
            <span className="text-xs font-mono text-mono-400">
              Zero tier gates · Complete identical access for all students
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_INCLUSIONS.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="group p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/35 hover:bg-white/[0.05] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-mono-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight mb-2.5 group-hover:text-mono-100 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-mono-300 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-mono-400">
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-mono-300">
                      INCLUDED WITH ENROLLMENT
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
