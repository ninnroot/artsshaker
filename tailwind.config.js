const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: colors.transparent,
      current: 'currentColor',
      white: colors.white,
      black: '#000000',
      green: '#ADF6B1',
      blue: colors.blue,
      jasmine: '#FFCD70',
      gray: '#24272D',
      yellow: {
        primary: '#E6AF2E',
        hover: '#8bbee8',
      },
    },
    fontFamily: {
      header: ['Noto Sans', 'sans-serif'],
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
