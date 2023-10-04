/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffe4e6",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "128px",
      laptop: "1280px",
    },
    extend: {
      colors: {
        hover: "rgba(183, 183, 183, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
}
