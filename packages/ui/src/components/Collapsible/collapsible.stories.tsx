import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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
            type: 'boolean',
            table: {
                defaultValue: { summary: "false" }
            },
        },
        defaultOpen: {
            description: "O estado aberto do componente quando ele é inicialmente renderizado. Use quando não precisar controlar seu estado.",
            type: 'boolean',
        },
        open: {
            description: "O estado aberto controlado do collapsible. Deve ser usado em conjunto com onOpenChange.",
            type: 'boolean',
        },
        onOpenChange: {
            description: "Manipulador de eventos chamado quando o estado aberto do collapsible é alterado.",
            type: 'function',
        },
        disabled: {
            description: "Quando verdadeiro, impede que o usuário interaja com o collapsible.",
            type: 'boolean',
        },
    },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {
    name: 'Collapsible padrão',
    args: {},
    render: () => {
        const [isOpen, setIsOpen] = useState(false)


        return (<Collapsible.Root
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <Collapsible.Trigger title="@peduarte marcou 3 repositórios com estrela" open={isOpen}/>
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
