import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks';

interface HeroMasterpieceProps {
  onOpenAuth?: (mode?: 'login' | 'signup') => void;
}

const HeroVideoBackground = React.memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.75;

    const playVideo = () => {
      video.playbackRate = 0.75;
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    };

    playVideo();

    const handlePlay = () => {
      video.playbackRate = 0.75;
    };

    const handleLoop = () => {
      if (video.duration && video.currentTime >= video.duration - 0.08) {
        video.currentTime = 0.01;
        playVideo();
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('timeupdate', handleLoop);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('timeupdate', handleLoop);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="hero-bg-video"
      >
        <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <div className="hero-grid-bg" />
      <div className="hero-grid-gradient" />
    </>
  );
});

interface KineticLetterProps {
  char: string;
  index: number;
  isLoaded: boolean;
  isAccent?: boolean;
}

const CHAR_VECTORS = [
  { kx1: '5px', ky1: '-15px', kz1: '28px', kx2: '-7px', ky2: '12px', kz2: '-16px', kx3: '4px', ky3: '-6px', kz3: '14px' },
  { kx1: '-6px', ky1: '-12px', kz1: '22px', kx2: '8px', ky2: '10px', kz2: '-14px', kx3: '-4px', ky3: '-5px', kz3: '12px' },
  { kx1: '7px', ky1: '-16px', kz1: '32px', kx2: '-9px', ky2: '14px', kz2: '-18px', kx3: '5px', ky3: '-7px', kz3: '16px' },
  { kx1: '-5px', ky1: '-13px', kz1: '24px', kx2: '7px', ky2: '11px', kz2: '-15px', kx3: '-5px', ky3: '-6px', kz3: '14px' },
  { kx1: '6px', ky1: '-15px', kz1: '26px', kx2: '-8px', ky2: '10px', kz2: '-14px', kx3: '4px', ky3: '-5px', kz3: '12px' },
  { kx1: '-7px', ky1: '-14px', kz1: '30px', kx2: '9px', ky2: '12px', kz2: '-17px', kx3: '-6px', ky3: '-7px', kz3: '15px' },
  { kx1: '4px', ky1: '-12px', kz1: '20px', kx2: '-6px', ky2: '8px', kz2: '-12px', kx3: '3px', ky3: '-4px', kz3: '10px' },
  { kx1: '-6px', ky1: '-15px', kz1: '28px', kx2: '8px', ky2: '11px', kz2: '-16px', kx3: '-5px', ky3: '-6px', kz3: '14px' },
  { kx1: '5px', ky1: '-13px', kz1: '22px', kx2: '-7px', ky2: '9px', kz2: '-13px', kx3: '4px', ky3: '-5px', kz3: '11px' },
  { kx1: '-8px', ky1: '-16px', kz1: '32px', kx2: '10px', ky2: '14px', kz2: '-18px', kx3: '-6px', ky3: '-7px', kz3: '16px' },
  { kx1: '4px', ky1: '-11px', kz1: '20px', kx2: '-5px', ky2: '8px', kz2: '-12px', kx3: '3px', ky3: '-4px', kz3: '10px' },
  { kx1: '-6px', ky1: '-14px', kz1: '26px', kx2: '8px', ky2: '11px', kz2: '-15px', kx3: '-5px', ky3: '-6px', kz3: '13px' },
  { kx1: '7px', ky1: '-15px', kz1: '30px', kx2: '-9px', ky2: '12px', kz2: '-17px', kx3: '5px', ky3: '-6px', kz3: '15px' },
  { kx1: '-4px', ky1: '-12px', kz1: '22px', kx2: '6px', ky2: '9px', kz2: '-13px', kx3: '-3px', ky3: '-5px', kz3: '11px' },
  { kx1: '6px', ky1: '-14px', kz1: '28px', kx2: '-8px', ky2: '11px', kz2: '-16px', kx3: '5px', ky3: '-6px', kz3: '14px' },
  { kx1: '-7px', ky1: '-15px', kz1: '26px', kx2: '9px', ky2: '12px', kz2: '-15px', kx3: '-5px', ky3: '-6px', kz3: '13px' },
  { kx1: '5px', ky1: '-16px', kz1: '34px', kx2: '-7px', ky2: '14px', kz2: '-20px', kx3: '4px', ky3: '-8px', kz3: '18px' },
];

const KineticLetter: React.FC<KineticLetterProps> = ({ char, index, isLoaded, isAccent }) => {
  const v = CHAR_VECTORS[index % CHAR_VECTORS.length];
  const delay = index * 0.85;

  return (
    <span
      className={`char ${isAccent ? 'text-white' : ''}`}
      style={
        {
          '--kx1': v.kx1,
          '--ky1': v.ky1,
          '--kz1': v.kz1,
          '--kx2': v.kx2,
          '--ky2': v.ky2,
          '--kz2': v.kz2,
          '--kx3': v.kx3,
          '--ky3': v.ky3,
          '--kz3': v.kz3,
          '--cycle-dur': '22s',
          '--cycle-delay': `${delay}s`,
          transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${80 + index * 32}ms, opacity 0.75s ease ${80 + index * 32}ms`,
          transform: isLoaded ? 'translateY(0%)' : 'translateY(120%)',
          opacity: isLoaded ? 1 : 0,
        } as React.CSSProperties
      }
    >
      {char}
    </span>
  );
};

export const HeroMasterpiece: React.FC<HeroMasterpieceProps> = () => {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if ((window as any).__preloaderDone || reducedMotion) {
      const timer = setTimeout(() => setIsLoaded(true), 40);
      return () => clearTimeout(timer);
    }

    const handlePreloaderDone = () => {
      setTimeout(() => setIsLoaded(true), 60);
    };

    window.addEventListener('site-preloader-done', handlePreloaderDone);

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      window.removeEventListener('site-preloader-done', handlePreloaderDone);
      clearTimeout(fallbackTimer);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (tiltRef.current) {
        tiltRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.2}deg) rotateX(${-y * 2.2}deg)`;
      }
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [reducedMotion]);

  return (
    <section
      ref={heroRef}
      className="hero relative min-h-screen flex flex-col justify-between select-none overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
      id="hero"
    >
      <HeroVideoBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full flex flex-col justify-between flex-1">
        
        <div
          ref={tiltRef}
          className="hero-main pt-8 sm:pt-14 max-w-3xl text-left"
          style={{
            transition: 'transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          
          <div
            className={`hero-subtitle-pill gap-2.5 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse" />
            <span className="font-semibold tracking-widest text-white text-[11px] uppercase font-mono">
              ADL FRONT // ACTIVE COHORT IV
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#ff453a]/10 border border-[#ff453a]/25 text-[#ff453a] font-mono text-[9px] font-bold uppercase tracking-wider">
              <span className="w-1 h-1 rounded-full bg-[#ff453a] animate-pulse" />
              LIVE
            </span>
          </div>

          <div className="overflow-hidden mt-2">
            <h1 className="hero-title text-left select-none">
              <div>
                <span className="word inline-block overflow-hidden">
                  <KineticLetter char="A" index={0} isLoaded={isLoaded} />
                  <KineticLetter char="L" index={1} isLoaded={isLoaded} />
                </span>{' '}
                <span className="word inline-block overflow-hidden">
                  <KineticLetter char="S" index={2} isLoaded={isLoaded} />
                  <KineticLetter char="Y" index={3} isLoaded={isLoaded} />
                  <KineticLetter char="E" index={4} isLoaded={isLoaded} />
                  <KineticLetter char="D" index={5} isLoaded={isLoaded} />
                </span>
              </div>

              <div className="mt-1">
                <span className="word inline-block overflow-hidden">
                  <KineticLetter char="I" index={6} isLoaded={isLoaded} />
                  <KineticLetter char="N" index={7} isLoaded={isLoaded} />
                  <KineticLetter char="I" index={8} isLoaded={isLoaded} />
                  <KineticLetter char="T" index={9} isLoaded={isLoaded} />
                  <KineticLetter char="I" index={10} isLoaded={isLoaded} />
                  <KineticLetter char="A" index={11} isLoaded={isLoaded} />
                  <KineticLetter char="T" index={12} isLoaded={isLoaded} />
                  <KineticLetter char="I" index={13} isLoaded={isLoaded} />
                  <KineticLetter char="V" index={14} isLoaded={isLoaded} />
                  <KineticLetter char="E" index={15} isLoaded={isLoaded} />
                  <KineticLetter char="." index={16} isLoaded={isLoaded} isAccent />
                </span>
              </div>
            </h1>
          </div>

          <div className="overflow-hidden mt-6 mb-8">
            <p
              className={`hero-desc text-left transition-all duration-900 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[115%] opacity-0'
              }`}
            >
              The skill isn't knowing more.
              <br />
              It's knowing how.
              <br />
              <span className="text-white/60 text-sm sm:text-base font-normal mt-2 block">
                Field-grade cyber intelligence education built around structured investigation and operational methodology.
              </span>
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              className={`featured-btn-group items-center transition-all duration-900 delay-450 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
              }`}
            >
              <Link
                to="/courses"
                className="btn-primary btn-shine-sweep flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.18)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#divisions"
                className="btn-secondary flex items-center gap-2"
              >
                <span>Our Methodology</span>
              </a>
            </div>
          </div>

        </div>

        <div
          className={`hero-footer transition-all duration-1000 delay-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="hero-metrics">
            <div className="glass-stat-card text-left group">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                <span className="text-[10px] font-mono text-white/60 tracking-wider uppercase font-semibold">CADRE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">1,000+</h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                INVESTIGATORS TRAINED
              </p>
            </div>

            <div className="glass-stat-card text-left group">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_6px_#30d158]" />
                <span className="text-[10px] font-mono text-[#30d158] tracking-wider uppercase font-semibold">COMPLIANCE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">100%</h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                LAWFUL & ETHICAL STANDARD
              </p>
            </div>

            <div className="glass-stat-card text-left group">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff453a] shadow-[0_0_6px_#ff453a]" />
                <span className="text-[10px] font-mono text-[#ff453a] tracking-wider uppercase font-semibold">STATUS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">03</h3>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#86868b] font-semibold mt-1 font-mono">
                COMPLETED OPERATIONAL COHORTS
              </p>
            </div>
          </div>

          <div className="hero-location flex items-center gap-2.5 pb-2">
            <span className="w-2 h-2 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158] animate-pulse shrink-0" />
            <span className="text-xs uppercase font-mono tracking-wider text-[#86868b] font-semibold">
              ADL FRONT // BATCH IV ACTIVE
            </span>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

    </section>
  );
};
