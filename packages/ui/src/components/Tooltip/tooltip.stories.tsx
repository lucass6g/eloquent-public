import { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip as TooltipPrimitive } from '.'
import { Button } from '../Button'

const meta = {
    title: 'Tooltip',
    render: () => (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    <Button variant="secondary">Hover</Button>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content >
                    Texto tooltip
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    ),
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Um pop-up que exibe informações relacionadas a um elemento quando recebe o foco do teclado ou o mouse passa sobre ele.'
            },
        },
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Tooltip: Story = {
    args: {},
    render: () => (
        <div className='p-6'>
            <TooltipPrimitive.Provider>
                <TooltipPrimitive.Root>
                    <TooltipPrimitive.Trigger asChild>
                        <Button variant="secondary">Hover</Button>
                    </TooltipPrimitive.Trigger>
                    <TooltipPrimitive.Content>
                        Texto tooltip
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Root>
            </TooltipPrimitive.Provider>
        </div>
    ),
}
