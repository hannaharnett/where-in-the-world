/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "rgba(0, 0, 0, 0.2)",
        shadow: "rgba(0, 0, 0, 0.1)",
        elements: "hsl(0, 0%, 100%)",
        text: "hsl(200, 15%, 8%)",
        textInput: "hsl(0, 0%, 52%)",
        background: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
