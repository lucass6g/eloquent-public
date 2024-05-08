import {EloquentPreset} from "../../packages/tokens/src/tailwind.config-preset"
import type { Config }    from "tailwindcss";

module.exports = function ( app ) {
	return {
		darkMode: [ "class" ],
		content:  [
			"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/**/*.{js,ts,jsx,tsx,mdx}",
			"node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
		],
		theme:    {
			container: {
				center:  true,
				padding: "2rem",
			},
		},
		plugins:  [ require( "tailwindcss-animate" )],
		presets: [EloquentPreset]
	} satisfies Config;
};
