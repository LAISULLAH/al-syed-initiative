import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030303] text-mono-100 font-sans select-none overflow-x-hidden pt-28 sm:pt-36 pb-24 sm:pb-32">
      <div className="absolute inset-0 bg-grid-fine opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs text-mono-400 uppercase tracking-widest font-bold">
              LEGAL DOCUMENTATION
            </span>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono">
            <Link
              to="/privacy"
              className="px-3.5 py-1 rounded-full text-mono-400 hover:text-white transition-colors"
            >
              PRIVACY
            </Link>
            <span className="px-3.5 py-1 rounded-full bg-white text-black font-bold shadow-sm">
              TERMS
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-16">
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-mono-400">
            <span>AL SYED INITIATIVE</span>
            <span className="text-mono-600">·</span>
            <span>ADL FRONT</span>
            <span className="text-mono-600">·</span>
            <span>LAST UPDATED: 2026</span>
          </div>
          <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed pt-2">
            These Terms of Service govern your access to and use of the Al Syed Initiative cybersecurity learning platform, educational content, courses, and related services.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">01 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Introduction
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              By registering for an account, accessing courses, or using any part of the Al Syed Initiative platform, you agree to comply with and be bound by these Terms of Service. If you do not agree, you must refrain from using the platform.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">02 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Using the Platform
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Al Syed Initiative is an educational platform designed to teach practical cybersecurity, ethical hacking, and open-source intelligence methodologies. All platform resources must be utilized strictly for responsible, defensive, and lawful educational purposes.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">03 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Accounts
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              When creating an account, you must provide accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You must promptly notify us of any unauthorized use.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">04 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Courses & Learning Access
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Enrollment grants an individual, non-transferable, revocable license to access course modules, live training sessions, and associated learning materials according to program parameters. Sharing account access, redistribution of session recordings, or unauthorized mirroring of instructional assets is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">05 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Payments / Plans
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Course enrollments and program fees must be settled in full prior to cohort onboarding or according to agreed administrative arrangements. All fees are displayed transparently upon enrollment confirmation.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">06 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Certificates
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Certificates of Excellence are issued exclusively to students who successfully fulfill all course requirements, attendance criteria, and practical checkpoints. A certificate serves as an official institutional record of completed training and achievement under Al Syed Initiative.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">07 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Acceptable Use
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Students agree to use knowledge, recon techniques, and testing methodologies ethically and responsibly. You agree NOT to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-mono-300">
              <li>Deploy educational techniques against systems, networks, or individuals without explicit, verified authorization.</li>
              <li>Engage in harassment, extortion, unauthorized surveillance, or digital manipulation.</li>
              <li>Attempt to reverse-engineer, disrupt, or compromise the security of the learning platform or fellow participants.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">08 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Intellectual Property
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              All instructional syllabi, course videos, documentation, emblems, marks, and pedagogical structures are the exclusive intellectual property of Al Syed Initiative and ADL Front. No content may be reproduced, modified, or commercially exploited without written permission.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">09 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Account Suspension
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Al Syed Initiative reserves the right to suspend or terminate account access without notice if a user violates these Terms, engages in unauthorized access, breaches acceptable use principles, or compromises community trust.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">10 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Disclaimers
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              The platform and all instructional resources are provided on an "as is" and "as available" basis for educational purposes. We do not warrant that platform operations will be uninterrupted, error-free, or compatible with every technical environment.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">11 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Limitation of Liability
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              To the maximum extent permitted by applicable law, Al Syed Initiative and its instructors shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use or misuse of educational techniques or platform services.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">12 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Changes to Terms
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              We reserve the right to revise or update these Terms of Service periodically. Material updates will be indicated by revising the effective date at the top of this document. Continued use of the platform constitutes acceptance of revised terms.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">13 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Contact
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              For questions, clarifications, or administrative inquiries regarding these Terms of Service, reach out to our team:
            </p>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-4 h-4 text-mono-400" />
                <a href="mailto:contact@adlfront.com" className="hover:underline">
                  contact@adlfront.com
                </a>
              </div>
              <div className="text-mono-400">
                Phone / WhatsApp: +91 99708 75040 / +91 98004 15583
              </div>
              <div className="text-mono-500 text-[11px] pt-2 border-t border-white/[0.06]">
                Al Syed Initiative · Advanced Digital Lawforce Front
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

