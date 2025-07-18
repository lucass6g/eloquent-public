import { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '../..'
const meta = {
    title: 'Form',
    args: {
        children: 'Shadcn',
    },
    component: (args) => <Label {...args}>{args.children}</Label>,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<React.ComponentPropsWithRef<'label'>>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const LabelDemo: Story = {
    args: {},
}
