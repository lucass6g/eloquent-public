import { Meta, StoryObj } from '@storybook/react'
import {
    Tooltip,
    Button
} from '../'

const meta = {
    title: 'Shadcn/tooltip',
    component: () => (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Button variant="outline">Hover</Button>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    Add to library
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

//colors
export const TooltipDemo: Story = {
    args: {},
}
