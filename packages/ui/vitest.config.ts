import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig( {
	test: {
		environment: "jsdom",
		reporters: ["html", "json"],
		coverage: {
			provider: "istanbul",
			exclude:[
				"style/**",
				"src/lib/**",
				"**/styles.ts",
				"**.config.**",
			]
		}
	},

} )
