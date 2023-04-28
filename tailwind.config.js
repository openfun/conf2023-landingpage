const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-base)', ...fontFamily.sans],
      },
      colors: {
        'fun-blue': {
          900: '#0A2540',
          500: '#256BAF',
          200: '#73cedc',
          100: '#EEF5F5'
        },
        'fun-orange': {
          800: '#EB440A',
          700: '#ED500F',
          600: '#F16D1A',
          500: '#FBD070',
        },
        'fun-grey': {
          700: '#334155',
          300: '#C8C8C8',
          200: '#FBFAFC',
          100: '#f8f8f8'
        },
        'fun-black': {
          900: '#000000',
          500: '#1D1D1F',
          400: '#272727'
        }
      },
    },
  },
  plugins: [],
};