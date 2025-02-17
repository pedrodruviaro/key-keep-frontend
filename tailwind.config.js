module.exports = {
  purge: ["./components/**/*.{vue,js}", "./layouts/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
