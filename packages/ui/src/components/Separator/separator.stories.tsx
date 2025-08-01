import { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from '.';

const meta = {
    title: 'Separator',
    component: () => (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">
                    Radix Primitives
                </h4>
                <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
            </div>
        </div>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta;

type Story = StoryObj<typeof meta>

export const SeparatorHorizontal: Story = {
    args: {},
    render: () => (
        <>
            <div className="flex w-[184px] flex-col gap-2">
                <h1>Elo</h1>
                <Separator orientation="horizontal" />
                <p>Eloquent</p>
            </div>
        </>
    ),
}

export const SeparatorVertical: Story = {
    args: {},
    render: () => (
        <>
            <div className="flex h-[184px] items-center space-x-4 text-sm">
                <div>Elo</div>
                <Separator orientation='vertical' />
                <div>Eloquent</div>
            </div>
        </>
    ),
}
