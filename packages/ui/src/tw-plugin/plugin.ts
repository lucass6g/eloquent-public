import plugin from 'tailwindcss/plugin';
import { SPACING, COLORS, FONT_WEIGHT, FONT_FAMILY, FONT_SIZE } from "@eloquent/tokens";

export const eloquentPlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.text': Object.entries(FONT_SIZE).reduce((acc: {[key: string]: {fontSize: string}}, [name, value]) => {
      acc[`.text-${name}`] = { fontSize: value };
      return acc;
    }, {}),
    '.font': {
      ...Object.entries(FONT_FAMILY).reduce((acc: {[key: string]: {fontFamily: string}}, [name, value]) => {
        acc[`.font-${name}`] = { fontFamily: value };
        return acc;
      }, {}),
      ...Object.entries(FONT_WEIGHT).reduce((acc: {[key: string]: {fontWeight: string}}, [name, value]) => {
        acc[`.font-${name}`] = { fontWeight: value };
        return acc;
      }, {}),
    },
    '.spacing': Object.entries(SPACING).reduce((acc: {[key: string]: {margin: string}}, [name, value]) => {
      acc[`.spacing-${name}`] = { margin: value };
      return acc;
    }, {}),
  };

  addUtilities(newUtilities);

  return {
    theme: {
      extend: {
        colors: Object.entries(COLORS).reduce((acc: {[key: string]: any}, [name, value]) => {
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