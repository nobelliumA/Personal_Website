/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./client/src/**/*.{html,js}", "./client/dist/**/*/{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        green: "0 35px 60px -15px rgb(56, 161, 105, 0.2)",
      },

      animation: {
        fade: "fadeIn .5s ease-in-out",
        typewriter: "typewriter 2s steps(11) forwards",
        caret: "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),

    // ...
  ],
};
