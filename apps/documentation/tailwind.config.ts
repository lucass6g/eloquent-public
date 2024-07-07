import {wedgesPalette, wedgesTW} from "@lemonsqueezy/wedges";
import {defineTailwindConfig} from "@eloquent/styles"
import tailwindTypography from "@tailwindcss/typography";

const primaryBlue = {
    100: "#DAF0FF",
    200: "#B5DEFF",
    300: "#90C9FF",
    400: "#75B6FF",
    500: "#4796FF",
    600: "#3374DB",
    700: "#2356B7",
    800: "#163C93",
    900: "#0D297A",
    DEFAULT: "#4796FF", // 500
};
export default defineTailwindConfig({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        wedgesTW({
            themes: {
                "dark-blue": {
                    extend: "dark",
                    colors: {
                        primary: primaryBlue,
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: wedgesPalette.purple[600],
                        },
                    },
                },
            },
        }),
        tailwindTypography,
    ],
})
