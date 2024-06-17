import { Meta, StoryObj } from '@storybook/react'
import {
    Button,
    Dialog,
    Input,
    Label
} from '../'
import { Copy } from 'lucide-react'

const meta = {
    title: 'Shadcn/dialog',
    component: () => (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </Dialog.Trigger>
            <Dialog.Content className="sm:max-w-[425px]">
                <Dialog.Header>
                    <Dialog.Title>Edit profile</Dialog.Title>
                    <Dialog.Description>
                        Make changes to your profile here. Click save when youre
                        done.
                    </Dialog.Description>
                </Dialog.Header>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <Dialog.Footer>
                    <Button type="submit">Save changes</Button>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const DialogDemo: Story = {
    args: {},
}

export const DialogCustomShareLink: Story = {
    args: {},
    render: () => (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="outline">Share</Button>
            </Dialog.Trigger>
            <Dialog.Content className="sm:max-w-md">
                <Dialog.Header>
                    <Dialog.Title>Share link</Dialog.Title>
                    <Dialog.Description>
                        Anyone who has this link will be able to view this.
                    </Dialog.Description>
                </Dialog.Header>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue="https://ui.shadcn.com/docs/installation"
                            readOnly
                        />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
                <Dialog.Footer className="sm:justify-start">
                    <Dialog.Close asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </Dialog.Close>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    ),
}
