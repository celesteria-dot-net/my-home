module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        duma: ['Duma'],
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
};
