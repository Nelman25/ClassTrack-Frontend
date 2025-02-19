/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        regalBlue: "#34418E",
        goldenYellow: "#FFD51D",
        royalIndigo: "#2E2EA1",
        indigoBlue: "#4040A5",
        mistGray: "#e4e4e7",
      },
    },
  },
  plugins: [],
};
