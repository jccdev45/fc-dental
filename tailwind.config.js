module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      // sans: ["Papyrus"],
      // serif: ["Papyrus"],
      // mono: ["Papyrus"],
    },
    extend: {
      colors: {
        "primary-color": "#0076C2",
        "link-color": "#FFF",
      },
    },
  },
  variants: {
    margin: ['first', 'last', 'responsive'],
    transition: ['active', 'hover', 'focus']
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
