import base from "@arnaud-zg/configs/eslint/react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [
      "src/app/routeTree.gen.ts",
      "public/**",
      "playwright-report/**",
      "test-results/**",
    ],
  },
  ...base,
  { settings: { react: { version: "detect" } } },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        // Three programs: the app, the tooling and e2e specs, and the Vitest specs.
        project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.vitest.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
