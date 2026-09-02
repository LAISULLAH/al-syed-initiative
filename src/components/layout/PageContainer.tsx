import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  withGrid?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  withGrid = true,
}) => {
  return (
    <div className={`relative min-h-screen pt-24 pb-20 overflow-hidden ${className}`}>
      {withGrid && (
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};
