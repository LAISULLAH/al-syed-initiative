import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mono-400 focus:ring-offset-2 focus:ring-offset-mono-950 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-white text-black hover:bg-mono-200 shadow-md hover:shadow-lg font-semibold',
    secondary: 'bg-mono-900 text-white border border-mono-700 hover:bg-mono-800 hover:border-mono-600',
    outline: 'bg-transparent text-white border border-mono-700 hover:bg-mono-900 hover:border-mono-500',
    ghost: 'bg-transparent text-mono-300 hover:text-white hover:bg-mono-900',
    glass: 'bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};
