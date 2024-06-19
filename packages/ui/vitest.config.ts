import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["setupTests.ts"],
		coverage: {
			provider: "istanbul",
			exclude: ["style/**", "src/lib/**", "**/styles.ts", "**.config.**"],
			reportsDirectory: "./coverage",
			reporter: ["text-summary", "html", "json", "lcov"],
		},
		outputFile: {
			html: "./coverage/html/index.html",
		},
	},
});