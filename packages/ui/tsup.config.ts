import { defineConfig } from 'tsup';

export default defineConfig( ( options) => {
	console.log(options.format);
	const formatString = Array.isArray(options.format)
		? options.format.join("-")
		: options.format ?? "esm";

	return {
		entry:      [ "src/index.ts"],
		injectStyle: true,
		name:       "@eloquent/ui",
		tsconfig: `tsconfig-${formatString ?? "esm"}.json`,
		clean:      true,
		dts:        true,
		format: options.format ?? ["esm"],
		minify:     false,
		target:     "es2022",
		silent:     true,
		sourcemap:  true,
		outDir: `dist/${formatString ?? "esm"}`,
	}
} )