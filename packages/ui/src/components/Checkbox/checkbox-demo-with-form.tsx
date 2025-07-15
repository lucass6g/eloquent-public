'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, Checkbox, Form, toast } from '../'

export const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
})

export const FormSchemaCheckbox = z.object({
    mobile: z.boolean().default(false).optional(),
})

export const FormSchemaDatePicker = z.object({
    dob: z.date({
        required_error: 'A date of birth is required.',
    }),
})


export function CheckboxReactHookFormSingle() {
    const form = useForm<z.infer<typeof FormSchemaCheckbox>>({
        resolver: zodResolver(FormSchemaCheckbox),
        defaultValues: {
            mobile: true,
        },
    })

    function onSubmit(data: z.infer<typeof FormSchemaCheckbox>) {
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
                    name="mobile"
                    render={({ field }) => (
                        <Form.Item className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <Form.Control>
                                <Checkbox.Button
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </Form.Control>
                            <div className="space-y-1 leading-none">
                                <Form.Label>
                                    Use different settings for my mobile devices
                                </Form.Label>
                                <Form.Description>
                                    You can manage your mobile notifications in
                                    the <a href="#">mobile settings</a>{' '}
                                    page.
                                </Form.Description>
                            </div>
                        </Form.Item>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form.Provider>
    )
}
