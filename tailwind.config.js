/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        mycustom: "70fr 30fr",
      },
    },
  },
  plugins: [],
};
