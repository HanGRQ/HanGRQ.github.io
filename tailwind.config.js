/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          500: '#FF6B6B',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      height: {
        screen: '100vh',
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};