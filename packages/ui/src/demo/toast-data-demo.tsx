'use client'

import { Button, useToast } from '../'

type ToastProps = {
    title?: string
    description?: string
    variant?: 'destructive' | 'default'
}
export function ToastDemo({
    description,
    title,
    variant = 'default',
}: ToastProps) {
    const { toast } = useToast()

    return (
        <Button
            variant="secondary"
            onClick={() => {
                toast({
                    title,
                    description,
                    variant,
                })
            }}
        >
            shadcn
        </Button>
    )
}
