import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useReducedMotion } from '../hooks';

// ─────────────────────────────────────────────────────────────────────────────
// Login — The Private Learning Platform Portal
//
// Left: Context & Platform Identity (Enrolled OSINT Learner Space)
// Right: Focused High-End Login Card
// Palette: Pure Monochrome (Deep Black, Silver, White, Thin Hairline Borders)
// ─────────────────────────────────────────────────────────────────────────────

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse tracking for subtle ambient spotlight
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { login } = useAuth();
  const navigate = useNavigate();

  // Trigger entrance sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // Smooth lerped cursor movement tracking
  useEffect(() => {
    if (reducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!viewportRef.current) return;
      const rect = viewportRef.current.getBoundingClientRect();
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
    setError('');
    setInfoMessage('');

    if (!email || !password) {
      setError('Please provide your credentials.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/my-learning');
    } catch (err: any) {
      setError(err.message || 'Unable to authenticate. Please verify your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Enter your email address above to receive reset instructions.');
      return;
    }
    setInfoMessage(`Password reset link dispatched to ${email}.`);
  };

  return (
    <div
      ref={viewportRef}
      className="relative min-h-[calc(100vh-76px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden bg-[#030303] select-none"
    >
      {/* ── 1. Slow Ambient Private Platform Atmosphere ──────────── */}
      
      {/* Smooth Cursor-Following Ambient Light */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000 z-0"
        style={{
          background: reducedMotion
            ? 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.035) 0%, transparent 65%)'
            : `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.032) 0%, rgba(255,255,255,0.007) 35%, transparent 70%)`,
        }}
      />

      {/* Static Ambient Center Flare */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 48%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.004) 30%, transparent 65%)',
        }}
      />

      {/* Subtle fine architectural grid */}
      <div className="absolute inset-0 bg-grid-fine opacity-15 pointer-events-none z-0" />

      {/* Atmospheric Hairline Vertical Guides */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* ── 2. Two-Column Private Platform Composition ─────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ═════════════════════════════════════════════════════════
              LEFT SIDE: Context & Platform Identity
          ═════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Logo + Eyebrow: AL SYED / MEMBER PORTAL */}
            <div
              className={`flex items-center gap-3.5 mb-6 sm:mb-8 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {/* Direct Favicon Brand Logo */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                <img
                  src="/favicon.png"
                  alt="Al Syed Initiative logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
                  loading="eager"
                />
              </div>

              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-mono-300">
                  AL SYED / MEMBER PORTAL
                </span>
              </div>
            </div>

            {/* Main Heading: YOUR LEARNING STARTS HERE. (Blur-to-sharp reveal) */}
            <h1
              className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[1.02] mb-5 transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-0 blur-[8px] translate-y-4'
              }`}
            >
              <span className="block">YOUR LEARNING</span>
              <span className="block text-gradient-silver">STARTS HERE.</span>
            </h1>

            {/* Supporting text */}
            <p
              className={`text-sm sm:text-base text-mono-300 font-sans leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              Access your enrolled OSINT training, live sessions, course resources and learning progress from one place.
            </p>

            {/* Three Compact Information Blocks */}
            <div className="space-y-4 max-w-xl">
              
              {/* 01 — YOUR PROGRAM */}
              <div
                className={`p-4 sm:p-4.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 delay-400 hover:border-white/20 hover:bg-white/[0.04] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-semibold text-white tracking-widest">
                    01 —
                  </span>
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    YOUR PROGRAM
                  </h3>
                </div>
                <p className="text-xs text-mono-400 font-sans leading-relaxed pl-9">
                  Access the OSINT Professional Training Program linked to your account.
                </p>
              </div>

              {/* 02 — LIVE & ON-DEMAND */}
              <div
                className={`p-4 sm:p-4.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 delay-500 hover:border-white/20 hover:bg-white/[0.04] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-semibold text-white tracking-widest">
                    02 —
                  </span>
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    LIVE & ON-DEMAND
                  </h3>
                </div>
                <p className="text-xs text-mono-400 font-sans leading-relaxed pl-9">
                  Join instructor-led sessions and revisit available recordings.
                </p>
              </div>

              {/* 03 — RESOURCES & PROGRESS */}
              <div
                className={`p-4 sm:p-4.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 delay-600 hover:border-white/20 hover:bg-white/[0.04] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs font-semibold text-white tracking-widest">
                    03 —
                  </span>
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    RESOURCES & PROGRESS
                  </h3>
                </div>
                <p className="text-xs text-mono-400 font-sans leading-relaxed pl-9">
                  Access your learning resources and continue tracking your progress.
                </p>
              </div>

            </div>

            {/* Small bottom label */}
            <div
              className={`mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-mono-500 transition-all duration-700 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-mono-600" />
              <span>BUILT FOR ENROLLED LEARNERS</span>
            </div>

          </div>

          {/* ═════════════════════════════════════════════════════════
              RIGHT SIDE: Focused Login Card
          ═════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 w-full max-w-[430px] mx-auto lg:mx-0">
            
            <div
              className={`relative rounded-3xl bg-[#070707]/92 backdrop-blur-2xl border border-white/[0.09] p-8 sm:p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_50px_-10px_rgba(255,255,255,0.03)] overflow-hidden transition-all duration-800 delay-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded
                  ? 'opacity-100 translate-y-0 blur-0'
                  : 'opacity-0 translate-y-6 blur-sm'
              }`}
            >
              
              {/* Subtle Top Hairline Highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="text-left mb-7">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-mono-400 mb-2 block">
                  MEMBER LOGIN
                </span>

                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                  WELCOME BACK.
                </h2>

                <p className="text-xs sm:text-sm text-mono-400 font-sans mt-1.5">
                  Continue where you left off.
                </p>
              </div>

              {/* Inline Feedback Alerts */}
              {error && (
                <div className="mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/20 text-xs text-white font-mono flex items-center gap-2 animate-fade-in text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {infoMessage && (
                <div className="mb-5 p-3 rounded-xl bg-white/[0.04] border border-white/30 text-xs text-mono-200 font-mono flex items-center gap-2 animate-fade-in text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span>{infoMessage}</span>
                </div>
              )}

              {/* ── Form Fields ────────────────────────────────────────── */}
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* EMAIL */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-mono-300 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder-mono-500 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20 transition-all duration-200 select-text"
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-mono-300 mb-2">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-11 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder-mono-500 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/20 transition-all duration-200 select-text"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-mono-400 hover:text-white transition-colors p-1"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Forgot password? */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-xs font-mono text-mono-400 hover:text-white transition-colors duration-150"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>

                {/* [ LOG IN → ] */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full py-3.5 px-6 bg-white hover:bg-mono-100 text-black font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-[0.98] shadow-[0_0_25px_-5px_rgba(255,255,255,0.35)] hover:shadow-[0_0_35px_-5px_rgba(255,255,255,0.55)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{isLoading ? 'AUTHENTICATING...' : 'LOG IN'}</span>
                    {!isLoading && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    )}
                  </button>
                </div>

              </form>

              {/* ── Below Form ────────────────────────────────────────── */}
              <div className="mt-8 pt-6 border-t border-white/[0.07] text-center text-xs text-mono-400 flex flex-col sm:flex-row items-center justify-center gap-1.5 font-sans">
                <span>Not enrolled yet?</span>
                <Link
                  to="/courses"
                  className="text-white hover:text-mono-200 font-semibold uppercase tracking-wider text-[11px] font-mono inline-flex items-center gap-1 transition-colors group"
                >
                  <span>EXPLORE PROGRAMS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
