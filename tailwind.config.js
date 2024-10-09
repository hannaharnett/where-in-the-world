/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        border: "rgba(0, 0, 0, 0.2)",
        shadow: "rgba(0, 0, 0, 0.1)",
        elements: "hsl(0, 0%, 100%)",
        darkElements: "hsl(209, 23%, 22%)",
        text: "hsl(200, 15%, 8%)",
        darkText: "hsl(0, 0%, 100%)",
        textInput: "hsl(0, 0%, 52%)",
        background: "hsl(0, 0%, 98%)",
        darkBackground: "hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
};
