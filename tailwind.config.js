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
      blue: '#5AD2F4',
      jasmine: '#FFCD70',
    },
    fontFamily: {
      header: ['Rosario', 'sans-serif'],
      body: ['Nunito Sans', 'sans-serif'],
      body2: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
};
