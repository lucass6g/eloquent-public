import plugin from 'tailwindcss/plugin';
import { COLORS, FONT_SIZE, FONT_FAMILY, FONT_WEIGHT, SPACING } from '@eloquent/tokens';

export function eloquentPlugin() {
  return plugin(function({ addUtilities, addComponents }) {
    // Adiciona as novas cores como utilities
    const newColorUtilities = Object.entries(COLORS).reduce((acc: {[key: string]: {color: string}}, [name, value]) => {
      if (typeof value === 'string') {
        acc[`.color-${name}`] = { color: value };
      } else {
        Object.entries(value).forEach(([key, val]) => {
          if (typeof val === 'string') {
            acc[`.color-${name}-${key}`] = { color: val };
          }
        });
      }
      return acc;
    }, {});

    addUtilities(newColorUtilities);

    // Adiciona as novas font sizes, font families, font weights e spacings como components
    const newComponents = {
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

    addComponents(newComponents);
  });
}