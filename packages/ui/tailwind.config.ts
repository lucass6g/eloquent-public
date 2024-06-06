import {eloquentPreset} from '@eloquent/tokens'
import type { Config }                                          from "tailwindcss";

module.exports = {
	darkMode: [ "class" ],
	content:  [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/stories/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	presets: [ eloquentPreset ],
	plugins:  [ require( "tailwindcss-animate" ) ],
} satisfies Config;
