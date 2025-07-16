'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, Form, RadioGroup, toast } from '../..'

const FormSchema = z.object({
    type: z.enum(['all', 'mentions', 'none'], {
        required_error: 'You need to select a notification type.',
    }),
})

export function RadioGroupFormDemo() {
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
                    name="type"
                    render={({ field }) => (
                        <Form.Item className="space-y-3">
                            <Form.Label>Notify me about...</Form.Label>
                            <Form.Control>
                                <RadioGroup.Root
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <Form.Item className="flex items-center space-x-3 space-y-0">
                                        <Form.Control>
                                            <RadioGroup.Item value="all" />
                                        </Form.Control>
                                        <Form.Label className="font-normal">
                                            All new messages
                                        </Form.Label>
                                    </Form.Item>
                                    <Form.Item className="flex items-center space-x-3 space-y-0">
                                        <Form.Control>
                                            <RadioGroup.Item value="mentions" />
                                        </Form.Control>
                                        <Form.Label className="font-normal">
                                            Direct messages and mentions
                                        </Form.Label>
                                    </Form.Item>
                                    <Form.Item className="flex items-center space-x-3 space-y-0">
                                        <Form.Control>
                                            <RadioGroup.Item value="none" />
                                        </Form.Control>
                                        <Form.Label className="font-normal">
                                            Nothing
                                        </Form.Label>
                                    </Form.Item>
                                </RadioGroup.Root>
                            </Form.Control>
                            <Form.Message />
                        </Form.Item>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form.Provider>
    )
}
