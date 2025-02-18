module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '900px',
          xl: '900px',
          '2xl': '900px',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
