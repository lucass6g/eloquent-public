import { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroupFormDemo } from './radio-group-form-demo'

const meta = {
    title: 'Radio-Group',
    component: RadioGroupFormDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof RadioGroupFormDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const RadioGroupForm: Story = {
    args: {},
}
