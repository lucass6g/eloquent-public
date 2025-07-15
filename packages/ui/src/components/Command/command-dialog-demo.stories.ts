import { Meta, StoryObj } from '@storybook/react-vite'
import { CommandDialogDemo } from './command-dialog-demo'

const meta = {
    title: 'Command',
    component: CommandDialogDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CommandDialogDemo>

export default meta

type Story = StoryObj<typeof meta>

export const CommandWithCmdkDialog: Story = {
    args: {},
}
