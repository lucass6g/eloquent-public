import { Meta, StoryObj } from '@storybook/react-vite'
import { DatePickerForm } from './date-picker-with-form'

const meta = {
    title: 'Form',
    component: DatePickerForm,
} satisfies Meta<typeof DatePickerForm>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerFormDemo: Story = {
    args: {},
}
