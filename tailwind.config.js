/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#fdc900",
        graylight: "#838383",
        primary: "#69b99d",
        secondary: "#0f241d",
        orangedark: "#23250e",
        blue: "#2a63ff",
        bluedark: "#1e3a8a",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
