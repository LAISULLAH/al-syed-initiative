import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <PageContainer>
      <div className="max-w-md mx-auto text-center py-20 bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <ShieldAlert className="w-16 h-16 text-mono-500 mx-auto mb-4" />
        <h1 className="text-4xl font-black text-white font-mono mb-2">404</h1>
        <h2 className="text-xl font-bold text-mono-200 mb-3 uppercase tracking-tight">
          Sector Not Found
        </h2>
        <p className="text-xs sm:text-sm text-mono-400 mb-8 leading-relaxed">
          The requested intelligence endpoint does not exist or has been relocated to restricted archives.
        </p>
        <Link to="/">
          <Button variant="primary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Return to Academy Home
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
};
