const colors = require("tailwindcss/colors");

module.exports = {
  "tailwindCSS.includeLanguages": { plaintext: "javascript" },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#DADAE6",
      primary: "#2929CC",
      secondary: "#6677CC",
      dark: "#141466",
      bright: "#f5f7ff",
      red: colors.red,
      green: colors.green,
    },
  },
  plugins: [],
};
