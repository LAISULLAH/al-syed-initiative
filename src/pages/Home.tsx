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

interface HomeProps {
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAuth }) => {
  return (
    <div className="relative min-h-screen bg-[#000000] text-mono-100 overflow-x-hidden font-sans select-none">
      <div className="floating-bg-blob blob-1" aria-hidden="true" />
      <div className="floating-bg-blob blob-2" aria-hidden="true" />
      <GlobalAmbientLighting />
      
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-white/[0.08] bg-[#000000]">
        <div className="absolute inset-0 portfolio-grid-bg opacity-30 pointer-events-none z-0" aria-hidden="true" />

        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          }}
        />

        <HeroMasterpiece onOpenAuth={onOpenAuth} />
      </section>

      <section id="divisions" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0 portfolio-grid-bg opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <ScrollReveal className="max-w-4xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                OPERATIONAL WINGS // ADL FRONT DIVISIONS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.94] mb-6">
              Specialized Divisions. <br className="hidden sm:inline" />
              <span className="text-gradient-silver">Integrated Intelligence.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#86868b] font-sans leading-relaxed max-w-2xl font-normal">
              Structured operational methodology applied to cyber defense, threat intelligence, and evidence synthesis across four specialized divisions.
            </p>
          </ScrollReveal>

          <div className="space-y-6 sm:space-y-8">
            <ScrollReveal delayMs={0}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-10 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-all duration-300">
                <div className="lg:col-span-1">
                  <span className="font-mono font-black text-3xl sm:text-4xl text-white/30">
                    01
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[11px] font-mono text-[#86868b] uppercase tracking-widest font-bold mb-2">
                    DIVISION 01 // RECONNAISSANCE
                  </p>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    Cyber Reconnaissance & Threat Wing
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-mono-300 leading-relaxed font-sans mb-4">
                    Passive attack-surface telemetry, autonomous infrastructure correlation, domain exposures, and network mapping strictly within lawful open-source intelligence boundaries.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Passive OSINT
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Attack Surface
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Infrastructure Telemetry
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <Link to="/courses" className="link-block-montfort">
                    <ArrowRight className="w-3.5 h-3.5 arrow-left text-white" />
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5 arrow-right text-white" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={60}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-10 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-all duration-300">
                <div className="lg:col-span-1">
                  <span className="font-mono font-black text-3xl sm:text-4xl text-white/30">
                    02
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[11px] font-mono text-[#86868b] uppercase tracking-widest font-bold mb-2">
                    DIVISION 02 // SOCMINT
                  </p>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    Digital Lawforce & Persona Profiling
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-mono-300 leading-relaxed font-sans mb-4">
                    Persona unmasking across messaging channels, multi-platform footprint correlation, and digital identity mapping across open networks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Persona Tracing
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      SOCMINT
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Ecosystem Mapping
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <Link to="/courses" className="link-block-montfort">
                    <ArrowRight className="w-3.5 h-3.5 arrow-left text-white" />
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5 arrow-right text-white" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={120}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-10 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-all duration-300">
                <div className="lg:col-span-1">
                  <span className="font-mono font-black text-3xl sm:text-4xl text-white/30">
                    03
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[11px] font-mono text-[#86868b] uppercase tracking-widest font-bold mb-2">
                    DIVISION 03 // EVIDENCE SYNTHESIS
                  </p>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    Tactical Dossier & Evidence Synthesis
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-mono-300 leading-relaxed font-sans mb-4">
                    Transforming raw intelligence telemetry into court-grade investigative dossiers, maintaining unbroken chain of custody, and formal legal reporting.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Legal Dossiers
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Chain of Custody
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Admissible Proof
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <Link to="/courses" className="link-block-montfort">
                    <ArrowRight className="w-3.5 h-3.5 arrow-left text-white" />
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5 arrow-right text-white" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={180}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-10 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-all duration-300">
                <div className="lg:col-span-1">
                  <span className="font-mono font-black text-3xl sm:text-4xl text-white/30">
                    04
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[11px] font-mono text-[#86868b] uppercase tracking-widest font-bold mb-2">
                    DIVISION 04 // PUBLIC ACCOUNTABILITY
                  </p>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    Anti-Disinformation & Civic Defense
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-mono-300 leading-relaxed font-sans mb-4">
                    Tracking coordinated influence networks, astroturfing campaigns, and malicious cyber threats against human rights and public interest institutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Influence Operations
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Civic Defense
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-mono-300">
                      Public Accountability
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <Link to="/courses" className="link-block-montfort">
                    <ArrowRight className="w-3.5 h-3.5 arrow-left text-white" />
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5 arrow-right text-white" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 portfolio-grid-bg opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <ScrollReveal className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                GLOBAL REACH // THREAT TELEMETRY
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.98] mb-6">
              Global threat intelligence & <br className="hidden sm:inline" />
              <span className="text-gradient-silver">telemetry nodes.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#86868b] font-sans leading-relaxed max-w-2xl font-normal">
              Operating across international open intelligence vectors with coordinated monitoring nodes, evidence archival, and investigative research.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: 'Zurich', lat: '47.3769° N', lon: '8.5417° E', role: 'Encrypted Telemetry Hub', status: 'ACTIVE' },
              { city: 'Singapore', lat: '1.3521° N', lon: '103.8198° E', role: 'APAC OSINT Correlation Station', status: 'ONLINE' },
              { city: 'London', lat: '51.5074° N', lon: '0.1278° W', role: 'Forensic Synthesis Archive', status: 'SYNCHRONIZED' },
              { city: 'Dubai', lat: '25.2048° N', lon: '55.2708° E', role: 'MENA Threat Reconnaissance', status: 'MONITORING' },
              { city: 'New York', lat: '40.7128° N', lon: '74.0060° W', role: 'Legal Documentation & Standards', status: 'ACTIVE' },
              { city: 'Mumbai', lat: '19.0760° N', lon: '72.8777° E', role: 'ADL South Asia Operational Base', status: 'PRIMARY' }
            ].map((node, i) => (
              <ScrollReveal key={node.city} delayMs={i * 40}>
                <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
                      <span className="font-mono text-[10px] text-white uppercase tracking-wider font-bold">
                        {node.status}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#86868b]">
                      NODE 0{i + 1}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-1 group-hover:text-mono-100 transition-colors">
                    {node.city}
                  </h4>
                  <p className="text-xs font-mono text-[#86868b] mb-4">
                    {node.lat}, {node.lon}
                  </p>
                  <div className="pt-4 border-t border-white/[0.06] text-xs font-sans text-mono-300">
                    {node.role}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

            <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <ScrollReveal>
            <InstitutionalBrandStory />
          </ScrollReveal>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
                        <ScrollReveal delayMs={0}>
              <div className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#090909] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
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

                        <ScrollReveal delayMs={60}>
              <div className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#090909] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
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

                        <ScrollReveal delayMs={120}>
              <div className="group relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#090909] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <ScrollReveal delayMs={0}>
              <div className="group relative p-8 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
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

            <ScrollReveal delayMs={60}>
              <div className="group relative p-8 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
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

            <ScrollReveal delayMs={120}>
              <div className="group relative p-8 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 hover:border-white/35 hover:bg-[#0e0e0e] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-20px_rgba(255,255,255,0.08)] overflow-hidden h-full">
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

            <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <ScrollReveal delayMs={0}>
            <CertificatePresentation />
          </ScrollReveal>
        </div>
      </section>

            <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <ScrollReveal delayMs={0}>
            <EditorialPlans onSelectPlan={() => onOpenAuth('signup')} />
          </ScrollReveal>
        </div>
      </section>

            <section id="approach" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <PhilosophyProgression />
          </ScrollReveal>
        </div>
      </section>

            <section className="py-28 sm:py-36 bg-[#060606] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-25 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <ScrollReveal className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                JOIN AL SYED INITIATIVE
              </span>
            </div>

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

export default Home;
