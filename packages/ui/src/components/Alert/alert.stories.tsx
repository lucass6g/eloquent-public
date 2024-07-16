import { Meta, StoryObj } from '@storybook/react'

import { VariantProps } from 'class-variance-authority'
import { Component } from 'lucide-react'
import {Alert, alertVariants} from '.'

type TypeCustomAlertProps = {} & VariantProps<typeof alertVariants>

const meta = {
    title: 'Alert',
    args: {
        variant: 'default',
    },
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Component className="h-4 w-4" />
            <Alert.Title>Atenção!</Alert.Title>
            <Alert.Description>
                Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
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
    name: 'Alerta padrão',
    args: {
        variant: 'default',
    },
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Component className="h-4 w-4" />
            <Alert.Title>Atenção!</Alert.Title>
            <Alert.Description>
                Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
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
            <Component className="h-4 w-4" />
            <Alert.Title>Atenção!</Alert.Title>
            <Alert.Description>
                Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
            </Alert.Description>
        </Alert.Root>
    ),
}

//examples
export const AlertNotTitle: Story = {
    name: 'Alerta sem título',
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Component className="h-4 w-4" />
            <Alert.Description>
                Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
            </Alert.Description>
        </Alert.Root>
    ),
}
export const AlertNotDescription: Story = {
    name: 'Alerta sem descrição',
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Component className="h-4 w-4" />
            <Alert.Title>Atenção!</Alert.Title>
        </Alert.Root>
    ),
}

export const AlertNotIcon: Story = {
    name: "Alerta sem ícone",
    render: ({ variant }) => (
        <Alert.Root variant={variant}>
            <Alert.Title>Atenção!</Alert.Title>
            <Alert.Description>
                Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
            </Alert.Description>
        </Alert.Root>
    ),
}
