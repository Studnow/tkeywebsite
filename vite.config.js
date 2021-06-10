const { resolve } = require("path");
import { defineConfig } from "vite";
import viteHandlebars from 'vite-plugin-handlebars';
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
      },
    },
  },
  plugins: [
    viteHandlebars({
      partialDirectory: resolve(__dirname, "./src/templates/parts/"),
    }),
    WindiCSS(),
  ],
});
