import { PALETTE_COLORS, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, SPACING } from "@/index"

export const config = {
	content: [
		"node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme:   {
		extend: {
			colors:     PALETTE_COLORS,
			fontSize:   FONT_SIZE,
			fontFamily: FONT_FAMILY,
			fontWeight: FONT_WEIGHT,
			spacing:    SPACING,
		},
	},
}
