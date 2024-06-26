import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/theme.css"],
  format: ["cjs", "esm"],
  minify: false,
  bundle: true,
  clean: true,
  dts: true,
  splitting: true,
  treeshake: true,
});
