/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#d946ef",
          2: "#e879f9",
          5: "#fae8ff",
        },
        mono: {
          1: "#1e293b",
          2: "#64748b",
          3: "#cbd5e1",
        },
      },
      keyframes: {
        like: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(120%)" },
        },
        dislike: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-120%)" },
        },
      },
      animation: {
        like: "like 0.3s ease-in",
        dislike: "dislike 0.3s ease-in",
      },
    },
  },
  plugins: [],
};
