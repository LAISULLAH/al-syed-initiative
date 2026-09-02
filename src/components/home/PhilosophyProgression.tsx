import React from 'react';

interface ShiftItem {
  num: string;
  title: string;
  tag: string;
}

const ITEMS: ShiftItem[] = [
  {
    num: '01',
    title: 'QUESTION',
    tag: 'CURIOSITY / CONTEXT',
  },
  {
    num: '02',
    title: 'INVESTIGATE',
    tag: 'PROCESS / PRECISION',
  },
  {
    num: '03',
    title: 'UNDERSTAND',
    tag: 'INSIGHT / JUDGEMENT',
  },
];

export const PhilosophyProgression: React.FC = () => {
  return (
    <div className="w-full text-left">
      
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/20 mb-4 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[11px] text-white uppercase tracking-widest font-bold">
            MINDSET TRANSITION
          </span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight mb-3">
          From “How?” <span className="text-gradient-silver">to “Why?”</span>
        </h2>

        <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed">
          Anyone can follow a walkthrough. The real skill is understanding why the workflow works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
        {ITEMS.map((item) => (
          <div
            key={item.num}
            className="group relative p-6 sm:p-7 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/30 hover:bg-[#0d0d0d] transition-all duration-300 flex flex-col justify-between shadow-sm overflow-hidden"
          >
            {/* Ambient subtle corner glow */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
              <span className="font-mono text-xs font-black tracking-widest text-mono-400 group-hover:text-white transition-colors">
                {item.num} //
              </span>
              <span className="font-mono text-[10px] text-mono-500 uppercase tracking-widest">
                STAGE
              </span>
            </div>

            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-4 group-hover:text-mono-100 transition-colors">
                {item.title}
              </h3>
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-mono-300 tracking-wider uppercase font-semibold group-hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white" />
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-mono-200 tracking-[0.25em] uppercase font-bold">
          <span className="text-white">QUESTION</span>
          <span className="text-mono-600">→</span>
          <span className="text-white">INVESTIGATE</span>
          <span className="text-mono-600">→</span>
          <span className="text-white">UNDERSTAND</span>
        </div>

        <div className="text-[11px] font-mono text-mono-500 uppercase tracking-widest">
          COGNITIVE FRAMEWORK // AL SYED INITIATIVE
        </div>
      </div>

    </div>
  );
};
