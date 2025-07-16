'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, Form, Input } from '../../index.ts'
import {formSchema} from "../Checkbox/checkbox-demo-with-form.tsx";


export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    // ...

    return (
        <Form.Provider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Form.Field
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <Form.Item>
                            <Form.Label>Username</Form.Label>
                            <Form.Control>
                                <Input.Root placeholder="shadcn" {...field} />
                            </Form.Control>
                            <Form.Description>
                                This is your public display name.
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
