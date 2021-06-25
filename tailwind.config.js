const colors = require('tailwindcss/colors');
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.gray[300],
        secondary: colors.gray[500],
        trim: colors.black,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
