/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c4913f',
          light: '#d4a24f',
          dark: '#a8782f',
          muted: 'rgba(196,145,63,0.3)',
        },
        cinema: {
          black: '#0a0a0a',
          dark: '#080808',
          deep: '#060606',
          warm: '#0e0c09',
        },
        cream: {
          DEFAULT: '#f5f0ea',
          muted: 'rgba(245,240,234,0.55)',
          faint: 'rgba(245,240,234,0.2)',
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ["'Jost'", 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        cinematic: '0.25em',
        wide: '0.15em',
        wider: '0.35em',
        widest: '0.55em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease forwards',
        'drift': 'drift 8s ease-in-out infinite alternate',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(18px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          'from': { transform: 'translate(0, 0)' },
          'to': { transform: 'translate(-40px, 30px)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
