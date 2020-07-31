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
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
