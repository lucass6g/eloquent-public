import { Meta, StoryObj } from '@storybook/react-vite'
import { ComboboxForm } from './combobox-with-form-demon'

//documentar meu componente, armazenar, posição do elemento, tipo controls
const meta = {
    title: 'Form',
    component: ComboboxForm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ComboboxForm>
export default meta

type Story = StoryObj<typeof meta>

export const ComboboxFormDemo: Story = {
    args: {},
}
