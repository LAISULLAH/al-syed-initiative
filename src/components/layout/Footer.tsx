import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#040404] text-mono-100 border-t border-white/10 overflow-hidden select-none">
      
      {/* Subtle fine architectural grid overlay */}
      <div className="absolute inset-0 bg-grid-fine opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 sm:pb-16 text-left">
        
        <div className="pb-16 sm:pb-20 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4 max-w-3xl">
            <h2
              className="font-display font-black text-white uppercase tracking-tight leading-[0.92]"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                letterSpacing: '-0.04em',
              }}
            >
              Build knowledge. <br />
              <span className="text-gradient-silver">Carry it forward.</span>
            </h2>

            <p className="text-base sm:text-lg text-mono-300 font-sans font-normal leading-relaxed max-w-xl">
              Structured learning for people who take cybersecurity seriously.
            </p>
          </div>

          {/* Small Premium Action CTA */}
          <div className="shrink-0 flex flex-col items-start lg:items-end space-y-3">
            <span className="text-xs font-mono text-mono-400 uppercase tracking-widest font-semibold">
              Ready to begin?
            </span>
            <Link
              to="/courses"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-mono-100 hover:shadow-[0_0_35px_-5px_rgba(255,255,255,0.35)] active:scale-[0.98]"
            >
              <span>Explore Al Syed</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-b border-white/10">
          
          {/* Column 1: EXPLORE */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>Explore</span>
            </h3>

            <ul className="space-y-3.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Programs', to: '/courses' },
                { label: 'My Learning', to: '/my-learning' },
                { label: 'Hall of Fame', to: '/hall-of-fame' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center text-sm sm:text-base text-mono-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>Company</span>
            </h3>

            <ul className="space-y-3.5">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'FAQs', to: '/faq' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center text-sm sm:text-base text-mono-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONNECT */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>Connect</span>
            </h3>

            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://www.instagram.com/adlfrontofficial?igsh=MTgwN3Z2ZXZ4aGswYg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base text-mono-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mono-500 group-hover:text-white transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/AdlFront"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base text-mono-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <span>X</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mono-500 group-hover:text-white transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@adlfront.com"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base text-mono-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <span>Email — contact@adlfront.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mono-500 group-hover:text-white transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href="tel:+919970875040"
                  className="group inline-flex items-center gap-2 text-sm sm:text-base text-mono-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  <span>Phone — +91 99708 75040</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mono-500 group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-mono text-mono-400">
          <span>© 2026 Al Syed Initiative. All rights reserved.</span>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors duration-150">
              Privacy
            </Link>
            <span className="text-mono-700">/</span>
            <Link to="/terms" className="hover:text-white transition-colors duration-150">
              Terms
            </Link>
          </div>
        </div>

      </div>

    </footer>
  );
};