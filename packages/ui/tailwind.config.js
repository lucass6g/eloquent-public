import {SPACING, LINE_HEIGHT, FONT_SIZE, BORDER_WIDTH} from '../tokens/src'
import {defineTailwindConfig} from '@eloquent/styles'
// module.exports = {
//
//     theme: {
//         extend: {
//             lineHeight: LINE_HEIGHT,
//             borderWidth: BORDER_WIDTH,
//             fontSize: FONT_SIZE,
//             spacing: SPACING,
//             colors: {
//                 primary: {
//                     DEFAULT: "hsl(var(--primary))",
//                     foreground: "hsl(var(--primary-foreground))",
//                 },
//                 border: 'hsl(var(--border))',
//                 input: 'hsl(var(--input))',
//                 ring: 'hsl(var(--ring))',
//                 background: 'hsl(var(--background))',
//                 foreground: 'hsl(var(--foreground))',
//                 secondary: {
//                     DEFAULT: 'hsl(var(--secondary))',
//                     foreground: 'hsl(var(--secondary-foreground))'
//                 },
//                 destructive: {
//                     DEFAULT: 'hsl(var(--destructive))',
//                     foreground: 'hsl(var(--destructive-foreground))'
//                 },
//                 muted: {
//                     DEFAULT: 'hsl(var(--muted))',
//                     foreground: 'hsl(var(--muted-foreground))'
//                 },
//                 accent: {
//                     DEFAULT: 'hsl(var(--accent))',
//                     foreground: 'hsl(var(--accent-foreground))'
//                 },
//                 popover: {
//                     DEFAULT: 'hsl(var(--popover))',
//                     foreground: 'hsl(var(--popover-foreground))'
//                 },
//                 card: {
//                     DEFAULT: 'hsl(var(--card))',
//                     foreground: 'hsl(var(--card-foreground))'
//                 },
//                 feedback: {
//                     informative: INFORMATIVE,
//                     positive: POSITIVE,
//                     alert: ALERT,
//                     negative: NEGATIVE
//                 },
//                 neutral: NEUTRAL,
//                 green: {
//                     light: GREEN_LIGHT,
//                     dark: GREEN_DARK
//                 },
//                 red: RED,
//                 blue: BLUE,
//                 yellow: YELLOW
//             },
//             fontFamily: {
//                 barlow: ["Barlow", "sans-serif"],
//             },
//             borderRadius: {
//                 lg: 'var(--radius)',
//                 md: 'calc(var(--radius) - 2px)',
//                 sm: 'calc(var(--radius) - 4px)'
//             },
//             fontWeight: {
//                 300: "300",
//                 400: "400",
//                 500: "500",
//                 600: "600",
//                 700: "700",
//             },
//             keyframes: {
//                 "accordion-down": {
//                     from: {height: "0"},
//                     to: {height: "var(--radix-accordion-content-height)"},
//                 },
//                 "accordion-up": {
//                     from: {height: "var(--radix-accordion-content-height)"},
//                     to: {height: "0"},
//                 },
//             },
//             animation: {
//                 "accordion-down": "accordion-down 0.2s ease-out",
//                 "accordion-up": "accordion-up 0.2s ease-out",
//             },
//         },
//     },
// }

module.exports = defineTailwindConfig({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extend: {
        lineHeight: LINE_HEIGHT,
        borderWidth: BORDER_WIDTH,
        fontSize: FONT_SIZE,
        spacing: SPACING,
    }
})
