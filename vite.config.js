import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: './',  // Use relative paths for assets
  build: {
    assetsInlineLimit: 0, // Ensure all assets are processed as files
  },
});
