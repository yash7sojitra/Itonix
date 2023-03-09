/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-orange": "#FF4900",
        "theme-orange-opacity": "#Ff49001A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
