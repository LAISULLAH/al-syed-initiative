import React from 'react';
import { Award, CheckCircle2, ExternalLink, Shield } from 'lucide-react';
import { UserAchievement } from '../../types';

export const AchievementCard: React.FC<{ achievement: UserAchievement; onVerify?: () => void }> = ({
  achievement,
  onVerify,
}) => {
  return (
    <div className="relative group bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/30 hover:bg-[#121212] overflow-hidden">
      {/* Subtle border highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-mono-900 border border-mono-800 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-mono-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          <Shield className="w-3 h-3 text-white" />
          <span>Verified</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-[11px] font-mono text-mono-400 uppercase tracking-wider block mb-1">
          {achievement.category}
        </span>
        <h4 className="text-base font-bold text-white tracking-tight mb-2">
          {achievement.title}
        </h4>
        <p className="text-xs text-mono-400 leading-relaxed">
          {achievement.description}
        </p>
      </div>

      <div className="pt-4 border-t border-mono-900 flex items-center justify-between text-xs font-mono text-mono-400">
        <div>
          <span className="text-mono-600 block text-[10px]">ID</span>
          <span className="text-mono-300 font-semibold">{achievement.credentialId}</span>
        </div>
        <button
          onClick={onVerify}
          className="inline-flex items-center gap-1 text-xs text-white hover:text-mono-300 transition-colors"
        >
          <span>Verify Record</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
