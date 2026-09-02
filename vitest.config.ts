import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// Separate from vite.config.ts on purpose: tests don't need the TanStack Router codegen
// plugin or Tailwind, and keeping this standalone keeps that boundary explicit.
export default defineConfig({
  plugins: [viteReact()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "node",
          include: ["src/domain/**/*.spec.ts", "src/i18n/**/*.spec.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "integration",
          environment: "jsdom",
          setupFiles: ["./vitest.setup.ts"],
          include: [
            "src/ui/**/*.spec.{ts,tsx}",
            "src/app/**/*.spec.{ts,tsx}",
            "src/i18n/**/*.spec.tsx",
          ],
        },
      },
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: [
        "src/domain/**/*.{ts,tsx}",
        "src/ui/**/*.{ts,tsx}",
        "src/i18n/**/*.{ts,tsx}",
      ],
      exclude: ["src/**/__spec__/**", "src/**/*.spec.{ts,tsx}", "src/ui/primitives/**"],
      thresholds: {
        "src/domain/**": {
          statements: 90,
          branches: 85,
          functions: 90,
          lines: 90,
        },
        "src/ui/**": {
          statements: 70,
          branches: 55,
          functions: 65,
          lines: 70,
        },
      },
    },
  },
});
