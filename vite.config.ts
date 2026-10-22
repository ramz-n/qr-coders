import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prerender from "vite-plugin-prerender";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    (prerender as any)({
      staticDir: path.join(__dirname, "dist"),
      routes: ["/"],
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/gsap")) {
            return "vendor-gsap";
          }
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "vendor-core";
          }
          if (id.includes("node_modules")) {
            return "vendor-libs";
          }
        },
      },
    },
  },
});
