import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'solid' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  padding = 'md',
  className = '',
  ...props
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    default: 'bg-mono-950 border border-mono-800 rounded-2xl',
    glass: 'bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl',
    solid: 'bg-mono-900 border border-mono-800 rounded-2xl',
    interactive: 'bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transition-all duration-300 hover:border-white/25 hover:bg-[#141414]/90 hover:-translate-y-1 hover:shadow-2xl'
  };

  return (
    <div
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
