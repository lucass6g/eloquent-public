'use client'

import { Calendar, MoreHorizontal, Tags, Trash, User } from 'lucide-react'
import * as React from 'react'

import { Button, Command, DropdownMenu } from '../'

const labels = [
    'feature',
    'bug',
    'enhancement',
    'documentation',
    'design',
    'question',
    'maintenance',
]

export function ComboboxDropdownMenu() {
    const [label, setLabel] = React.useState('feature')
    const [open, setOpen] = React.useState(false)

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                    {label}
                </span>
                <span className="text-muted-foreground">
                    Create a new project
                </span>
            </p>
            <DropdownMenu.Root open={open} onOpenChange={setOpen}>
                <DropdownMenu.Trigger asChild>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end" className="w-[200px]">
                    <DropdownMenu.Label>Actions</DropdownMenu.Label>
                    <DropdownMenu.Group>
                        <DropdownMenu.Item>
                            <User className="mr-2 h-4 w-4" />
                            Assign to...
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <Calendar className="mr-2 h-4 w-4" />
                            Set due date...
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>
                                <Tags className="mr-2 h-4 w-4" />
                                Apply label
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent className="p-0">
                                <Command.Root>
                                    <Command.Input
                                        placeholder="Filter label..."
                                        autoFocus={true}
                                    />
                                    <Command.List>
                                        <Command.Empty>
                                            No label found.
                                        </Command.Empty>
                                        <Command.Group>
                                            {labels.map((label) => (
                                                <Command.Item
                                                    key={label}
                                                    value={label}
                                                    onSelect={(value) => {
                                                        setLabel(value)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    {label}
                                                </Command.Item>
                                            ))}
                                        </Command.Group>
                                    </Command.List>
                                </Command.Root>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                            <DropdownMenu.Shortcut>⌘⌫</DropdownMenu.Shortcut>
                        </DropdownMenu.Item>
                    </DropdownMenu.Group>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
}
