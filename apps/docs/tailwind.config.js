import sharedTailwindConfig from '../../packages/ui/tailwind.config'

export default {
    ...sharedTailwindConfig,
    content: [ "node_modules/@eloquent/ui/dist/**/*.{js,ts,jsx,tsx}"]
}