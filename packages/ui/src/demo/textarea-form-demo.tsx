'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, Form, Textarea, toast } from '../'

const FormSchema = z.object({
    bio: z
        .string()
        .min(10, {
            message: 'Bio must be at least 10 characters.',
        })
        .max(160, {
            message: 'Bio must not be longer than 30 characters.',
        }),
})

export function TextareaFormDemo() {
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
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
            >
                <Form.Field
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <Form.Item>
                            <Form.Label>Bio</Form.Label>
                            <Form.Control>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none"
                                    {...field}
                                />
                            </Form.Control>
                            <Form.Description>
                                You can <span>@mention</span> other users and
                                organizations.
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
