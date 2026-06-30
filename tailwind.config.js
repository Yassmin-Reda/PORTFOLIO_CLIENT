/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0E1A',
        surface: '#11162A',
        surface2: '#161C36',
        edge: '#232B4D',
        accent: {
          blue: '#5B8DEF',
          purple: '#9B6BFF',
          cyan: '#4FD8E8',
          pink: '#F472B6',
        },
        ink: {
          DEFAULT: '#E7EAF3',
          muted: '#8A93B2',
          faint: '#5A6184',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #5B8DEF 0%, #9B6BFF 100%)',
        'grad-radial': 'radial-gradient(circle at top right, rgba(91,141,239,0.18), transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(91,141,239,0.25)',
        'glow-purple': '0 0 40px rgba(155,107,255,0.25)',
        soft: '0 8px 30px rgba(0,0,0,0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
