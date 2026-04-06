import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// User site username.github.io → base "/". For project pages set base: "/repo-name/"
export default defineConfig({
  plugins: [react()],
  base: "/",
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
  },
});
