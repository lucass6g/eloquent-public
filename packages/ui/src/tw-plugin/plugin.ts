import plugin from 'tailwindcss/plugin';
import { SPACING, COLORS, FONT_WEIGHT, FONT_FAMILY, FONT_SIZE } from "@eloquent/tokens";

export const eloquentPlugin = plugin(({ addUtilities }) => {
  const newUtilities: Record<string, any> = {
    ...Object.entries(FONT_SIZE).reduce((acc: Record<string, any>, [name, value]) => {
      acc[`text-${name}`] = { fontSize: value };
      return acc;
    }, {}),
    ...Object.entries(FONT_FAMILY).reduce((acc: Record<string, any>, [name, value]) => {
      acc[`font-${name}`] = { fontFamily: value };
      return acc;
    }, {}),
    ...Object.entries(FONT_WEIGHT).reduce((acc: Record<string, any>, [name, value]) => {
      acc[`font-${name}`] = { fontWeight: value };
      return acc;
    }, {}),
    ...Object.entries(SPACING).reduce((acc: Record<string, any>, [name, value]) => {
      acc[`spacing-${name}`] = { margin: value };
      return acc;
    }, {}),
    ...Object.entries(COLORS).reduce((acc: Record<string, any>, [name, value]) => {
      if (typeof value === 'string') {
        acc[`bg-${name}`] = { backgroundColor: value };
      } else {
        Object.entries(value).forEach(([key, val]) => {
          if (typeof val === 'string') {
            acc[`bg-${name}-${key}`] = { backgroundColor: val };
          }
        });
      }
      return acc;
    }, {}),
  };

  addUtilities(newUtilities);

  return {
    theme: {
      extend: {
        colors: Object.entries(COLORS).reduce((acc: Record<string, any>, [name, value]) => {
          if (typeof value === 'string') {
            acc[`${name}`] = value;
          } else {
            acc[`${name}`] = {};
            Object.entries(value).forEach(([key, val]) => {
              if (typeof val === 'string') {
                acc[`${name}`][`${key}`] = val;
              }
            });
          }
          return acc;
        }, {}),
        spacing: SPACING,
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT,
        fontFamily: FONT_FAMILY,
      },
    },
  };
});