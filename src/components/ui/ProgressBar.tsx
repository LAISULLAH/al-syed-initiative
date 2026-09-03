import React from 'react';

interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showLabel = true,
  size = 'md',
  className = '',
  label,
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  const sizeHeights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs text-mono-400 mb-1.5 font-mono">
          <span>{label || 'Progress'}</span>
          <span className="font-semibold text-white">{clamped}%</span>
        </div>
      )}
      <div className={`w-full bg-mono-900 border border-mono-800 rounded-full overflow-hidden ${sizeHeights[size]}`}>
        <div
          className="h-full bg-white transition-all duration-500 ease-out rounded-full relative"
          style={{ width: `${clamped}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
