import { Meta, StoryObj } from '@storybook/react-vite'
import { ToastDemo } from './toast-data-demo'

const meta = {
    title: 'Toast',
    component: ToastDemo,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
        },
    },
    parameters: {},
} satisfies Meta<typeof ToastDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Toast: Story = {
    args: {
        title: 'Shadcn-ui',
        description: 'like shadcn-ui',
    },
}
export const ToastStyleDestructive: Story = {
    args: {
        title: 'Shadcn-ui',
        description: 'not like shadcn-ui',
        variant: 'destructive',
    },
}

export const ToastNotDescription: Story = {
    args: {
        title: 'Shadcn-ui',
    },
}

export const ToastNotTitle: Story = {
    args: {
        description: 'like shadcn-ui',
    },
}
