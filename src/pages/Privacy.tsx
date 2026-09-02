import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030303] text-mono-100 font-sans select-none overflow-x-hidden pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Subtle fine background grid */}
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
            <span className="px-3.5 py-1 rounded-full bg-white text-black font-bold shadow-sm">
              PRIVACY
            </span>
            <Link
              to="/terms"
              className="px-3.5 py-1 rounded-full text-mono-400 hover:text-white transition-colors"
            >
              TERMS
            </Link>
          </div>
        </div>

        <div className="space-y-4 mb-16">
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-mono-400">
            <span>AL SYED INITIATIVE</span>
            <span className="text-mono-600">·</span>
            <span>ADL FRONT</span>
            <span className="text-mono-600">·</span>
            <span>LAST UPDATED: 2026</span>
          </div>
          <p className="text-base sm:text-lg text-mono-300 font-sans leading-relaxed pt-2">
            This Privacy Policy outlines how Al Syed Initiative handles, processes, and protects information when you use our educational website, enrollment services, and learning platform.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          
          {/* Section 01: Introduction */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">01 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Introduction
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Al Syed Initiative is committed to respecting user privacy and managing information with discipline, clarity, and responsible handling. By accessing or using our platform, you acknowledge the terms described in this policy.
            </p>
          </section>

          {/* Section 02: Information We Collect */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">02 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Information We Collect
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              We collect information necessary to deliver educational services, manage user access, and maintain platform security. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-mono-300">
              <li>Contact details such as your name, email address, and phone number when registering or reaching out for support.</li>
              <li>Authentication credentials created during account registration.</li>
              <li>Communications and inquiries submitted through support channels, email, or contact forms.</li>
            </ul>
          </section>

          {/* Section 03: How We Use Information */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">03 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                How We Use Information
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Collected information is used strictly to provide, maintain, and support our cybersecurity learning platform. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-mono-300">
              <li>To provide access to course materials, curriculum modules, and scheduled live sessions.</li>
              <li>To communicate important platform updates, course notifications, and account notices.</li>
              <li>To respond to user inquiries, verify student enrollments, and troubleshoot technical questions.</li>
              <li>To safeguard the platform against unauthorized access, abuse, and security incidents.</li>
            </ul>
          </section>

          {/* Section 04: Account & Learning Data */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">04 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Account & Learning Data
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              When enrolled in our training programs, the platform records basic learning activity, such as completed modules, attendance checkpoints, and criteria required for issuing completion certificates. This data is associated with your account profile.
            </p>
          </section>

          {/* Section 05: Cookies & Technologies */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">05 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Cookies & Technologies
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              We may utilize essential browser cookies and session storage technologies strictly necessary for user authentication, maintaining active sessions, and remembering basic user preferences across visits.
            </p>
          </section>

          {/* Section 06: Data Sharing */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">06 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Data Sharing
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Al Syed Initiative does not sell, rent, or trade your personal information. Information is only shared when necessary with technical infrastructure providers who assist in operating the platform, or where legally required by lawful authority.
            </p>
          </section>

          {/* Section 07: Data Security */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">07 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Data Security
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              We implement reasonable administrative, technical, and physical controls to protect stored account data and communications against unauthorized access, loss, or alteration.
            </p>
          </section>

          {/* Section 08: Data Retention */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">08 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Data Retention
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              User information is retained for as long as your account remains active or as needed to maintain verified records of course completion, certificate issuance, and operational continuity.
            </p>
          </section>

          {/* Section 09: User Rights */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">09 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                User Rights
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              Users may review, update, or request correction of their account information by contacting our administration team through official platform communication channels.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-mono-500 font-bold">10 //</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Contact
              </h2>
            </div>
            <p className="text-sm sm:text-base text-mono-300 leading-relaxed">
              If you have inquiries regarding this Privacy Policy or data handling practices, please contact us directly:
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

