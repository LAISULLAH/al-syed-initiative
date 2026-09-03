import React, { useState, useEffect } from 'react';
import { Search, ShieldCheck, CheckCircle2, Award, Sparkles, Star, ChevronRight, Flame } from 'lucide-react';
import { BATCH_1_STUDENTS, BATCH_2_STUDENTS, CertifiedStudent } from '../data/hallOfFameData';
import { PageContainer } from '../components/layout/PageContainer';
import { Reveal, RevealGroup, CountUp, Typewriter } from '../components/common/Reveal';

export const HallOfFame: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const q = searchQuery.trim().toLowerCase();
  const filterList = (list: CertifiedStudent[]) => {
    if (!q) return list;
    return list.filter((s) => s.name.toLowerCase().includes(q) || s.number.includes(q));
  };

  const filteredBatch1 = filterList(BATCH_1_STUDENTS);
  const filteredBatch2 = filterList(BATCH_2_STUDENTS);
  const totalFound = filteredBatch1.length + filteredBatch2.length;

  return (
    <PageContainer maxWidth="6xl">
      <div className="pb-16">
        <section className="mb-20 sm:mb-28 text-left">
          
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#ECC870]/40 bg-gradient-to-r from-[#1F190B]/80 to-[#120F05]/80 backdrop-blur-xl mb-6 sm:mb-8 transition-all duration-700 delay-100 shadow-[0_0_25px_rgba(236,200,112,0.15)] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ECC870] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B]">
              <Typewriter text="AL SYED INITIATIVE // OFFICIAL CERTIFICATION ARCHIVE" speedMs={20} />
            </span>
          </div>

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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-6 border-t border-[#ECC870]/25">
            
            <p
              className={`lg:col-span-8 text-base sm:text-lg lg:text-xl text-mono-300 font-sans leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              A permanent record of students who have met the certification standard through skill, discipline, and determined investigation.
            </p>

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
                      <CountUp end={19} /> CERTIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section className="mb-24 sm:mb-32 py-14 sm:py-20 border-y border-[#ECC870]/25 relative overflow-hidden bg-gradient-to-b from-[#ECC870]/[0.03] via-transparent to-[#ECC870]/[0.03] text-left">
          
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

          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mono-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certified record..."
                className="w-full pl-11 pr-10 py-3 bg-[#050505] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-mono-500 font-mono focus:outline-none focus:border-white/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-mono-400 hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-[11px] font-mono text-mono-400 mt-2">
                Found {totalFound} matching certification record{totalFound === 1 ? '' : 's'}
              </p>
            )}
          </div>
        </section>

        <section className="mb-24 sm:mb-32 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-white" />
                <span className="mono-index font-bold uppercase tracking-[0.3em] text-white">
                  PIONEER COHORT
                </span>
              </div>
              <Reveal as="h2" className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
                01 / BATCH ONE
              </Reveal>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 font-mono text-xs text-white font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span><CountUp end={5} /> CERTIFIED</span>
            </div>
          </div>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredBatch1.map((student) => {
              return (
                <div
                  key={student.id}
                  className="glass-card reveal-item group p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="mono-index font-bold tracking-widest text-white bg-white/[0.06] px-2.5 py-1 rounded-md border border-white/15">
                        #{student.number}
                      </span>

                      <span className="mono-index uppercase tracking-[0.2em] text-mono-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                        BATCH 01 PIONEER
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-mono-200 transition-colors">
                        {student.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-wider uppercase text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>VERIFIED</span>
                    </div>

                    <ShieldCheck className="w-4 h-4 text-mono-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </RevealGroup>

          {filteredBatch1.length === 0 && (
            <p className="py-8 text-xs font-mono text-mono-500">
              No matching records in Batch 01.
            </p>
          )}

        </section>

        <section className="mb-24 sm:mb-32 py-16 sm:py-20 border border-[#ECC870]/35 bg-gradient-to-b from-[#120E05] via-[#090703] to-[#040301] rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(236,200,112,0.18)]">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#ECC870] to-transparent pointer-events-none" />

          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-center md:text-left">
            
            <div className="flex flex-col items-center md:items-start">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#ECC870] font-bold mb-1">
                BATCH 01
              </span>
              <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                <CountUp end={5} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-mono-400 mt-1">
                CERTIFIED
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-[#ECC870]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] shadow-[0_0_6px_#ECC870]" />
              <ChevronRight className="w-5 h-5 text-[#ECC870] animate-pulse rotate-90 md:rotate-0" />
            </div>

            <div className="flex flex-col items-center md:items-start">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#ECC870] font-bold mb-1">
                BATCH 02
              </span>
              <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                <CountUp end={14} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-mono-400 mt-1">
                CERTIFIED
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-[#ECC870]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECC870] shadow-[0_0_6px_#ECC870]" />
              <ChevronRight className="w-5 h-5 text-[#ECC870] animate-pulse rotate-90 md:rotate-0" />
            </div>

            <div className="flex flex-col items-center md:items-start p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1C1607] to-[#0A0803] border border-[#ECC870]/60 shadow-[0_0_35px_rgba(236,200,112,0.25)]">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#ECC870] font-black mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#ECC870]" />
                TOTAL ARCHIVE
              </span>
              <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8E7] via-[#F2D07E] to-[#B3832B] tracking-tight filter drop-shadow-[0_0_15px_rgba(236,200,112,0.4)]">
                <CountUp end={19} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white mt-1 font-bold">
                TOTAL CERTIFIED
              </span>
            </div>

          </div>

        </section>

        <section className="mb-28 sm:mb-36 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-[#ECC870]/30 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#ECC870]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#ECC870]">
                  OPERATIONAL COHORT
                </span>
              </div>
              <Reveal as="h2" className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
                02 / BATCH TWO
              </Reveal>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 font-mono text-xs text-white font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
              <span><CountUp end={14} /> CERTIFIED</span>
            </div>
          </div>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredBatch2.map((student) => {
              return (
                <div
                  key={student.id}
                  className="glass-card reveal-item group p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="mono-index font-bold tracking-widest text-white bg-white/[0.06] px-2 py-0.5 rounded border border-white/15">
                        #{student.number}
                      </span>

                      <span className="mono-index uppercase tracking-[0.18em] text-mono-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                        BATCH 02
                      </span>
                    </div>

                    <div className="mb-5 min-h-[3rem] flex items-center">
                      <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-mono-200 transition-colors leading-tight">
                        {student.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-wider uppercase text-emerald-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>VERIFIED</span>
                    </div>

                    <ShieldCheck className="w-3.5 h-3.5 text-mono-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </RevealGroup>

          {filteredBatch2.length === 0 && (
            <p className="py-8 text-xs font-mono text-mono-500">
              No matching records in Batch 02.
            </p>
          )}

        </section>

        <section className="pt-20 sm:pt-28 pb-16 border-t border-[#ECC870]/30 text-left relative">
          
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
    </PageContainer>
  );
};
