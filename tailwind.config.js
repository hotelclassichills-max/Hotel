/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1F3B2E',
          50: '#EEF2EF',
          100: '#D6E0D9',
          200: '#AEC2B4',
          300: '#84A38F',
          400: '#5A836A',
          500: '#3B6349',
          600: '#2A4E38',
          700: '#1F3B2E',
          800: '#162A21',
          900: '#0E1B15',
        },
        ivory: {
          DEFAULT: '#F7F2E9',
          soft: '#FBF8F2',
        },
        charcoal: {
          DEFAULT: '#2A2724',
          light: '#423E39',
        },
        stone: {
          DEFAULT: '#A79885',
          light: '#C9BCA9',
          dark: '#8A7A66',
        },
        saffron: {
          DEFAULT: '#C08A34',
          light: '#D9A85C',
          dark: '#9A6D26',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif2: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(20, 26, 20, 0.25)',
        card: '0 6px 24px -8px rgba(20, 26, 20, 0.18)',
      },
      transitionTimingFunction: {
        'refined': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        'contour': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 60' preserveAspectRatio='none'%3E%3Cpath d='M0 40 Q150 10 300 35 T600 30 T900 40 T1200 25' fill='none' stroke='%23C08A34' stroke-width='1' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}
