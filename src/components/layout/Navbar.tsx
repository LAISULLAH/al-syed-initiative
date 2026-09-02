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

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Smart scroll-direction hide/show listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        // At top of page: always visible
        setIsVisible(true);
      } else if (mobileOpen) {
        // Mobile drawer open: keep visible
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN: hide capsule
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP: reveal capsule
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  // If mobile drawer is open, keep navbar visible
  const shouldShow = isVisible || mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          shouldShow ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5">
          
          {/* ── Floating Precision Capsule ───────────────────────────── */}
          <div
            className={`pointer-events-auto w-full rounded-2xl sm:rounded-full bg-[#050505]/90 backdrop-blur-2xl border transition-all duration-500 px-3.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03)] relative overflow-hidden ${
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
              className="flex items-center gap-2.5 sm:gap-3.5 group shrink min-w-0 select-none"
              onClick={() => setMobileOpen(false)}
            >
              <div className="flex flex-col text-left min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-display font-black text-[11px] sm:text-sm tracking-tight text-white uppercase group-hover:text-mono-100 transition-colors leading-tight truncate">
                    Al Syed Initiative
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse hidden sm:inline-block shrink-0" />
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono text-mono-400 tracking-[0.2em] sm:tracking-[0.22em] uppercase leading-none mt-0.5 truncate">
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

            {/* ── Right side: Desktop Account Area ─────────────────── */}
            <div className="hidden lg:flex items-center gap-3 select-none">
              {isAuthenticated && user ? (
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
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/[0.04] text-xs font-semibold text-mono-200 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all duration-200 active:scale-[0.98] shadow-sm"
                >
                  Log In
                </Link>
              )}
            </div>

            {/* ── Mobile Actions: Fast Log In + Hamburger Button ──── */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              {!isAuthenticated && (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.05] text-[11px] font-semibold text-mono-200 hover:text-white transition-all active:scale-[0.97]"
                >
                  Log In
                </Link>
              )}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-mono-300 hover:text-white hover:bg-white/[0.08] transition-colors active:scale-95"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Dedicated Mobile Full-Screen Drawer Overlay ───────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#030303]/98 backdrop-blur-3xl flex flex-col justify-between p-5 sm:p-7 overflow-y-auto animate-fade-in text-left">
          
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="flex flex-col">
                <span className="font-display font-black text-sm text-white uppercase tracking-tight">
                  Al Syed Initiative
                </span>
                <span className="text-[9px] font-mono text-mono-400 tracking-[0.2em] uppercase">
                  Navigation Menu
                </span>
              </div>
            </Link>
            
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/15 text-white hover:bg-white/15 transition-colors active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links with Large Touch Targets */}
          <nav className="flex flex-col gap-2 py-6 my-auto" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-semibold transition-all active:scale-[0.99] ${
                    active
                      ? 'bg-white text-black font-bold shadow-[0_0_25px_rgba(255,255,255,0.25)]'
                      : 'text-mono-200 hover:text-white hover:bg-white/[0.05] border border-white/[0.04]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? 'text-black' : 'text-mono-500'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer Actions */}
          <div className="pt-5 border-t border-white/10 mt-auto">
            {isAuthenticated && user ? (
              <div className="space-y-3">
                <div className="p-4 bg-white/[0.04] rounded-2xl flex items-center gap-3 border border-white/10">
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
                  className="w-full py-3"
                  onClick={() => { setMobileOpen(false); logout(); }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="w-full py-4 block text-center rounded-2xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-mono-100 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                Access Student Portal →
              </Link>
            )}
          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;
