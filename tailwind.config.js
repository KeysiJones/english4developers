module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xsm': { 'min': '0px', 'max': '600px' },
      'sm': { 'min': '0px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '4000px' },
      'xl': { 'min': '1280px', 'max': '1535px' },
      '2xl': { 'min': '1536px' }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}