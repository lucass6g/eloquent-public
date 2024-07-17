import {defineConfig} from 'tsup';

export default defineConfig((options) => {
    const formatString = Array.isArray(options.format)
        ? options.format.join("-")
        : options.format ?? "esm";
    return {
        name: "@eloquent/ui",
        entry: ["src/index.ts", "src/components/**/index.tsx", "src/components/Typography/index.ts"],
        format: options.format ?? ["esm"],
        external: ["react", "react-dom", "react-hook-form"],
        minify: false,
        tsconfig: `tsconfig-${formatString ?? "esm"}.json`,
        clean: true,
        dts: true,
        target: "es2022",
        silent: false,
        outDir: `dist/${formatString ?? "esm"}`,
    }
})