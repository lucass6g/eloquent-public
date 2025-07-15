import { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup, Label } from '../'
const meta = {
    title: 'Shadcn/radio-group',
    component: () => (
        <RadioGroup.Root defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroup.Item value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroup.Item value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroup.Item value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup.Root>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const RadioGroupDemo: Story = {
    args: {},
}
