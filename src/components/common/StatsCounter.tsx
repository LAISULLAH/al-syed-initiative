import React from 'react';
import { PlatformStat } from '../../types';

export const StatsCounter: React.FC<{ stat: PlatformStat }> = ({ stat }) => {
  return (
    <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:bg-[#101010] shadow-card-dark overflow-hidden group">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl pointer-events-none" />

      <div className="relative z-10 mb-6">
        <span className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white block mb-3 group-hover:text-gradient-silver transition-colors">
          {stat.value}
        </span>
        <h3 className="font-display text-base sm:text-lg font-bold text-mono-200 tracking-tight">
          {stat.label}
        </h3>
        <p className="font-tech text-xs text-mono-500 mt-1 uppercase tracking-widest">
          {stat.sublabel}
        </p>
      </div>

      <p className="relative z-10 text-xs sm:text-sm text-mono-400 font-normal leading-relaxed pt-4 border-t border-mono-900">
        {stat.description}
      </p>
    </div>
  );
};