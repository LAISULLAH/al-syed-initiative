import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Clock, Calendar, Users, ArrowUpRight, Zap, Lock } from 'lucide-react';
import { LIVE_CLASSES_TRACKS } from '../../data/coursesData';

export const LiveClassesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {LIVE_CLASSES_TRACKS.map((track) => (
        <div
          key={track.id}
          className={`relative group bg-[#0a0a0a] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-dark overflow-hidden ${
            track.status === 'Coming Soon'
              ? 'border-white/30 hover:border-white/50 ring-1 ring-white/10'
              : 'border-white/[0.08] hover:border-white/20'
          }`}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between gap-2 mb-5">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${track.status === 'Coming Soon' ? 'bg-white animate-ping' : 'bg-mono-500'}`} />
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                track.status === 'Coming Soon'
                  ? 'bg-white text-black border-white shadow-glow-sm'
                  : 'bg-mono-900 text-mono-400 border-mono-800'
              }`}>
                {track.status}
              </span>
            </div>
            <span className="text-[11px] font-mono text-mono-500">{track.month}</span>
          </div>

          <div className="relative z-10 mb-6">
            <span className="text-[10px] font-mono text-mono-500 uppercase tracking-widest mb-2 block">{track.trackName}</span>
            <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-3">
              {track.batch}
            </h3>

            <div className="space-y-2 text-xs font-mono text-mono-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-mono-300 shrink-0" />
                <span>{track.schedule}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-mono-300 shrink-0" />
                <span>{track.duration}</span>
              </div>
              {track.enrolledCount > 0 && (
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-mono-300 shrink-0" />
                  <span>{track.enrolledCount} Enrolled</span>
                </div>
              )}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-mono-900 space-y-3">
            <p className="text-[10px] font-mono text-mono-500 uppercase tracking-wider">Access</p>
            <p className="text-xs text-mono-300 leading-relaxed">{track.access}</p>

            {track.status === 'Coming Soon' ? (
              <Link
                to="/courses/osint-professional-training-program-batch-iv"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white text-black font-bold text-xs rounded-xl hover:bg-mono-200 transition-all shadow-glow-sm"
              >
                <Radio className="w-4 h-4" />
                <span>Enroll for Batch IV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <div className="mt-2 w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-mono-900/80 border border-mono-800 text-mono-500 font-bold text-xs rounded-xl cursor-not-allowed select-none">
                <Lock className="w-3.5 h-3.5" />
                <span>Registration Closed</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};