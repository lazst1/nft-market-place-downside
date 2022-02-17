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
          700: '#2ce970',
          600: '#28de68',
          500: '#48fd89',
          400: '#39ef7a'
        },
        secondary: {
          900: '#1969cb',
          800: '#2d7cde',
          700: '#4191f2',
          600: '#2e2eff',
          500: '#2b7de2',
          400: '#5da5de',
          300: '#4f99f5'
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
        smallest: ['8px'],
        '10': ['10px'],
        xxs: ['11px', '14px'],
        xg: ['19px', '28px'],
        '2.5xl': '26px',
        description: ['13px', '20px'],
        'home-lg': ['36px', 1.68],
        'home-md': ['30px', 1.6],
        'home-sm': ['21px', 1.72],
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
        '3.25': '13px',
        '4.25': '17px',
        '4.5': '18px',
        '4.75': '19px',
        '5.25': '21px',
        '5.5': '22px',
        '5.75': '23px',
        '6.25': '25px',
        '6.5': '26px',
        '7.5': '30px',
        '8.25': '33px',
        '8.5': '34px',
        '10.25': '41px',
        '10.75': '43px',
        '12.5': '50px',
        '12.75': '51px',
        '13': '52px',
        '13.5': '54px',
        '14.75': '59px',
        '15': '60px',
        '17': '68px',
        '17.25': '69px',
        '17.5': '70px',
        '22': '88px',
        '22.5': '90px',
        '23.5': '94px',
        '30': '120px',
        '32.5': '130px',
        '33.25': '133px',
        '36.75': '147px',
        '37': '148px',
        '42': '168px',
        '42.5': '170px',
        '45.75': '183px',
        '46.25': '185px',
        '47': '188px',
        '50': '200px',
        '58': '232px',
        '68': '17rem',
        '68.5': '274px',
        '70.75': '283px',
        '79': '316px',
        '82.5': '330px',
        '90.75': '363px',
        '104': '416px',
        'modal-big': '1444px',
        'modal-md': '1171px',
        'summary-xs': '251px',
        'summary-sm': '300px',
        'asset-img': '500px',
        'home-lg': '865px',
        'home-md': '700px',
        'home-sm': '320px',
        'xl-text': '800px',
        'full': '100%',
        '2/3': '60%',
        '55per': '55%',
        '60per': '60%',
        '65per': '65%',
        '70per': '70%',
        '73per': '73%',
      },
      lineHeight: {
        '5.25': '21px',
        '5.5': '22px',
        '9.5': '2.375rem',
        '12.5': '50px',
        'relaxed': '1.66'
      },
      letterSpacing: {
        wide: '.2em'
      },
      maxWidth: {
        md: '252px',
        '8xl': '1920px'
      },
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
