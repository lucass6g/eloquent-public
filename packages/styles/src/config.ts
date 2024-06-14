import { deepmerge } from "@fastify/deepmerge";
import type { Config } from "tailwindcss";
import {ALERT, BLUE, GREEN_DARK, GREEN_LIGHT, INFORMATIVE, NEGATIVE, NEUTRAL, POSITIVE, RED, YELLOW} from '../../tokens/src/colors'

export const defaultTailwindConfig = {
  content: ["node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
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
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

/**
 * Define TailwindCSS Config
 * @param config - Tailwind config object
 * @return new config object
 */
export function defineTailwindConfig(config: Config) {
  return deepmerge({
    all: true,
  })(config, defaultTailwindConfig) as Config;
}
