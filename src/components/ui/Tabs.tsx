import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  variant?: 'pills' | 'underline';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
  variant = 'pills',
}) => {
  if (variant === 'underline') {
    return (
      <div className={`flex border-b border-mono-800 space-x-6 overflow-x-auto no-scrollbar ${className}`}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
                isActive
                  ? 'border-white text-white font-semibold'
                  : 'border-transparent text-mono-400 hover:text-mono-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-mono-900 border border-mono-800 text-mono-300">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2 p-1.5 bg-mono-950/80 border border-mono-800 rounded-xl max-w-fit ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              isActive
                ? 'bg-white text-black shadow-sm font-semibold'
                : 'text-mono-400 hover:text-white hover:bg-mono-900'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black text-white' : 'bg-mono-800 text-mono-400'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
