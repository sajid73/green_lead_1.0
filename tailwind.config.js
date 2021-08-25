module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner-lg': "url('/src/assets/images/pattern.png')",
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}