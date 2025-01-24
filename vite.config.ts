import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/devvoid-portfolio/", //only relevant for github pages
  base: "/",
  plugins: [react(), tsconfigPaths()],
});
