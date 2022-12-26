/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        like: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(120%)" },
        },
        dislike: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-120%)" },
        },
        enter: {
          "0%": { transform: "translateY(40px) scale(0.9)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
      },
      animation: {
        like: "like 0.3s ease-in",
        dislike: "dislike 0.3s ease-in",
        enter: "enter 0.2s ease-in",
      },
    },
  },
  plugins: [],
};
