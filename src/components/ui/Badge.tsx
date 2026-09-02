import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid' | 'subtle' | 'dot';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-mono tracking-wider',
    md: 'text-xs px-2.5 py-1 font-mono tracking-wider',
  };

  const variantStyles = {
    outline: 'border border-mono-700 text-mono-300 bg-transparent',
    solid: 'bg-white text-black font-semibold',
    subtle: 'bg-white/5 border border-white/10 text-mono-200',
    dot: 'bg-mono-900 border border-mono-700 text-mono-200 inline-flex items-center gap-1.5'
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full uppercase transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {variant === 'dot' && (
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      )}
      {children}
    </span>
  );
};
