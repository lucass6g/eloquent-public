import { SPACING, COLORS, FONT_WEIGHT, FONT_FAMILY, FONT_SIZE } from "@eloquent/tokens";

export const eloquentPlugin = {
  theme: {
    extend: {
      colors: COLORS,
      spacing: SPACING,
      fontSize: FONT_SIZE,
      fontWeight: FONT_WEIGHT,
      fontFamily: FONT_FAMILY,
    },
  },
};