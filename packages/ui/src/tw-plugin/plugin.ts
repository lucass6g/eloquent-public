import plugin from 'tailwindcss/plugin';
import { SPACING, COLORS, FONT_WEIGHT, FONT_FAMILY, FONT_SIZE } from "@eloquent/tokens";

export const eloquentPlugin = plugin(function({ addBase }) {
  const newTheme = {
    extend: {
      margin: SPACING,
      padding: SPACING,
      spacing: SPACING,
      gap:  SPACING,
      screens: {
        xsm: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        mobile: {
          min: "0",
          max: "599px",
        },
        tablet: {
          min: "600px",
          max: "959px",
        },
        laptop: {
          min: "960px",
          max: "1271px",
        },
        desktop: {
          min: "1272px",
          max: "1769px",
        },
        full: "1680px",
        print: { raw: "print" },
      },
      fontSize: FONT_SIZE,
      fontWeight: FONT_WEIGHT,
      fontFamily: FONT_FAMILY,
      letterSpacing: {
        small: "-1px",
        medium: "-2px",
        large: "-3px",
      },
      lineHeight: {
        default: "100%",
        tiny: "115%",
        medium: "120%",
        large: "133%",
        distant: "150%",
        superdistant: "170%",
      },
      borderWidth: {
        none: "0px",
        hairline: "1px",
        thin: "2px",
        thick: "4px",
        heavy: "8px",
      },
      transitionDelay: {
        DEFAULT: "",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.48, 0, 0.48, 1)",
      },
      transitionDuration: {
        DEFAULT: "0.275s",
      },
      borderRadius: {
        none: "0px",
        pill: "500px",
        circle: "50%",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      opacity: {
        0: "0",
        1: "1",
        semiopaque: "0.8",
        intense: "0.64",
        medium: "0.32",
        light: "0.16",
        semitransparent: "0.08",
      },
      boxShadow: {
        "level-1": "0 4px 8px rgba(69, 73, 84, 0.08)",
        "level-2": "0 8px 24px rgba(69, 73, 84, 0.08)",
        "level-3": "0 16px 32px rgba(69, 73, 84, 0.08)",
        "level-4": "0 16px 48px rgba(69, 73, 84, 0.08)",
      },
      colors: COLORS,
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  };

  addBase(newTheme);
});