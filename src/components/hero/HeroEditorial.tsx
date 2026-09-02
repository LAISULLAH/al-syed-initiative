import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Fingerprint, 
  Award, 
  Terminal, 
  Lock, 
  Database, 
  Hash, 
  FileText,
  Shield,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { useReducedMotion } from '../../hooks';

interface StageConfig {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  icon: React.ElementType;
}

const STAGES: StageConfig[] = [
  {
    id: 'recon',
    step: '01',
    title: 'OSINT & RECONNAISSANCE',
    subtitle: 'Target Profiling & Footprints',
    badge: 'STAGE 01 // RECON',
    summary: 'Analyze digital footprints, map external attack surfaces, and investigate online identities using passive open-source intelligence.',
    icon: Globe,
  },
  {
    id: 'testing',
    step: '02',
    title: 'WEB APP TESTING & LIVE CLASSES',
    subtitle: 'Structured Methodology',
    badge: 'STAGE 02 // WORKFLOWS',
    summary: 'Apply structured testing methodology to test, validate, and document findings with weekly Friday–Sunday instructor-led live classes.',
    icon: Terminal,
  },
  {
    id: 'cert',
    step: '03',
    title: 'CERTIFICATE & RECOGNITION',
    subtitle: 'Official Certificate of Excellence',
    badge: 'STAGE 03 // ACHIEVEMENT',
    summary: 'Receive an official Certificate of Excellence recording recipient name, completion date, and authorized recognition of achievement.',
    icon: Award,
  },
];

export const HeroEditorial: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 4600);
    return () => clearInterval(timer);
  }, [isHovered, reducedMotion]);

  const currentStage = STAGES[activeStage];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-3xl bg-[#080808] border border-white/15 p-5 sm:p-7 md:p-8 backdrop-blur-2xl shadow-[0_25px_70px_-20px_rgba(0,0,0,0.95)] overflow-hidden select-none transition-all duration-300 hover:border-white/30"
      aria-label="Interactive OSINT and Testing Deck"
    >
      <div className="absolute inset-0 bg-grid-fine opacity-50 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between pb-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
            <Shield className="w-4 h-4 text-mono-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white uppercase font-bold">
                AL SYED LEARNING ECOSYSTEM
              </span>
            </div>
            <p className="text-[11px] text-mono-400 font-mono mt-0.5">
              Clean, Focused Course Progression
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-mono-400">
          <Lock className="w-3 h-3 text-mono-400" />
          <span>CONTROLLED ACCESS LMS</span>
        </div>
      </div>

            <div className="relative z-10 grid grid-cols-3 gap-2 my-5">
        {STAGES.map((stage, idx) => {
          const isActive = activeStage === idx;
          const Icon = stage.icon;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 relative ${
                isActive
                  ? 'bg-white text-black border-white shadow-md'
                  : 'bg-white/[0.02] border-white/[0.06] text-mono-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`font-mono text-[9px] font-bold tracking-widest ${isActive ? 'text-black' : 'text-mono-500'}`}>
                  {stage.step}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-mono-400'}`} />
              </div>
              <p className={`text-[10px] sm:text-[11px] font-bold leading-tight uppercase font-display truncate ${isActive ? 'text-black' : 'text-mono-200'}`}>
                {stage.title.split(' ')[0]}
              </p>
            </button>
          );
        })}
      </div>

            <div className="relative z-10 rounded-2xl bg-[#0c0c0c] border border-white/10 p-4 sm:p-5 overflow-hidden transition-all duration-300">
        
        {activeStage === 0 && (
          <div className="space-y-3.5 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs font-mono">
              <span className="text-mono-400 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-mono-400" />
                <span>OSINT: TARGET RECONNAISSANCE</span>
              </span>
              <span className="text-white font-semibold text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded">
                Passive Footprints
              </span>
            </div>

            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <span className="text-mono-400">Target Profiling</span>
                <span className="text-white font-medium">Digital Footprint Mapping</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <span className="text-mono-400">Attack Surface Mapping</span>
                <span className="text-mono-200">DNS & External Asset Analysis</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <span className="text-mono-400">Online Identities</span>
                <span className="text-mono-200">Cross-Platform Investigation</span>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-mono-500">
              <span>Method: Passive Recon</span>
              <span className="text-white font-medium">Clean, Repeatable Process</span>
            </div>
          </div>
        )}

        {activeStage === 1 && (
          <div className="space-y-3.5 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs font-mono">
              <span className="text-mono-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-mono-400" />
                <span>LIVE COHORT: FRIDAY, SATURDAY, SUNDAY</span>
              </span>
              <span className="text-white font-semibold text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded">
                60 Min Sessions
              </span>
            </div>

            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-mono-300">Live Instructor-Led Classes</span>
                </div>
                <span className="text-mono-400">Real-Time Expert Guidance</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-mono-300">Live Broadcast Chat Room</span>
                </div>
                <span className="text-mono-400">Instant Doubt Clearing</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-mono-300">Structured Pentesting</span>
                </div>
                <span className="text-mono-400">Test, Validate & Document</span>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-mono-500">
              <span>Lifetime Recorded Access</span>
              <span className="text-white font-medium">24x7 Team Support</span>
            </div>
          </div>
        )}

        {activeStage === 2 && (
          <div className="space-y-3 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs font-mono">
              <span className="text-mono-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-mono-400" />
                <span>OFFICIAL CERTIFICATE FORMAT</span>
              </span>
              <span className="text-white font-semibold text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-tight font-display">
                    Certificate of Excellence
                  </p>
                  <p className="text-[10px] font-mono text-mono-400">
                    Al Syed Initiative — Cybersecurity Platform
                  </p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white text-black font-mono font-bold text-xs flex items-center justify-center">
                  ASI
                </div>
              </div>
              <div className="pt-2 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[10px] font-mono text-mono-400">
                <div>
                  <span className="text-mono-500 block">Recipient:</span>
                  <span className="text-white">Personalized Name</span>
                </div>
                <div>
                  <span className="text-mono-500 block">Authorization:</span>
                  <span className="text-white">Official Signature</span>
                </div>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-mono-500">
              <span>Recognition Designed to Carry Forward</span>
              <span className="text-white font-medium">Hall of Fame</span>
            </div>
          </div>
        )}
      </div>

            <div className="relative z-10 mt-5 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-[10px] text-mono-400 uppercase tracking-widest font-bold">
            {currentStage.badge}
          </span>
          <span className="text-mono-600">·</span>
          <span className="text-xs font-medium text-white">
            {currentStage.subtitle}
          </span>
        </div>
        <p className="text-xs text-mono-300 leading-relaxed font-normal">
          {currentStage.summary}
        </p>
      </div>

            <div className="relative z-10 mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-mono-500">
        <span className="uppercase tracking-wider">
          Al syed Initiative
        </span>
        <span className="text-mono-400 font-medium">
          Method · Evidence · Responsible Practice
        </span>
      </div>
    </div>
  );
};
