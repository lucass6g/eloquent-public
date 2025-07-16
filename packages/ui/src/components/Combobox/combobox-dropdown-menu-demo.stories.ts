import { Meta, StoryObj } from '@storybook/react-vite'
import { ComboboxDropdownMenu } from './combobox-dropdown-menu-demo'

const meta = {
    title: 'Combobox',
    component: ComboboxDropdownMenu,
} satisfies Meta<typeof ComboboxDropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const ComboboxDropdownMenuDemo: Story = {
    args: {},
}
