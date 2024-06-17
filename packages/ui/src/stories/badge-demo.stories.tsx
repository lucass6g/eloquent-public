import { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeProps, badgeVariants } from '../'
//meta
const meta = {
    title: 'Badge',
    render: (args) => <Badge {...args}>{args.children}</Badge>,
    tags: ['autodocs'],
    args: {
        variant: 'default',
        children: 'badgeCn',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'secondary', 'outline', 'destructive'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<BadgeProps>

export default meta

type Story = StoryObj<typeof meta>

//colors
export const Default: Story = {
    args: {
        variant: 'default',
    },
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
}
export const Outline: Story = {
    args: {
        variant: 'outline',
    },
}
export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
}

export const LinkWithStyleBadge: Story = {
    render: ({ variant, children }) => (
        <a href="#" className={badgeVariants({ variant })}>
            {children}
        </a>
    ),
}
