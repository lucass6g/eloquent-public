import "../src/styles/global.css"
import {withThemeByClassName} from "@storybook/addon-themes";
import {Preview} from '@storybook/react'
import {themes} from '@storybook/theming';
import {commonTheme, darkUIStorybook, lightUIStorybook} from "./themes-Storybook-UI"
import {ThemeProvider} from '../../../packages/ui/src/theme/theme-provider'
import {Toaster} from "@eloquent/ui";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        darkMode: {
            classTarget: "html",
            stylePreview: true,
            darkClass: "dark",
            lightClass: "light",
            // Override the default dark theme
            dark: {...themes.dark, ...darkUIStorybook, ...commonTheme},
            // Override the default light theme
            light: {...themes.normal, ...lightUIStorybook, ...commonTheme},
            current: "dark",
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

// export const decorators = [
//     (Story) => {
//         return (
//             <ThemeProvider
//                 attribute="class"
//                 defaultTheme="dark"
//                 disableTransitionOnChange
//             >
//                 <div>
//                     <Story/>
//                     <Toaster/>
//                 </div>
//             </ThemeProvider>
//         )
//     },
//     withThemeByClassName({
//         themes: {
//             light: 'light',
//             dark: 'dark',
//         },
//         defaultTheme: 'dark',
//     }),
// ]

export default preview;
