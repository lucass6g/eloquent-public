'use client'

import * as React from 'react'

import {
    DropdownMenu,
    Button
} from '../'

export function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = React.useState('bottom')

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button variant="secondary">Open</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
                <DropdownMenu.Label>Panel Position</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.RadioGroup
                    value={position}
                    onValueChange={setPosition}
                >
                    <DropdownMenu.RadioItem value="top">
                        Top
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="bottom">
                        Bottom
                    </DropdownMenu.RadioItem>
                    <DropdownMenu.RadioItem value="right">
                        Right
                    </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}
