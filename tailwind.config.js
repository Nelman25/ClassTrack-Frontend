/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        regalBlue: "#34418E",
        goldenYellow: "#FFD51D",
        royalIndigo: "#2E2EA1",
        indigoBlue: "#4040A5",
        mistGray: "#e4e4e7",
        oceanBlue: "#337BB6",
        lushGreen: "#5CB85C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
