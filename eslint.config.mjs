import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Generated from the Claude Design export (scripts/convert-dc.mjs, scripts/build-ds.mjs).
    "src/site/*.generated.tsx",
    "src/ds/**",
    "design-source/**",
    "scripts/**",
  ]),
]);

export default eslintConfig;
