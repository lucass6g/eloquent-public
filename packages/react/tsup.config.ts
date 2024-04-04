import { defineConfig } from 'tsup';

export default defineConfig({
	name: "@eloquent/react",
	entry: ["src/index.ts"],
	outDir: "dist",
	target: "es2022",
	format: ["cjs", "esm"],
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,
	external: ["react", 'react-dom', 'react/jsx-runtime'],
	cjsInterop: true,
	treeshake: true,
})