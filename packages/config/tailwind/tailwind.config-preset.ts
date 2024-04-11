import {FONT_SIZE, FONT_FAMILY, FONT_WEIGHT, COLORS, SPACING} from "@eloquent/tokens"

const config = {
    content: [
        "node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: COLORS,
            fontSize: FONT_SIZE,
            fontFamily: FONT_FAMILY,
            fontWeight: FONT_WEIGHT,
            spacing: SPACING,
        }
    },
}

export default config;