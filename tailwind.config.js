/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sans: ["Roboto", "sana-serif"],
      gridTemplateColumns: {
        "70/30": "70% 30%",
      },
    },
  },
  plugins: [],
};
