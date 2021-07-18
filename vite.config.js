import { resolve } from "path";
import { defineConfig } from "vite";

// plugins

import viteHandlebars from "vite-plugin-handlebars";
import WindiCSS from "vite-plugin-windicss";
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "./pages/about.html"),
        some: resolve(__dirname, "./pages/some.html"),
      },
    },
  },
  plugins: [
    pugPlugin(),
    viteHandlebars({
      partialDirectory: [
        resolve(__dirname, "src/templates/layout/hbs"),
        // resolve(__dirname, "src/templates/components"),
      ],
    }),
    WindiCSS(),
  ],
});
