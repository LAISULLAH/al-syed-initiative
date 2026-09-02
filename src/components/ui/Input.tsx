import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-mono font-medium text-mono-300 mb-1.5 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-mono-500 pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`w-full bg-mono-950 border text-sm text-white placeholder-mono-600 rounded-xl transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white focus:border-white disabled:opacity-50 disabled:bg-mono-900 ${
              leftIcon ? 'pl-10' : 'pl-4'
            } ${rightIcon ? 'pr-10' : 'pr-4'} py-2.5 ${
              error ? 'border-white ring-1 ring-white/60' : 'border-mono-800 hover:border-mono-700'
            } ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 text-mono-400 flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error ? (
          <p className="mt-1 text-xs text-mono-200 font-mono flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
            {error}
          </p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-mono-500 font-mono">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const areaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={areaId} className="block text-xs font-mono font-medium text-mono-300 mb-1.5 uppercase tracking-wider">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={areaId}
          className={`w-full bg-mono-950 border text-sm text-white placeholder-mono-600 rounded-xl p-3.5 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white focus:border-white disabled:opacity-50 min-h-[120px] resize-y ${
            error ? 'border-white ring-1 ring-white/60' : 'border-mono-800 hover:border-mono-700'
          } ${className}`}
          {...props}
        />
        {error ? (
          <p className="mt-1 text-xs text-mono-200 font-mono">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-mono-500 font-mono">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
