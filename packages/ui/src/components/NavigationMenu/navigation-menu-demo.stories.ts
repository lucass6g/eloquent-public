import { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationMenuDemo } from './navigation-menu-demo'

const meta = {
    title: 'Navigation Menu',
    component: NavigationMenuDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof NavigationMenuDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const NavigationMenu: Story = {
    args: {},
}
