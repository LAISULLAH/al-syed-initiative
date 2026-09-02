import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`bg-mono-900/70 animate-pulse rounded-lg border border-white/5 ${className}`}
    />
  );
};
