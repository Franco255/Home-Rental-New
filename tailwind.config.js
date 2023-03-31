/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        brightRed: 'hsla(14, 91%, 54%, 1)',
        brightGrey: 'hsla(0, 0%, 96%, 1)',
        lightRed: 'hsla(14, 91%, 54%, 0.07)',
      },
    },
  },
  plugins: [],
}
