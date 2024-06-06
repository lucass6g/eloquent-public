import {eloquentPreset} from '@eloquent/tokens';
import type {Config} from "tailwindcss";

module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
    },
    plugins: [require("tailwindcss-animate")],
    presets: [eloquentPreset]
} satisfies Config;

