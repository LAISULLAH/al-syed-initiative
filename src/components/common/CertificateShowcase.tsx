import React from 'react';

interface CertificateShowcaseProps {
  compact?: boolean;
}

export const CertificateShowcase: React.FC<CertificateShowcaseProps> = ({ compact = false }) => {
  return (
    <div className={`relative w-full mx-auto ${compact ? 'max-w-2xl' : 'max-w-5xl'}`}>
      <img
        src={`${import.meta.env.BASE_URL}certificate-exact.png`}
        className="block w-full rounded-lg border border-white/15 bg-[#151515] shadow-2xl"
      />
    </div>
  );
};
