import { Meta, StoryObj } from '@storybook/react-vite'
import { ComboboxDemo } from './combobox-demo'

const meta = {
    title: 'Combobox',
    component: ComboboxDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ComboboxDemo>
export default meta

type Story = StoryObj<typeof meta>

export const Combobox: Story = {
    args: {},
}
