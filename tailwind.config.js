/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./form.html",
    "./policy.html",
    "./services/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
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
      fontFamily: {
        unbounded: ['"Unbounded"', "sans-serif"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
      spacing: {
        "fluid-1": "clamp(0.5rem, 1vw, 1rem)",
        "fluid-2": "clamp(1rem, 2vw, 2rem)",
        "fluid-3": "clamp(1.5rem, 3vw, 3rem)",
        "fluid-4": "clamp(2rem, 4vw, 4rem)",
        "fluid-5": "clamp(3rem, 5vw, 5rem)",
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 1.2vw, 1.2rem)",
        "fluid-base": "clamp(1rem, 1.4vw, 1.4rem)",
        "fluid-lg": "clamp(1.125rem, 1.6vw, 1.6rem)",
        "fluid-xl": "clamp(1.25rem, 1.8vw, 1.8rem)",
        "fluid-2xl": "clamp(1.5rem, 2.2vw, 2.2rem)",
        "fluid-3xl": "clamp(1.875rem, 2.6vw, 2.6rem)",
        "fluid-4xl": "clamp(2.25rem, 3vw, 3rem)",
        "fluid-5xl": "clamp(3rem, 4vw, 4rem)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
