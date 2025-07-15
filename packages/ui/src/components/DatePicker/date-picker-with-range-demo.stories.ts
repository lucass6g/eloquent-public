
import { Meta, StoryObj } from '@storybook/react-vite'
import { DatePickerWithRange } from './date-picker-with-ranger-demo'

//meta
const meta = {
    title: 'Date',
    component: DatePickerWithRange,
    parameters: {},
    tags: ["!autodocs"],
} satisfies Meta<typeof DatePickerWithRange>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerWithRangeDemo: Story = {
    args: {},
}
