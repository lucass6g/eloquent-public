import { Meta, StoryObj } from '@storybook/react-vite'
import { DatePickerWithPresets } from './date-picker-with-presets-demo'

const meta = {
    title: 'Date',
    component: DatePickerWithPresets,
    parameters: {},
} satisfies Meta<typeof DatePickerWithPresets>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerWithSelect: Story = {
    args: {},
}
