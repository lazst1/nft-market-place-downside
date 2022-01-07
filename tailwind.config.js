const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#19cb58',
          800: '#19cb58',
          700: '#2ce970'
        },
        secondary: {
          900: '#1969cb',
          800: '#2d7cde',
          700: '#4191f2',
          600: '#2e2eff'
        },
        tertiary: {
          900: '#151515',
          800: '#222222',
          700: '#343434',
          600: '#535353',
          500: '#828282',
          400: '#949494',
          300: '#ffffff'
        }
      },
      fontSize: {
        xxs: ['11px', '14px']
      },
      fontFamily: {
        'awesome': ['fontawesome'],
        'ibm': ['ibm'],
        'ibm-medium': ['ibm-medium'],
        'ibm-bold': ['ibm-bold'],
        'ibm-semi-bold': ['ibm-semi-bold'],
        'ibm-light': ['ibm-light'],
        'ibm-thin': ['ibm-thin'],
        'press': ['press']
      },
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
