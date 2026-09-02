import React from 'react';
import { Shield, Eye, Scale, Target, CheckCircle2, ArrowRight, Lock, BookOpen } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <PageContainer>
      {/* 1. Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Badge variant="dot" size="md" className="mb-4">
          About Al Syed Initiative
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight mb-6">
          Practical cybersecurity learning built for real execution
        </h1>
        <p className="text-lg sm:text-xl text-mono-400 font-normal leading-relaxed">
          Al Syed Initiative is a cybersecurity learning platform focused on practical training in OSINT, reconnaissance, and web application penetration testing. We teach learners how to think clearly, work ethically, and build repeatable investigation workflows.
        </p>
      </div>

      {/* 2. Editorial Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-5 bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 sticky top-28">
          <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold mb-6">
            <Shield className="w-6 h-6 fill-black text-black" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
            Structured cyber education
          </h3>
          <p className="text-sm text-mono-400 leading-relaxed mb-6">
            The platform brings together cybersecurity education, digital awareness, and disciplined open-source investigation methods for students, researchers, and aspiring security professionals.
          </p>
          <div className="space-y-3 pt-6 border-t border-mono-900 text-xs font-mono text-mono-300">
            <div className="flex items-center gap-2.5">
              <Scale className="w-4 h-4 text-white" />
              <span>Practical OSINT and recon workflows</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-white" />
              <span>Legal and responsible learning boundaries</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-white" />
              <span>Live classes, resources, and mentorship</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-mono-300 text-base leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why We Created This Platform
            </h2>
            <p className="text-mono-400 leading-relaxed">
              The digital world moves fast, and learners need more than tool names. They need method, clarity, and the judgment to collect, analyze, and document information responsibly.
            </p>
            <p className="text-mono-400 leading-relaxed">
              Al Syed Initiative was created to make practical cybersecurity learning more structured: from digital footprints and online identity analysis to reconnaissance, attack surface mapping, and web application testing.
            </p>
            <p className="text-mono-400 leading-relaxed">
              Our goal is to help learners build a repeatable process, not just memorize commands. Every program is designed around real workflows, ethical limits, and clear documentation habits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-mono-950 border border-mono-800">
            <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
              Our Core Mission
            </h4>
            <p className="text-sm text-mono-400 leading-relaxed">
              To empower individuals with digital literacy, ethical hacking fundamentals, and investigative thinking so they can act responsibly and confidently in modern online environments.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Core Pillars */}
      <div className="mb-24">
        <SectionHeading
          badgeText="Learning Philosophy"
          title="The Three Pillars of Our Training"
          subtitle="A practical model for learning cybersecurity with discipline, ethics, and real-world workflow thinking."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
            <span className="text-xs font-mono text-mono-500 uppercase tracking-widest block mb-2">01 / Rigor</span>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              Evidence-Based Thinking
            </h3>
            <p className="text-sm text-mono-400 leading-relaxed">
              Learners practice careful observation, source checking, documentation, and responsible interpretation before drawing conclusions.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
            <span className="text-xs font-mono text-mono-500 uppercase tracking-widest block mb-2">02 / OPSEC</span>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              OPSEC Awareness
            </h3>
            <p className="text-sm text-mono-400 leading-relaxed">
              Students learn safe habits for separating personal identity, research activity, and training environments during OSINT practice.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
            <span className="text-xs font-mono text-mono-500 uppercase tracking-widest block mb-2">03 / Impact</span>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              Practical Execution
            </h3>
            <p className="text-sm text-mono-400 leading-relaxed">
              Modules connect concepts to hands-on workflows so learners can apply cybersecurity knowledge with structure and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Leadership & Mentorship note */}
      <div className="bg-gradient-to-r from-mono-950 via-[#0d0d0d] to-mono-950 border border-white/10 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
          Ready to join the next generation of digital investigators?
        </h3>
        <p className="text-mono-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Enroll in our upcoming live virtual cohorts and master the discipline of legal open-source intelligence.
        </p>
        <Link to="/courses">
          <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Explore Training Programs
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
};
