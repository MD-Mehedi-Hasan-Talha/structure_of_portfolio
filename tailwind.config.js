/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      md: "950px",
      lg: "1500px"
    },
    extend: {
      fontFamily: {
        // "...": "..."
      },
      colors: {
        primary: "#111827",
        secondary: "#0891b2",
      },
    },
  },
  plugins: [],
};
