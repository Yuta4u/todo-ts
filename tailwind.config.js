/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "profile-hover": "rgba(183, 183, 183, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
}
