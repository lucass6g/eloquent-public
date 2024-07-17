import {defineTailwindConfig} from "@eloquent/styles";

export default defineTailwindConfig ({
    darkMode: ['class'],
    content: [
        "./src/stories/**/*.{ts,tsx}",
        "./src/demo/**/*.{ts,tsx}",
        "./node_modules/@eloquent/ui/src/components/**/*.{ts,tsx}"
    ],
})