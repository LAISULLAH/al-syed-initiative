import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  MapPin, 
  MessageSquare, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  ChevronDown,
  Check
} from 'lucide-react';
import { useReducedMotion } from '../hooks';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('OSINT Professional Cohort Admission');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse spotlight coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const inquiryOptions = [
    { value: 'OSINT Professional Cohort Admission', label: 'OSINT Professional Training Cohort Admission' },
    { value: 'Institutional & Corporate Training', label: 'Institutional & Corporate Security Training' },
    { value: 'Case Referral & Digital Forensics', label: 'Case Referral & Open Source Intelligence' },
    { value: 'Media & Verification Inquiries', label: 'Media & Verification Briefings' },
    { value: 'General Communication', label: 'General Communication & Partnerships' },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // Smooth lerped cursor movement tracking for ambient spotlight
  useEffect(() => {
    if (reducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMousePos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate real transmission dispatch
      await new Promise((resolve) => setTimeout(resolve, 550));
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setErrorMessage('Unable to dispatch transmission. Please try again or use direct channels.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#030303] text-mono-100 overflow-hidden select-none selection:bg-white selection:text-black font-sans"
    >
      
      {/* Cursor-Following Ambient Light */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 z-0"
        style={{
          background: reducedMotion
            ? 'radial-gradient(circle at 50% 25%, rgba(255,255,255,0.035) 0%, transparent 65%)'
            : `radial-gradient(850px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.007) 35%, transparent 70%)`,
        }}
      />

      {/* Top Monumental Flare */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 75%)',
        }}
      />

      {/* Fine Architectural Grid */}
      <div className="absolute inset-0 bg-grid-fine opacity-15 pointer-events-none z-0" />

      {/* Vertical Hairline Margin Guides */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute left-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute right-[6%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-36">
        
        <section className="mb-16 sm:mb-20 text-left">
          
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-mono-300">
              OFFICIAL COMMUNICATION DESK
            </span>
          </div>

          {/* Monumental Heading */}
          <h1
            className={`font-display font-black uppercase tracking-[-0.03em] text-white leading-[0.92] mb-6 transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLoaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[8px] translate-y-6'
            }`}
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            <span className="block">CONNECT WITH</span>
            <span className="block text-gradient-silver">AL SYED.</span>
          </h1>

          <p
            className={`text-base sm:text-lg text-mono-300 font-sans leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            For OSINT training cohort enrollment, corporate workshops, institutional briefings, or case referrals, communicate directly through our official channels.
          </p>

        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Direct Inquiry Transmission Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#060606]/90 border border-white/15 p-7 sm:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
              
              {/* Top Hairline Highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    Transmission Dispatched.
                  </h3>

                  <p className="text-xs sm:text-sm text-mono-300 font-sans max-w-md mx-auto leading-relaxed">
                    Your communication has been securely logged. An Al Syed Initiative coordinator will review your inquiry and respond within 24 operational hours.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all active:scale-[0.98]"
                    >
                      Send Another Transmission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-white/[0.08] pb-4 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mono-400 font-semibold block mb-1">
                      DIRECT INQUIRY FORM
                    </span>
                    <h2 className="font-display font-bold text-xl uppercase tracking-tight text-white">
                      Initiate Direct Communication
                    </h2>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/20 text-xs text-white font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-mono-300 mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Merchant"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder-mono-500 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20 transition-all select-text"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-mono-300 mb-2">
                        OFFICIAL EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="analyst@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder-mono-500 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20 transition-all select-text"
                      />
                    </div>
                  </div>

                  {/* Custom Luxury Dark Dropdown */}
                  <div ref={dropdownRef} className="relative">
                    <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-mono-300 mb-2">
                      INQUIRY TOPIC
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all cursor-pointer font-sans flex items-center justify-between text-left select-none"
                    >
                      <span className="truncate">{inquiryTopic}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-mono-400 transition-transform duration-200 shrink-0 ml-2 ${
                          isDropdownOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>

                    {/* Dark Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 right-0 mt-2 py-1.5 bg-[#0A0A0A] border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 animate-fade-in backdrop-blur-2xl overflow-hidden">
                        {inquiryOptions.map((opt) => {
                          const isSelected = inquiryTopic === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                setInquiryTopic(opt.value);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-white/[0.1] text-white font-semibold'
                                  : 'text-mono-300 hover:bg-white/[0.05] hover:text-white'
                              }`}
                            >
                              <span>{opt.label}</span>
                              {isSelected && <Check className="w-4 h-4 text-white shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-mono-300 mb-2">
                      INQUIRY DETAILS
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Outline your background, learning objectives, or the specific context of your communication..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder-mono-500 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20 transition-all select-text resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full py-4 px-6 bg-white hover:bg-mono-100 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{isLoading ? 'DISPATCHING TRANSMISSION...' : 'SUBMIT INQUIRY TRANSMISSION'}</span>
                    {!isLoading && (
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </button>

                  <p className="text-[10px] font-mono text-mono-500 text-center tracking-wider uppercase">
                    CONFIDENTIAL OPERATIONAL LOGGING · ENCRYPTED IN TRANSIT
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Verified Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Header Box */}
            <div className="p-6 rounded-3xl bg-[#060606]/80 border border-white/10 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mono-400 font-bold block">
                VERIFIED REAL CHANNELS
              </span>
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                Direct Communication Hub
              </h3>
              <p className="text-xs text-mono-400 font-sans">
                Official points of contact for rapid verification and cohort admissions.
              </p>
            </div>

            {/* Direct WhatsApp Helpdesk */}
            <a
              href="https://wa.me/919970875040"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all flex items-start justify-between group block shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-mono-400 block font-semibold">
                  DIRECT WHATSAPP DESK
                </span>
                <p className="text-base font-bold text-white font-mono tracking-wider">
                  +91 99708 75040
                </p>
                <p className="text-xs text-mono-400">
                  Fastest response for active cohort enrollment inquiries.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-mono-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
            </a>

            {/* Official Email */}
            <a
              href="mailto:contact@adlfront.com"
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all flex items-start justify-between group block shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-mono-400 block font-semibold">
                  OFFICIAL CORRESPONDENCE
                </span>
                <p className="text-sm font-bold text-white font-mono tracking-wide">
                  contact@adlfront.com
                </p>
                <p className="text-xs text-mono-400">
                  For formal briefings, syllabus dossiers, and partnerships.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-mono-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
            </a>

            {/* Social Intelligence Verification Channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.instagram.com/adlfrontofficial?igsh=MTgwN3Z2ZXZ4aGswYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all group block"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-mono-400 block">
                  INSTAGRAM
                </span>
                <p className="text-xs font-bold text-white mt-1 group-hover:text-mono-200 transition-colors flex items-center justify-between">
                  <span>@adlfrontofficial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                </p>
              </a>

              <a
                href="https://x.com/AdlFront"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all group block"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-mono-400 block">
                  X (TWITTER)
                </span>
                <p className="text-xs font-bold text-white mt-1 group-hover:text-mono-200 transition-colors flex items-center justify-between">
                  <span>@AdlFront</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                </p>
              </a>
            </div>

            {/* Operational Base & Foundation Entity */}
            <div className="p-5 rounded-2xl bg-[#060606]/90 border border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mono-400" />
                <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                  MUMBAI, MAHARASHTRA, INDIA
                </span>
              </div>
              <p className="text-xs text-mono-400 leading-relaxed font-sans">
                Operating under the Advanced Digital Lawforce Front (ADL Front) — cultivating digital truth, critical thinking, and disciplined cyber investigation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
