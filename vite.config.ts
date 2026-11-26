import type { Plugin } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

import { SITE_CONFIG } from "./src/config/site.config.ts";

// Umami's script tag, or nothing: then the page carries no analytics code. The id is read from
// the environment while building, or from .env. ANALYTICS=off turns it off, as a preview ship does.
function umamiAnalytics(websiteId: string, mode: string | undefined): Plugin {
  return {
    name: "umami-analytics",
    apply: "build",
    configResolved() {
      if (!websiteId && mode !== "off") {
        console.warn("[analytics] off: VITE_UMAMI_WEBSITE_ID is not set");
      }
    },
    transformIndexHtml() {
      if (!websiteId || mode === "off") return [];
      return [
        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://cloud.umami.is" },
          injectTo: "head-prepend",
        },
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://cloud.umami.is/script.js",
            "data-website-id": websiteId,
          },
          injectTo: "head",
        },
      ];
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, import.meta.dirname, "");

  return {
    // Set by Shiplane: the folder a preview lives in.
    base: process.env.BASE_PATH ?? SITE_CONFIG.basePath,
    plugins: [
      tanstackRouter({
        autoCodeSplitting: true,
        routesDirectory: "./src/app/routes",
        generatedRouteTree: "./src/app/routeTree.gen.ts",
      }),
      viteReact(),
      tailwindcss(),
      // The prerender's server build writes no HTML.
      !isSsrBuild &&
        umamiAnalytics(env.VITE_UMAMI_WEBSITE_ID ?? "", process.env.ANALYTICS || undefined),
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
  };
});
