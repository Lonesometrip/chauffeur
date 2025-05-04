import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/chauffeur/',  // Use repository name for GitHub Pages
  build: {
    assetsInlineLimit: 0, // Ensure all assets are processed as files
  },
});
