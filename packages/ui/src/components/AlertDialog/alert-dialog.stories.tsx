import { Meta, StoryObj } from '@storybook/react-vite'

import {
    AlertDialog,
} from '.'

const meta = {
    title: 'Alert Dialog',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Uma caixa de diálogo modal que sobrepõe o conteúdo principal e solicita uma ação ao usuário."
            }
        }
    },
    argTypes: {
        defaultOpen: {
          description: "O estado aberto da caixa de diálogo quando ela é renderizada inicialmente. Use quando não precisar controlar seu estado aberto.",
          type: { name: "boolean" },
        },
        open: {
          description: "O estado aberto controlado da caixa de diálogo. Deve ser usado em conjunto com onOpenChange.",
          type: { name: "boolean" },
        },
        onOpenChange: {
          description: "Manipulador de eventos chamado quando o estado aberto da caixa de diálogo é alterado.",
          type: { name: "function" },
        },
      },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<{}>

export const AlertDialogDemo: Story = {
    name: "Alert padrão",
    args: {},
    render: () => {
        return (
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
        )
    },
}
