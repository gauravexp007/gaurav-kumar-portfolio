/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#060608',
        ink2: '#0a0a0f',
        ink3: '#101017',
        chalk: '#f4f4f5',
        muted: '#9a9aa8',
        wine: '#c94f66',
        violet: '#7a5cff',
        cyan: '#3ce6ff',
        maroon: '#7a1f35',
        'maroon-deep': '#2b0a13',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        name: ['"LEMON MILK"', '"Space Grotesk"', 'ui-sans-serif', 'sans-serif'],
        impact: ['Impact', 'Anton', '"Arial Black"', 'ui-sans-serif', 'sans-serif'],
        sc: ['"Alegreya Sans SC"', '"Space Grotesk"', 'ui-sans-serif', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        signature: ['"Brenford Italic"', '"Instrument Serif"', 'Georgia', 'serif'],
        sword: ['Blacksword', '"Brenford Italic"', '"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'spin-slow': 'spin 26s linear infinite',
        'spin-slower': 'spin 44s linear infinite reverse',
        float: 'float 7s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 1.2s infinite',
        'pulse-ring': 'pulseRing 3.4s ease-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        eq: 'eq 1.1s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(.7)', opacity: '.6' },
          '80%,100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        eq: {
          '0%,100%': { transform: 'scaleY(.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
