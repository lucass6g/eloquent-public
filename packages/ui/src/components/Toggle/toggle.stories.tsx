import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentIcon } from 'lucide-react';
import { Toggle } from '.';

const meta = {
    title: 'Toggle',
    tags: ['autodocs'],
    render: (args) => (<Toggle variant='default' {...args}><ComponentIcon /> Label </Toggle>),
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Um botão de dois estados que pode ser ativado ou desativado."
            },
            story: {
                inline: false,
                iframeHeight: 300,
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['default', 'sm', 'lg'],
            description: "Define o tamanho do toggle",
            type: 'default | sm | lg',
            table: {
                defaultValue: { summary: "default" }
            },
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outline'],
            description: "Adiciona um botão para fechar.",
            type: 'default | outline',
            table: {
                defaultValue: { summary: "default" }
            },
        },
    },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ToggleWithText: Story = {
    name: 'Toggle com texto',
    args: {},
    render: (args) => (<Toggle variant='default' {...args}><ComponentIcon /> Label </Toggle>),
    parameters: {
        docs: {
            description: {
                story: 'Variação contendo um ícone e um texto de apoio.'
            }
        }
    }
};

export const ToggleDefault: Story = {
    name: 'Toggle padrão',
    args: {},
    render: (args) => (<Toggle variant='outline' size='sm' {...args}><ComponentIcon /> </Toggle>),
    parameters: {
        docs: {
            description: {
                story: 'Variação padrão contendo apenas um icone no componente.'
            }
        }
    }
};


//colors
export const ToggleDefaultStyle: Story = {
    args: { variant: 'default' },
}

export const ToggleOutlineStyle: Story = {
    args: { variant: 'outline' },
}

//sizes
export const ToggleSizeDefault: Story = {
    args: { variant: 'default', size: 'default' },
}

export const ToggleSizeSmall: Story = {
    args: { variant: 'default', size: 'sm' },
}

export const ToggleSizeLarge: Story = {
    args: { variant: 'default', size: 'lg' },
}

//disabled
export const ToggleDisabled: Story = {
    args: { variant: 'default', size: 'default', disabled: true },
}
