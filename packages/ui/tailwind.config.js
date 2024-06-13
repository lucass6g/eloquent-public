import {SPACING, LINE_HEIGHT, FONT_SIZE, BORDER_WIDTH} from '../tokens/src'
import {ALERT, BLUE, GREEN_DARK, GREEN_LIGHT, INFORMATIVE, NEGATIVE, NEUTRAL, POSITIVE, RED, YELLOW} from '../tokens/src/colors'

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            lineHeight: LINE_HEIGHT,
            borderWidth: BORDER_WIDTH,
            fontSize: FONT_SIZE,
            spacing: SPACING,
            colors: {
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
            fontWeight: {
                300: "300",
                400: "400",
                500: "500",
                600: "600",
                700: "700",
            },
            borderRadius: {
                radius: "0.5rem",
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
}
