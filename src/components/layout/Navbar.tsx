import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, LogOut, BookOpen, Award, Menu, X, User } from 'lucide-react';
import { useScrollPosition } from '../../hooks';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenAuth?: (initialMode?: 'login' | 'signup') => void;
}

// Nav links ordered strictly according to specifications:
// Home, About, Programs, My Learning, Hall of Fame, FAQs, Contact
const NAV_LINKS = [
  { name: 'Home',         path: '/' },
  { name: 'About',        path: '/about' },
  { name: 'Programs',     path: '/courses' },
  { name: 'My Learning',  path: '/my-learning' },
  { name: 'Hall of Fame', path: '/hall-of-fame' },
  { name: 'FAQs',         path: '/faq' },
  { name: 'Contact',      path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const { scrolled } = useScrollPosition();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleAuthAction = (mode: 'login' | 'signup') => {
    setMobileOpen(false);
    if (onOpenAuth) onOpenAuth(mode);
    else navigate(`/${mode}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
        
        {/* ── Floating Precision Capsule ───────────────────────────── */}
        <div
          className={`pointer-events-auto w-full rounded-2xl sm:rounded-full bg-[#050505]/85 backdrop-blur-2xl border transition-all duration-500 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03)] relative overflow-hidden ${
            scrolled
              ? 'border-white/20 bg-black/95 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.98)]'
              : 'border-white/[0.12]'
          }`}
        >
          {/* Subtle Top Specular Hairline Shimmer */}
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* ── Brand Logo as Precision Mark ──────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group shrink-0 select-none"
            onClick={() => setMobileOpen(false)}
          >
            {/* Direct Favicon Brand Logo */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <img
                src="/favicon.png"
                alt="Al Syed Initiative logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
                loading="eager"
              />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xs sm:text-sm tracking-tight text-white uppercase group-hover:text-mono-100 transition-colors leading-tight">
                  Al Syed Initiative
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse hidden sm:inline-block" />
              </div>
              <span className="text-[9px] font-mono text-mono-400 tracking-[0.22em] uppercase leading-none mt-0.5">
                Cybersecurity Education
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation Links ─────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 select-none ${
                    active
                      ? 'text-white bg-white/[0.12] border border-white/20 shadow-[0_2px_12px_rgba(255,255,255,0.08)] font-semibold scale-[1.02]'
                      : 'text-mono-400 hover:text-white hover:bg-white/[0.05] border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* ── Right side: Premium Interactive Account Area ─────── */}
          <div className="hidden lg:flex items-center gap-3 select-none">
            {isAuthenticated && user ? (
              /* Authenticated User Account Chip with Dropdown */
              <div ref={profileRef} className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/35 transition-all duration-200 active:scale-[0.98]"
                  aria-label="User profile menu"
                >
                  <div className="w-7 h-7 rounded-full bg-white text-black font-display font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                    {user.avatarInitials}
                  </div>
                  <span className="text-xs font-semibold text-mono-200 group-hover:text-white max-w-[120px] truncate transition-colors">
                    {user.name}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-mono-500 group-hover:text-white transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-60 bg-[#070707] border border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-2 z-50 animate-slide-up text-left">
                    <div className="px-3.5 py-2.5 border-b border-white/[0.08] mb-1">
                      <p className="text-xs font-bold text-white truncate">{user.name}</p>
                      <p className="text-[10px] font-mono text-mono-400 truncate mt-0.5">{user.email}</p>
                    </div>
                    <Link
                      to="/my-learning"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-xs text-mono-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors font-medium"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-mono-400" />
                      My Learning
                    </Link>
                    <Link
                      to="/hall-of-fame"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-xs text-mono-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors font-medium"
                    >
                      <Award className="w-3.5 h-3.5 text-mono-400" />
                      Hall of Fame
                    </Link>
                    <button
                      onClick={() => { setProfileOpen(false); logout(); }}
                      className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-mono-400 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors text-left mt-1 pt-2 border-t border-white/[0.06]"
                    >
                      <LogOut className="w-3.5 h-3.5 text-mono-500" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Direct Login Page Link */
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/[0.04] text-xs font-semibold text-mono-200 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                Log In
              </Link>
            )}
          </div>

          {/* ── Mobile Hamburger Button ───────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex lg:hidden p-2 rounded-lg text-mono-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#030303]/98 backdrop-blur-3xl border-t border-white/[0.08] p-6 flex flex-col justify-between overflow-y-auto animate-fade-in z-50 text-left">
          <nav className="flex flex-col gap-1.5 pt-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-medium transition-all ${
                    active
                      ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                      : 'text-mono-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/[0.08] mt-6">
            {isAuthenticated && user ? (
              <div className="space-y-3">
                <div className="p-4 bg-white/[0.04] rounded-2xl flex items-center gap-3 border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-full bg-white text-black font-display font-black text-sm flex items-center justify-center shrink-0">
                    {user.avatarInitials}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                    <p className="text-xs font-mono text-mono-500 truncate">{user.email}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => { setMobileOpen(false); logout(); }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 text-center rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-mono-100 transition-colors shadow-sm"
                >
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
