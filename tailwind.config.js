/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        ink: '#050608',
        panel: '#0b0d11',
        line: '#24262d',
        ivory: '#f2eee5',
        muted: '#9a9aa1',
        gold: '#d9b24b',
      },
      fontFamily: {
        display: ['Anton', 'Arial Narrow', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        cinema: '0 30px 90px rgba(0,0,0,.45)',
      },
      transitionDelay: {
        80: '80ms',
        120: '120ms',
        160: '160ms',
        220: '220ms',
        240: '240ms',
        340: '340ms',
      },
    },
  },
  plugins: [],
};
