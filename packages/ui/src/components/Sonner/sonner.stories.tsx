import { Meta, StoryObj } from '@storybook/react';
import { SonnerToaster } from '.';
import { toast } from 'sonner';
import { Button } from '../Button';

const meta = {
    title: 'Sonner Toaster',
    render: () => (<div>
        <SonnerToaster />
        <button onClick={() => toast.message('Elo o cartão do brasileiro', {
            className: 'toast-class',
            description: 'Elo o cartão do brasileiro',
            action: <Button onClick={() => console.log('Action!')}>Desfazer</Button>,
        })}>
            Abrir
        </button>
    </div>),
    argTypes: {
        description: {
            description: "Exibe um texto explicativo para chamar a atenção do usuário.",
        },
        closeButton: {
            description: "Adiciona um botão para fechar.",
            table: {
                defaultValue: { summary: false }
            },
        },
        duration: {
            description: "Tempo em milisegundos que deve decorrer até fechar automaticamente a mensagem.",
            table: {
                defaultValue: { summary: 4000 }
            },
        },
        position: {
            description: "Posição do toast",
            table: {
                defaultValue: { summary: 'bottom-right' }
            },
        },
        action: {
            description: "Adiciona um botão primário, clicando nele fechará o toast.",
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Um componente brinde opinativo para React."
            },
            story: {
                inline: false,
                iframeHeight: 300,
            },
        },
    }
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryName: Story = {
    name: 'Sonner padrão',
    args: {},
    render: () => (<div>
        <SonnerToaster />
        <button onClick={() => toast.message('Elo o cartão do brasileiro', {
            description: 'Elo o cartão do brasileiro',
            action: <Button onClick={() => console.log(':)')}>Desfazer</Button>,
        })}>
            Abrir
        </button>
    </div>),
};