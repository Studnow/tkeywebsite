import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";
// import colors from "windicss/colors";
// import plugin from "windicss/plugin";

export default defineConfig({
  extract: {
    include: ["index.html", "src/**/*.{html,pug,hbs}", "pages/**/*.html"],
    exclude: ["node_modules/**/*", ".git/**/*"],
  },
  theme: {
    colors: {
      common: "#313131",
      primary: "#49AD09",
      secondary: "#F2F2F2",
      white: "#fff",
      transparent: "transparent"
    },
  },
  plugins: [typography()],
});
