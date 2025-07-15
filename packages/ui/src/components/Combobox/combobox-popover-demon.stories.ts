import { Meta, StoryObj } from '@storybook/react-vite'
import { ComboboxPopover } from './combobox-popover-demon'

//documentar meu componente, armazenar, posição do elemento, tipo controls
const meta = {
    title: 'Combobox',
    component: ComboboxPopover,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ComboboxPopover>
export default meta

type Story = StoryObj<typeof meta>

export const ComboboxPopoverDemo: Story = {
    args: {},
}
