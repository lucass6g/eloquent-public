import { Meta, StoryObj } from '@storybook/react'

import {
    AlertDialog,
} from '../'

const meta = {
    title: 'Alert Dialog',
    component: () => {
        return (
            <>
                <AlertDialog.Root>
                    <AlertDialog.Trigger data-testid="trigger">
                        Open
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                        <AlertDialog.Header>
                            <AlertDialog.Title data-testid="title">
                                Are you absolutely sure?
                            </AlertDialog.Title>
                            <AlertDialog.Description data-testid="description">
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialog.Description>
                        </AlertDialog.Header>
                        <AlertDialog.Footer>
                            <AlertDialog.Cancel data-testid="cancel">
                                Cancel
                            </AlertDialog.Cancel>
                            <AlertDialog.Action data-testid="Action">
                                Continue
                            </AlertDialog.Action>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            </>
        )
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<{}>

export const AlertDialogDemo: Story = {
    name: "Demonstração",
    args: {},
}
