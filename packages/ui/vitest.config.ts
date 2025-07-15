/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["setupTests.ts"],
		coverage: {
			provider: "istanbul",
			exclude: ["style/**", "src/lib/**", "**/styles.ts", "**.config.**", "**.stories.**"],
			reportsDirectory: "./coverage",
			reporter: ["text-summary", "html", "json", "lcov"],
		},
		outputFile: {
			html: "./coverage/html/index.html",
		},
	},
});