'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { Button, Command, Popover } from '../'

const frameworks = [
    {
        value: 'next.js',
        label: 'Next.js',
    },
    {
        value: 'sveltekit',
        label: 'SvelteKit',
    },
    {
        value: 'nuxt.js',
        label: 'Nuxt.js',
    },
    {
        value: 'remix',
        label: 'Remix',
    },
    {
        value: 'astro',
        label: 'Astro',
    },
]

export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('')

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <Button
                    variant="secondary"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? frameworks.find(
                              (framework) => framework.value === value,
                          )?.label
                        : 'Select framework...'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </Popover.Trigger>
            <Popover.Content className="w-[200px] p-0">
                <Command.Root>
                    <Command.Input placeholder="Search framework..." />
                    <Command.Empty>No framework found.</Command.Empty>
                    <Command.Group>
                        {frameworks.map((framework) => (
                            <Command.Item
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(
                                        currentValue === value
                                            ? ''
                                            : currentValue,
                                    )
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        'mr-2 h-4 w-4',
                                        value === framework.value
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    )}
                                />
                                {framework.label}
                            </Command.Item>
                        ))}
                    </Command.Group>
                </Command.Root>
            </Popover.Content>
        </Popover.Root>
    )
}
