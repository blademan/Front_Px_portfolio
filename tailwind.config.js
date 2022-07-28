/** @type {import('tailwindcss').Config} */

const hue = 250;

module.exports = {
  darkMode: 'class',
  /* Change favorite color */
  /* HSL color mode */
  /*Purple 250 - Green 142 - Blue 230 - Pink 340*/

  content: [
    './src/**/*.{js,jsx}',
    './public/index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        /*========== Variables Dark theme ==========*/
        D_bodyColor: `hsl(${hue}, 28%, 12%)`,
        D_titleColor: `hsl(${hue}, 8%, 95%)`,
        D_textColor: `hsl(${hue}, 8%, 75%)`,
        /*========== Variables Button & Accent ==========*/
        firstColor: `hsl(${hue}, 69%, 61%)`,
        firstColorAlt: `hsl(${hue}, 57%, 53%)`,
        /*========== Variables Footer ==========*/
        D_firstColorSecond: `hsl(${hue}, 30%, 8%)`,
        D_inputColor: `hsl(${hue}, 29%, 16%)`,

        /*========== Variables Scroll Bar  ==========*/
        D_containerColor: `hsl(${hue}, 29%, 16%)`,
        D_scrollBarColor: `hsl(${hue}, 12%, 48%)`,
        D_scrollThumbColor: `hsl(${hue}, 12%, 36%)`,

        /*========== Variables Light theme ==========*/
        bodyColor: `hsl(${hue}, 60%, 99%)`,
        titleColor: `hsl(${hue}, 8%, 15%)`,
        textColor: `hsl(${hue}, 8%, 45%)`,

        firstColorSecond: `hsl(${hue}, 69%, 61%)`,
        firstColorLighter: `hsl(${hue}, 92%, 85%)`,
        textColorLight: `hsl(${hue}, 8%, 65%)`,
        inputColor: `hsl(${hue}, 70%, 96%)`,
        containerColor: `#fff`,
        scrollBarColor: `hsl(${hue}, 12%, 90%)`,
        scrollThumbColor: `hsl(${hue}, 12%, 80%)`,
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        cursive: ['Comfortaa', 'cursive'],
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('tw-elements/dist/plugin')],
};
