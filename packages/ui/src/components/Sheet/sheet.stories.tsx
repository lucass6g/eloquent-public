import { Meta, StoryObj } from '@storybook/react-vite';
import { Sheet } from '.';

const meta = {
    title: 'Sheet',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Estende o componente Dialog para exibir conteúdo que complementa o conteúdo principal da tela.'
            },
        },
    },
    argTypes: {
        side: {
            control: { type: 'radio' },
            options: ['bottom', 'top', 'right', 'left'],
            description: 'Use a propriedade side para <Sheet.Content /> para indicar a borda da tela onde o componente aparecerá. Os valores podem ser top, right, bottom ou left.',
            table: {
                defaultValue: { summary: 'right' }
            },
        },
        size: {
            description: 'Você pode ajustar o tamanho da planilha usando classes CSS.',
        },
    },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {
    name: 'Sheet Padrão',
    args: {},
    render: (args) => (<Sheet.Root>
        <Sheet.Trigger>Abrir</Sheet.Trigger>
        <Sheet.Content {...args}>
            <Sheet.Header>
                <Sheet.Title>Você está certo disso?</Sheet.Title>
                <Sheet.Description>
                    Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
                    e removerá seus dados dos nossos servidores.
                </Sheet.Description>
            </Sheet.Header>
        </Sheet.Content>
    </Sheet.Root>),
};
