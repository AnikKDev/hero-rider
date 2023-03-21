import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  scripts: {
    build: "vite build",
    preview: "vite preview",
  },
  /*  define: {
    "process.env": { test: process.env.REACT_APP_TEST },
  }, */
});
