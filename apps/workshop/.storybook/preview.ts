import "../../../packages/ui/global.css"
import "../../../packages/ui/styles.css"
import {Preview} from '@storybook/react'

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
