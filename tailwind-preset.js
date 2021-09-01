
/**
* @desc preset for tailwind css
* @author Ron Zhou
* @date 2021/08/25
*/

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //断点
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    //重置spacing，以16px为rem基准，名字对应实际px值
    spacing: {
      px: '1px',
      0: '0px',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      36: '2.25rem',
      40: '2.5rem',
      50: '3.125rem',
      60: '3.75rem',
      70: '4.375rem',
      80: '5rem',
      100: '6.25rem',
    },
    // 颜色的级别和对应的值需要与设计方面商讨(Ron 2021-08-18)
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // 常用系统颜色
      black: colors.black, // #000000
      white: colors.white, // #ffffff
      gray: colors.gray,
      red: colors.red, // error box
      green: colors.green, // success box
      blue: colors.blue, // links, info box
      yellow: colors.amber, // warning box

      // 设置产品主体颜色，具体分级需要与设计方面沟通 (以DE Web中文版的设计颜色)
      primary: {
        light: '#E7F6EC', // disabled...
        DEFAULT: '#57BD78', // default
        dark: '#39AB5E', //hover...
      },
      secondary: {
        light: '#E7F6EC',
        DEFAULT: '#57BD78',
        dark: '#39AB5E',
      },
    },
    // 重置圆角半径，名字对应实际px值
    borderRadius: {
      'none': '0',
      '2': '0.125rem',
      DEFAULT: '0.25rem',
      '6': '0.375rem',
      '8': '0.5rem',
      'full': '9999px',
    },
    // 重置透明度
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    //重设 font size
    fontSize: {
      12: '.75rem',
      13: '.8125rem',
      14: '.875rem',
      15: '.9375rem',
      16: '1rem',
      17: '1.0625rem',
      18: '1.125',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      60: '3.75rem',
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
