import { Meta, StoryObj } from '@storybook/react'

import {
    AlertDialog,
} from '.'

const meta = {
    title: 'Alert Dialog',
    component: () => {
        return (
            <>
                <AlertDialog.Root>
                    <AlertDialog.Trigger data-testid="trigger">
                        Abrir
                    </AlertDialog.Trigger>
                    <AlertDialog.Content>
                        <AlertDialog.Header>
                            <AlertDialog.Title data-testid="title">
                            Você está certo disso?
                            </AlertDialog.Title>
                            <AlertDialog.Description data-testid="description">
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados dos nossos servidores
                            </AlertDialog.Description>
                        </AlertDialog.Header>
                        <AlertDialog.Footer>
                            <AlertDialog.Cancel data-testid="cancel">
                                Cancelar
                            </AlertDialog.Cancel>
                            <AlertDialog.Action data-testid="Action">
                                Continuar
                            </AlertDialog.Action>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            </>
        )
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<{}>

export const AlertDialogDemo: Story = {
    name: "Demonstração",
    args: {},
}
