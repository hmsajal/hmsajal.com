const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { ...colors, transparent: "transparent", current: "currentColor" },
    extend: {
      letterSpacing: {
        widehp: ".025rem",
        wide1p: ".0625rem",
        wide2p: ".125rem",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
