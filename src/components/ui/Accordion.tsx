import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  id: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  children,
  defaultOpen = false,
  badge,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-mono-950/60 transition-colors hover:border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white text-base sm:text-lg tracking-tight">
              {title}
            </span>
            {badge && <span>{badge}</span>}
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-mono-400 mt-1 font-normal">
              {subtitle}
            </p>
          )}
        </div>
        <div
          className={`w-7 h-7 rounded-lg bg-mono-900 border border-mono-800 flex items-center justify-center shrink-0 transition-transform duration-300 text-mono-300 ${
            isOpen ? 'rotate-180 text-white bg-mono-800' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-mono-300 border-t border-mono-900 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC<{ items: AccordionItemProps[]; className?: string }> = ({
  items,
  className = 'space-y-3',
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
};
