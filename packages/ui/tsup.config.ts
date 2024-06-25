import {defineConfig} from 'tsup';

const useClientRegex = /['"]use client['"]\s?;/i;

export default defineConfig({
    name: "@eloquent/ui",
    entry: ["src/components/**/*.tsx"],
    format: ["cjs", "esm"],
    minify: true,
    tsconfig: "tsconfig.json",
    bundle: true,
    clean: true,
    dts: true,
    target: "es2022",
    silent: false,
    esbuildPlugins: [
        {
            name: "use-client",
            setup(build) {
                build.onEnd((result) => {
                    result.outputFiles?.forEach((file) => {
                        if (file.text.match(useClientRegex)) {
                            Object.defineProperty(file, "text", {
                                value:
                                    '"use client";\n' + file.text.replace(useClientRegex, ""),
                            });
                        }
                    });
                });
            },
        },
    ],
    outDir: "dist",
})