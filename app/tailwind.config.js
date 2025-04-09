// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#316BFF",
        accent: "#28C57C",
        privacy: "#4A4A4A",
        bg: "#F9FAFB",
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}