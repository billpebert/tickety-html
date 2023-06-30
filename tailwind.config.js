/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "50px",
        xl: "100px",
      },
    },
    extend: {
      colors: {
        "dark-indigo": "#0D0322",
        primary: "#27164B",
        secondary: "#82D0DF",
        "butter-yellow": "#F7FF82",
        "lavender-pink": "#DF82CB",
        "iron-grey": "#DAD5E4",
        "pastel-purple": "#A99FBD",
        "bluish-purple": "#38255F",
      },
    },
  },
  plugins: [],
}

