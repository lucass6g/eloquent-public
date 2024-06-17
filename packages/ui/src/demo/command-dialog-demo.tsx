'use client'

import * as React from 'react'
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from 'lucide-react'

import {Command} from '../'

export function CommandDialogDemo() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <>
            <p className="text-sm text-muted-foreground">
                Press{' '}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p>
            <Command.Dialog open={open} onOpenChange={setOpen}>
                <Command.Input placeholder="Type a command or search..." />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading="Suggestions">
                        <Command.Item>
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Calendar</span>
                        </Command.Item>
                        <Command.Item>
                            <Smile className="mr-2 h-4 w-4" />
                            <span>Search Emoji</span>
                        </Command.Item>
                        <Command.Item>
                            <Calculator className="mr-2 h-4 w-4" />
                            <span>Calculator</span>
                        </Command.Item>
                    </Command.Group>
                    <Command.Separator />
                    <Command.Group heading="Settings">
                        <Command.Item>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <Command.Shortcut>⌘P</Command.Shortcut>
                        </Command.Item>
                        <Command.Item>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <Command.Shortcut>⌘B</Command.Shortcut>
                        </Command.Item>
                        <Command.Item>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <Command.Shortcut>⌘S</Command.Shortcut>
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command.Dialog>
        </>
    )
}
