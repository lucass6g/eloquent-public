'use client'

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import * as React from 'react'

import { Button, DropdownMenu } from '../'

type Checked = DropdownMenuCheckboxItemProps['checked']

export function DropdownMenuCheckboxesDemo() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
                <DropdownMenu.Label>Appearance</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.CheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                >
                    Status Bar
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                    checked={showActivityBar}
                    onCheckedChange={setShowActivityBar}
                    disabled
                >
                    Activity Bar
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                >
                    Panel
                </DropdownMenu.CheckboxItem>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}
