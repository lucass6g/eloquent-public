// eloquent/packages/tokens/tailwind.config.ts

import {FONT_SIZE, FONT_FAMILY, FONT_WEIGHT, COLORS, SPACING} from "./"

const config = {
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