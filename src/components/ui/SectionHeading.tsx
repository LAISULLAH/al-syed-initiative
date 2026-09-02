import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badgeText?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-14 sm:mb-20 ${alignStyles[align]} ${className}`}>
      {badgeText && (
        <Badge variant="dot" size="sm" className="mb-4">
          {badgeText}
        </Badge>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] mb-4 uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-mono-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};