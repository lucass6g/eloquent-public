'use client'

import {
    ArrowUpCircle,
    CheckCircle2,
    Circle,
    HelpCircle,
    LucideIcon,
    XCircle,
} from 'lucide-react'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { Button, Command, Popover } from '../'

type Status = {
    value: string
    label: string
    icon: LucideIcon
}

const statuses: Status[] = [
    {
        value: 'backlog',
        label: 'Backlog',
        icon: HelpCircle,
    },
    {
        value: 'todo',
        label: 'Todo',
        icon: Circle,
    },
    {
        value: 'in progress',
        label: 'In Progress',
        icon: ArrowUpCircle,
    },
    {
        value: 'done',
        label: 'Done',
        icon: CheckCircle2,
    },
    {
        value: 'canceled',
        label: 'Canceled',
        icon: XCircle,
    },
]

export function ComboboxPopover() {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null,
    )

    return (
        <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">Status</p>
            <Popover.Root open={open} onOpenChange={setOpen}>
                <Popover.Trigger asChild>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="w-[150px] justify-start"
                    >
                        {selectedStatus ? (
                            <>
                                <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                                {selectedStatus.label}
                            </>
                        ) : (
                            <>+ Set status</>
                        )}
                    </Button>
                </Popover.Trigger>
                <Popover.Content className="p-0" side="right" align="start">
                    <Command.Root>
                        <Command.Input placeholder="Change status..." />
                        <Command.List>
                            <Command.Empty>No results found.</Command.Empty>
                            <Command.Group>
                                {statuses.map((status) => (
                                    <Command.Item
                                        key={status.value}
                                        value={status.value}
                                        onSelect={(value) => {
                                            setSelectedStatus(
                                                statuses.find(
                                                    (priority) =>
                                                        priority.value ===
                                                        value,
                                                ) || null,
                                            )
                                            setOpen(false)
                                        }}
                                    >
                                        <status.icon
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                status.value ===
                                                    selectedStatus?.value
                                                    ? 'opacity-100'
                                                    : 'opacity-40',
                                            )}
                                        />
                                        <span>{status.label}</span>
                                    </Command.Item>
                                ))}
                            </Command.Group>
                        </Command.List>
                    </Command.Root>
                </Popover.Content>
            </Popover.Root>
        </div>
    )
}
