import { Meta, StoryObj } from '@storybook/react'

import { VariantProps } from 'class-variance-authority'
import { Terminal } from 'lucide-react'
import { Alert, alertVariants } from '../'

type TypeCustomAlertProps = {} & VariantProps<typeof alertVariants>

const meta = {
    title: 'Alert',
    args: {
        variant: 'default',
    },
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Terminal className="h-4 w-4" />
            <Alert.Title>Heads up!</Alert.Title>
            <Alert.Description>
                You can add components to your app using the cli.
            </Alert.Description>
        </Alert.Root>
    ),
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'destructive'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<TypeCustomAlertProps>

export default meta

type Story = StoryObj<typeof meta>

//Colors
export const AlertDefaultDemo: Story = {
    name: 'Demonstração - Alerta',
    args: {
        variant: 'default',
    },
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Terminal className="h-4 w-4" />
            <Alert.Title>Heads up!</Alert.Title>
            <Alert.Description>
                You can add components to your app using the cli.
            </Alert.Description>
        </Alert.Root>
    ),
}
export const AlertDestructiveDemo: Story = {
    name: 'Alerta destrutivo',
    args: {
        variant: 'destructive',
    },
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Terminal className="h-4 w-4" />
            <Alert.Title>Heads up!</Alert.Title>
            <Alert.Description>
                You can add components to your app using the cli.
            </Alert.Description>
        </Alert.Root>
    ),
}

//examples
export const AlertNotTitle: Story = {
    name: 'Alerta sem título',
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Terminal className="h-4 w-4" />
            <Alert.Description>
                You can add components to your app using the cli.
            </Alert.Description>
        </Alert.Root>
    ),
}
export const AlertNotDescription: Story = {
    name: 'Alerta sem descrição',
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Terminal className="h-4 w-4" />
            <Alert.Title>Heads up!</Alert.Title>
        </Alert.Root>
    ),
}

export const AlertNotIcon: Story = {
    name: "Alerta sem ícone",
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Alert.Title>Heads up!</Alert.Title>
            <Alert.Description>
                You can add components to your app using the cli.
            </Alert.Description>
        </Alert.Root>
    ),
}
