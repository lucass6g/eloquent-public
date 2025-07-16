import { Meta, StoryObj } from '@storybook/react-vite'
import { DatePickerDemo } from './date-picker-demo'

//meta
const meta = {
    title: 'Date',
    component: DatePickerDemo,
    parameters: {},
} satisfies Meta<typeof DatePickerDemo>

export default meta

type Story = StoryObj<typeof meta>

export const DatePicker: Story = {
    args: {},
}
