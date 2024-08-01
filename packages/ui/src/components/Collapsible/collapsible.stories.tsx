import { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from '.';

const meta = {
    title: 'Collapsible',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Um componente interativo que expande/recolhe um painel.'
            },
        },
    },
    argTypes: {
        asChild: {
            description: "Altera o elemento renderizado padrão para aquele passado como filho, mesclando seus adereços e comportamento.",
            table: {
                defaultValue: { summary: "false" }
            },
        },
        defaultOpen: {
            description: "O estado aberto do componente quando ele é inicialmente renderizado. Use quando não precisar controlar seu estado.",
            control: { type: 'boolean' },
            options: [true, false],
        },
        open: {
            description: "O estado aberto controlado do collapsible. Deve ser usado em conjunto com onOpenChange.",
            control: { type: 'boolean' },
            options: [true, false],
        },
        onOpenChange: {
            description: "Manipulador de eventos chamado quando o estado aberto do collapsible é alterado.",
            type: 'function',
        },
        disabled: {
            description: "Quando verdadeiro, impede que o usuário interaja com o collapsible.",
            control: { type: 'boolean' },
            options: [true, false],
        },
    },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {
    name: 'Collapsible padrão',
    args: {},
    render: (args: any) => {
        const { open } = args

        return (<Collapsible.Root
            {...args}
        >
            <Collapsible.Trigger title="@peduarte marcou 3 repositórios com estrela" open={open} asChild />
            <div className='rounded-[6px] border px-4 py-3 text-sm text-neutral-500 w-[400px]'>
                @eloquent/react
            </div>
            <Collapsible.Content>
                <div>
                    @eloquent/tokens
                </div>
            </Collapsible.Content>
        </Collapsible.Root >)
    },
};
