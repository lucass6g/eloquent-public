import {SPACING, LINE_HEIGHT, FONT_SIZE, BORDER_WIDTH} from '../tokens/src'
import {defineTailwindConfig} from '../../packages/styles/src/config'

module.exports = defineTailwindConfig({
    darkMode: ['class'],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
})
