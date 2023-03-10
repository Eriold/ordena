// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@atom", replacement: path.resolve(__dirname, "src/components/atom/") },
      { find: "@molecule", replacement: path.resolve(__dirname, "src/components/molecule/") },
    ],
  },
  css: {
    preprocessorOptions: {
      styl: {
        additionalData: `$injectedColor ?= orange`
      }
    }
  }
});
