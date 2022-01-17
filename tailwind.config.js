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
          800: '#23db65',
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
        xxs: ['11px', '14px'],
        xg: ['19px', '28px'],
        '2.5xl': '26px'
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
      screens: {
        '3xl': '1920px'
      },
      spacing: {
        '0.75': '3px',
        '1.25': '5px',
        '1.75': '7px',
        '2.25': '9px',
        '4.5': '18px',
        '4.75': '19px',
        '5.25': '21px',
        '13': '52px',
        '13.5': '54px',
        '17': '68px',
        '17.5': '70px',
        '22': '88px',
        '30': '120px',
        '32.5': '130px',
        '37': '148px',
        '42': '168px',
        '42.5': '170px',
        '47': '188px',
        '50': '200px',
        '58': '232px',
        '68': '17rem',
        '79': '316px',
        '82.5': '330px',
        '90.75': '363px',
        '104': '416px',
        'modal-big': '1444px'
      },
      lineHeight: {
        '5.25': '21px',
        '5.5': '22px',
        '12.5': '50px'
      },
      letterSpacing: {
        wide: '.2em'
      }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
