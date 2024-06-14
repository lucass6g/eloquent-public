import "../src/styles/global.css"
import {Preview} from '@storybook/react'
import { themes } from '@storybook/theming';
import {darkUIStorybook, lightUIStorybook, commonTheme} from "./themes-Storybook-UI"

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        darkMode: {
            classTarget: "html",
            stylePreview: true,
            darkClass: "dark",
            lightClass: "light",
            // Override the default dark theme
            dark: { ...themes.dark, ...darkUIStorybook, ...commonTheme},
            // Override the default light theme
            light: { ...themes.normal, ...lightUIStorybook, ...commonTheme},
            current: "light",
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    tags: ["autodocs"],
};

export default preview;
