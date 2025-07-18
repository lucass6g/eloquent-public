'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '../../lib/utils'
import { Button, Command, Form, Popover, toast } from '../'

const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
] as const

const FormSchema = z.object({
    language: z.string({
        required_error: 'Please select a language.',
    }),
})

export function ComboboxForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
    }

    return (
        <Form.Provider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <Form.Field
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <Form.Item className="flex flex-col">
                            <Form.Label>Language</Form.Label>
                            <Popover.Root>
                                <Popover.Trigger asChild>
                                    <Form.Control>
                                        <Button
                                            variant="secondary"
                                            role="combobox"
                                            className={cn(
                                                'w-[200px] justify-between',
                                                !field.value &&
                                                    'text-muted-foreground',
                                            )}
                                        >
                                            {field.value
                                                ? languages.find(
                                                      (language) =>
                                                          language.value ===
                                                          field.value,
                                                  )?.label
                                                : 'Select language'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </Form.Control>
                                </Popover.Trigger>
                                <Popover.Content className="w-[200px] p-0">
                                    <Command.Root>
                                        <Command.Input placeholder="Search language..." />
                                        <Command.Empty>
                                            No language found.
                                        </Command.Empty>
                                        <Command.Group>
                                            {languages.map((language) => (
                                                <Command.Item
                                                    value={language.label}
                                                    key={language.value}
                                                    onSelect={() => {
                                                        form.setValue(
                                                            'language',
                                                            language.value,
                                                        )
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            'mr-2 h-4 w-4',
                                                            language.value ===
                                                                field.value
                                                                ? 'opacity-100'
                                                                : 'opacity-0',
                                                        )}
                                                    />
                                                    {language.label}
                                                </Command.Item>
                                            ))}
                                        </Command.Group>
                                    </Command.Root>
                                </Popover.Content>
                            </Popover.Root>
                            <Form.Description>
                                This is the language that will be used in the
                                dashboard.
                            </Form.Description>
                            <Form.Message />
                        </Form.Item>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form.Provider>
    )
}
