import { Meta, StoryObj } from '@storybook/react-vite'
import {
    Button,
    Dialog
} from '../..'

const meta = {
    title: 'Dialog',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const DialogDefault: Story = {
    args: {},
    render: () => (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="secondary">Abrir</Button>
            </Dialog.Trigger>
            <Dialog.Content className="min-w-[300px] h-[280px]">
            </Dialog.Content>
        </Dialog.Root>
    )
}
