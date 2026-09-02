import React from 'react';

interface TimelineStepProps {
  stepNumber: string;
  stageName: string;
  title: string;
  description: string;
  deliverable: string;
  isLast?: boolean;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  stepNumber,
  stageName,
  title,
  description,
  deliverable,
  isLast = false,
}) => {
  return (
    <div className="relative flex items-start group">
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-white/40 via-mono-800 to-transparent z-0" />
      )}

      <div className="relative z-10 w-12 h-12 rounded-2xl bg-mono-950 border border-white/20 flex items-center justify-center font-mono text-sm font-bold text-white shrink-0 shadow-glow-sm group-hover:border-white group-hover:bg-mono-900 group-hover:scale-105 transition-all duration-300">
        <span>{stepNumber}</span>
      </div>

      <div className="ml-6 pb-12 flex-1">
        <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-white/25 hover:bg-[#101010] shadow-card-dark">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Stage {stepNumber} • {stageName}
            </span>
            <span className="text-xs font-mono text-mono-500">
              Verified Milestone
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
            {title}
          </h3>

          <p className="text-sm text-mono-400 leading-relaxed mb-6 font-normal">
            {description}
          </p>

          <div className="pt-4 border-t border-mono-900 flex items-center gap-2 text-xs font-mono text-mono-300">
            <span className="text-mono-500 uppercase tracking-wider text-[10px]">Deliverable:</span>
            <span className="text-white font-medium">{deliverable}</span>
          </div>
        </div>
      </div>
    </div>
  );
};