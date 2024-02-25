/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        winter: {
          ...require('daisyui/src/theming/themes')['winter'],
          warning: '33FFF8',
        },
      },
      {
        black: {
          ...require('daisyui/src/theming/themes')['black'],
          warning: 'C1FF33',
        },
      },
    ],
  },
};
