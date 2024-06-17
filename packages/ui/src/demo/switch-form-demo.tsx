'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, Form, Switch, toast } from '../'

const FormSchema = z.object({
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
})

export function SwitchFormDemo() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            security_emails: true,
        },
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
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
            >
                <div>
                    <h3 className="mb-4 text-lg font-medium">
                        Email Notifications
                    </h3>
                    <div className="space-y-4">
                        <Form.Field
                            control={form.control}
                            name="marketing_emails"
                            render={({ field }) => (
                                <Form.Item className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <Form.Label className="text-base">
                                            Marketing emails
                                        </Form.Label>
                                        <Form.Description>
                                            Receive emails about new products,
                                            features, and more.
                                        </Form.Description>
                                    </div>
                                    <Form.Control>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </Form.Control>
                                </Form.Item>
                            )}
                        />
                        <Form.Field
                            control={form.control}
                            name="security_emails"
                            render={({ field }) => (
                                <Form.Item className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <Form.Label className="text-base">
                                            Security emails
                                        </Form.Label>
                                        <Form.Description>
                                            Receive emails about your account
                                            security.
                                        </Form.Description>
                                    </div>
                                    <Form.Control>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            disabled
                                            aria-readonly
                                        />
                                    </Form.Control>
                                </Form.Item>
                            )}
                        />
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Form.Provider>
    )
}
