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
          200: '#73cedc'
        },
        'fun-grey': {
          100: '#f8f8f8'
        }
      },
    },
  },
  plugins: [],
};