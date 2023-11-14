const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      }
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: colors.green,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      white: {
        DEFAULT: '#ffffff',
      },
      accent: {
        100: '#f78419',
        200: '#d66700',
        DEFAULT: '#f78419',
      }
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
