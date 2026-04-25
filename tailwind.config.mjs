/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff7ff',
          100: '#dceeff',
          200: '#b9ddff',
          300: '#84c4ff',
          400: '#49a6fa',
          500: '#3b9cf8',
          600: '#1a7fe0',
          700: '#1667b8',
          800: '#165693',
          900: '#184a79',
        },
        mint: {
          50: '#eefaf5',
          100: '#d2f3e5',
          200: '#a7e6cd',
          300: '#77d5b2',
          400: '#5dd4be',
          500: '#33bfa1',
          600: '#269a82',
          700: '#21796a',
          800: '#1e6155',
          900: '#1b5048',
        },
        ink: {
          900: '#0a1428',
          800: '#14233f',
          700: '#24345a',
          600: '#495676',
          500: '#6b7694',
          400: '#8f98b2',
          300: '#b9c0d1',
          200: '#dde1ec',
          100: '#eef1f7',
          50: '#f7f9fc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Hiragino Sans', 'Noto Sans JP', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'float-orb': 'float-orb 18s ease-in-out infinite',
        'rise-in': 'rise-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float-orb': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-25px, 20px) scale(0.95)' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
