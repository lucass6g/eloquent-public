import { Meta, StoryObj } from '@storybook/react-vite'
import { CardWithForm } from './card-with-form'

const meta = {
    title: 'form',
    component: CardWithForm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CardWithForm>

type Story = StoryObj<typeof meta>

export const CardWithFormDemo: Story = {
    name: 'Card With Form',
    args: {},
}
export default meta
