/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true
    },
    extend: {
      content: {
        'cross' : 'url("../assets/images/cross-vector.png")'
      },
      aspectRatio: {
        'aspect-1.5' : '1.5'
      },
      colors: {
        'light-red' : '#CE1212',
        'dark-red' : '#8E0D0D',
        'secondary-color' : '#EEEBDD',
        'fade-secondary-color' : 'rgb(238, 235, 221, 0.2)',
        'fade-white' : 'rgba(255, 255, 255, 0.1)'
      },
      maxWidth: {
        'max-w-20%' : '20%'
      },
      screens: {
        'xl': '1200px',
        '2xl' : '1200px'
      },
     fontFamily: {
      'roboto' : 'roboto'
     }
    },
  },
  plugins: [],
}
