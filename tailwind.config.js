/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mono: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#141414',
          950: '#080808',
          pure: '#000000',
        },
        surface: {
          darkest: '#030303',
          card: '#0a0a0a',
          glass: 'rgba(12, 12, 12, 0.82)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        tech: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(255, 255, 255, 0.15)',
        'glow-md': '0 0 25px -5px rgba(255, 255, 255, 0.25)',
        'glow-lg': '0 0 45px -10px rgba(255, 255, 255, 0.35)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.07)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}