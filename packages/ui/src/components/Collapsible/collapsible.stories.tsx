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
            story: {
                inline: false,
                iframeHeight: 400,
            },
        },
    },
    argTypes: {
        "data-content": {
            description: "Atributo para customização padrão da div de visualização do collapsible",
            type: 'string',
            table: {
                defaultValue: { summary: "" }
            },
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
            <Collapsible.Trigger title="@peduarte marcou 3 repositórios com estrela" open={isOpen} />
            <div data-content>
                @eloquent/react
            </div>
            <Collapsible.Content className='w-[400px]'>
                <div>
                    @eloquent/tokens
                </div>
            </Collapsible.Content>
        </Collapsible.Root >)
    },
};
