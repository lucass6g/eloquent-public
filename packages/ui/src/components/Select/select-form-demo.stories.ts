import { Meta, StoryObj } from '@storybook/react-vite'
import { SelectFormDemo } from './select-form-demo'

const meta = {
    title: 'Form',
    component: SelectFormDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SelectFormDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const SelectForm: Story = {
    args: {},
}
