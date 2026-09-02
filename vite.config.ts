import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { SITE_CONFIG } from "./src/config/site.config.ts";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  base: SITE_CONFIG.basePath,
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
      routesDirectory: "./src/app/routes",
      generatedRouteTree: "./src/app/routeTree.gen.ts",
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  build: {
    // Route-level code splitting produces separate chunks that each get their own copy of
    // any module calling createContext(), so a provider in one chunk can't reach a consumer
    // in another: the prerender script hits every route in one process, so it needs them
    // all bundled together instead.
    rollupOptions: isSsrBuild ? { output: { codeSplitting: false } } : undefined,
  },
}));
