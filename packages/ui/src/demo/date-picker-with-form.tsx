'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '../lib/utils'
import { Button, Calendar, Form, Popover, toast } from '../'
import {FormSchemaDatePicker} from "@ui/demo/checkbox-demo-with-form.tsx";

export function DatePickerForm() {
    const form = useForm<z.infer<typeof FormSchemaDatePicker>>({
        resolver: zodResolver(FormSchemaDatePicker),
    })

    function onSubmit(data: z.infer<typeof FormSchemaDatePicker>) {
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Form.Field
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <Form.Item className="flex flex-col">
                            <Form.Label>Date of birth</Form.Label>
                            <Popover.Root>
                                <Popover.Trigger asChild>
                                    <Form.Control>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                'w-[240px] pl-3 text-left font-normal',
                                                !field.value &&
                                                    'text-muted-foreground',
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, 'PPP')
                                            ) : (
                                                <span>Escolha uma data</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </Form.Control>
                                </Popover.Trigger>
                                <Popover.Content
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() ||
                                            date < new Date('1900-01-01')
                                        }
                                        initialFocus
                                    />
                                </Popover.Content>
                            </Popover.Root>
                            <Form.Description>
                                Your date of birth is used to calculate your
                                age.
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
