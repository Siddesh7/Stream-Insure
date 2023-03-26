/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#481f89",

          secondary: "#dbf79e",

          accent: "#8372db",

          neutral: "#1F1221",

          "base-100": "#3F3B40",

          info: "#9EB9F5",

          success: "#1A8977",

          warning: "#9C7707",

          error: "#EB5A47",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
