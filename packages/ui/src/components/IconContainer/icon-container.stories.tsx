import { Meta, StoryObj } from '@storybook/react';
import { ComponentIcon } from 'lucide-react';
import { Icon } from '.';

const meta = {
    title: 'Icon Container',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente com finalidade de encapsular ícones e definir sua área de clique.'
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'Define o tamanho do icone',
            table: {
                defaultValue: { summary: 'medium' }
            },
        },
    },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {
    name: 'Icon Container',
    render: (args) => (<Icon.Container {...args}>
            <ComponentIcon />
        </Icon.Container>)
    ,
};
