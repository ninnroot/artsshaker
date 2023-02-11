/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      green: '#ADF6B1',
      jasmine: '#FFCD70',
      gray: '#24272D',
      yellow: {
        primary: '#E6AF2E',
        hover: '#F5D061',
      },
    },
    fontFamily: {
      header: ['Rosario', 'sans-serif'],
      body: ['Nunito Sans', 'sans-serif'],
      title: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
};
