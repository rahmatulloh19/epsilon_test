/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          default: "1152px",
        },
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
