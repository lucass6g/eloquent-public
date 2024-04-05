import { SPACING, COLORS, FONT_WEIGHT, FONT_FAMILY, FONT_SIZE } from "@eloquent/tokens";
import plugin from 'tailwindcss/plugin';

export const eloquentPlugin = plugin(({ addBase }) => {
  addBase({
    extend: {
      colors: COLORS,
      spacing: SPACING,
      fontSize: FONT_SIZE,
      fontWeight: FONT_WEIGHT,
      fontFamily: FONT_FAMILY,
    },
  });
});