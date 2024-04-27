import {ALERT, GREEN_DARK, GREEN_LIGHT, INFORMATIVE, NEGATIVE, NEUTRAL, POSITIVE, RED, BLUE, YELLOW} from './colors'
import {LINE_HEIGHT} from './line-height.ts'
import {BORDER_WIDTH} from './border.ts'
import {SPACING} from './spacing.ts'
import {FONT_SIZE} from "./font.ts";
export const config = {
	content: [
		"node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme:   {
		colors:     {
			feedback: {
				informative: INFORMATIVE,
				positive: POSITIVE,
				alert: ALERT,
				negative: NEGATIVE
			},
			neutral: NEUTRAL,
			green: {
				light: GREEN_LIGHT,
				dark: GREEN_DARK
			},
			red: RED,
			blue: BLUE,
			yellow: YELLOW
		},
		spacing:    SPACING,
		extend: {
			lineHeight: LINE_HEIGHT,
			borderWidth: BORDER_WIDTH,
			fontSize: FONT_SIZE
		},
	},
}
