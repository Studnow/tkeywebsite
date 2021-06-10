import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
  purge: {
    enabled: false, // for prod enabled: true, dev - enabled: false
    content: ["./src/pages/**/**/*.pug", "./src/index.js", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        text: ["sans-serif", "Raleway"],
        header: ["PlayfairDisplay"],
      },
      gridTemplateRows: {
        stretch: "auto 1fr auto",
      },
      outline: {
        accent: ["1px solid #D4C17F", "2px"],
        white: ["1px solid #fff", "2px"],
      },
      minHeight: {
        "0vh": "0vh",
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh",
      },
      minWidth: {
        "0vw": "0vw",
        "25vw": "25vw",
        "50vw": "50vw",
        "75vw": "75vw",
        320: "18rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});