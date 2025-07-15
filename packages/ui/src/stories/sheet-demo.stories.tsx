import { Meta, StoryObj } from '@storybook/react-vite'

import {
    Sheet,
    Button,
    Input,
    Label
} from '../'
const meta = {
    title: 'Shadcn/sheet',
    component: () => (
        <Sheet.Root>
            <Sheet.Trigger asChild>
                <Button variant="secondary">Open</Button>
            </Sheet.Trigger>
            <Sheet.Content>
                <Sheet.Header>
                    <Sheet.Title>Edit profile</Sheet.Title>
                    <Sheet.Description>
                        Make changes to your profile here. Click save when youre
                        done.
                    </Sheet.Description>
                </Sheet.Header>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input.Root
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input.Root
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <Sheet.Footer>
                    <Sheet.Close asChild>
                        <Button type="submit">Save changes</Button>
                    </Sheet.Close>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet.Root>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const SheetDemo: Story = {
    args: {},
}

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

export const SheetSideExample: Story = {
    args: {},
    render: () => (
        <div className="grid grid-cols-2 gap-2">
            {SHEET_SIDES.map((side) => (
                <Sheet.Root key={side}>
                    <Sheet.Trigger asChild>
                        <Button variant="secondary">{side}</Button>
                    </Sheet.Trigger>
                    <Sheet.Content side={side}>
                        <Sheet.Header>
                            <Sheet.Title>Edit profile</Sheet.Title>
                            <Sheet.Description>
                                Make changes to your profile here. Click save
                                when youre done.
                            </Sheet.Description>
                        </Sheet.Header>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input.Root
                                    id="name"
                                    value="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label
                                    htmlFor="username"
                                    className="text-right"
                                >
                                    Username
                                </Label>
                                <Input.Root
                                    id="username"
                                    value="@peduarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <Sheet.Footer>
                            <Sheet.Close asChild>
                                <Button type="submit">Save changes</Button>
                            </Sheet.Close>
                        </Sheet.Footer>
                    </Sheet.Content>
                </Sheet.Root>
            ))}
        </div>
    ),
}
