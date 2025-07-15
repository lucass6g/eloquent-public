import { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDays } from 'lucide-react'
import { Avatar, Button, HoverCard } from '../'

const meta = {
    title: 'Shadcn/hover-card',
    component: () => (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                <Button variant="link">@nextjs</Button>
            </HoverCard.Trigger>
            <HoverCard.Content className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar.Root>
                        <Avatar.Image src="https://github.com/vercel.png" />
                        <Avatar.Fallback>VC</Avatar.Fallback>
                    </Avatar.Root>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by
                            @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                            <span className="text-xs text-muted-foreground">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCard.Content>
        </HoverCard.Root>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const HoverCardDemo: Story = {
    args: {},
}
