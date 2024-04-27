import { defineConfig } from 'tsup';

export default defineConfig({
	name: "@eloquent/tokens",
	entry: ["src/index.ts", "src/colors/index.ts", "src/tailwind.config-preset.js"],
	outDir: "dist",
	target: "esnext",
	tsconfig: "tsconfig.json",
	format: ["cjs", "esm"],
	splitting: false,
	sourcemap: true,
	clean: true,
	treeshake: true,
	dts: true,
})