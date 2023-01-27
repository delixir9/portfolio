/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      animation: {
        bounce: 'bounce 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}
