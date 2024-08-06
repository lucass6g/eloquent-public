import { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '.';

const meta = {
    title: 'ScrollArea',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente responsável pela funcionalidade de rolagem vertical e horizontal.'
            },
        },
    },
    argTypes: {

        orientation: {
            description: 'O posicionamento do scrollbar "vertical" e "horizontal"',
            type: 'enum',
            control: 'select',
            options: ['vertical', 'horizontal'],
        },
        scrollHideDelay: {
            description: 'Se type for definido como "scroll" ou "hover", esta propriedade determina o período de tempo, em milissegundos, antes que as barras de rolagem sejam ocultadas após o usuário parar de interagir com as barras de rolagem.',
            type: 'enum',
            control: 'number',
            table: {
                defaultValue: { summary: 600 }
            }
        },
        type: {
            description: `"auto": A barra de rolagem é visível quando o conteúdo está transbordando na orientação correspondente.
            <br/><br/>“always”: A barra de rolagem é sempre visível, independentemente de o conteúdo estar transbordando ou não.
            <br/><br/>“scroll”: A barra de rolagem é visível quando o usuário está rolando na orientação correspondente.
            <br/><br/>“hover”: A barra de rolagem é visível quando o usuário está rolando na orientação correspondente e quando o usuário está passando o mouse sobre a área de rolagem.`,
            control: 'select',
            options: ['auto', 'always', 'scroll', 'hover'],
            table: {
                defaultValue: { summary: "hover" }
            },
            type: 'enum'
        }
    },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalScroll: Story = {
    name: 'Scroll Area horizontal',
    args: {},
    render: (args: any) => {
        const { orientation, scrollHideDelay, type } = args;
        return (<ScrollArea.Root scrollHideDelay={scrollHideDelay} type={type} className={orientation === 'horizontal' ? "w-96 whitespace-nowrap rounded-[6px] border" : "h-[200px] w-[350px] rounded-[6px] border p-4"}>
            <div className={orientation === 'horizontal' ? "flex w-max space-x-4 p-4" : ""}>
                O Design System é uma iniciativa para escalar a forma como projetamos e desenvolvemos interfaces e produtos digitais na Elo.
                Todos os componentes foram projetados para serem reutilizados de acordo com a necessidade.
                Nosso objetivo é garantir consistência, acessibilidade e qualidade.
            </div>
            <ScrollArea.ScrollBar orientation={orientation ?? 'horizontal'} />
        </ScrollArea.Root>)
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de Scroll Area padrão com Scroll Bar horizontal.'
            }
        }
    }
};
export const VerticalScroll: Story = {
    name: 'Scroll Bar vertical',
    args: {},
    render: () => (<ScrollArea.Root className="h-[200px] w-[350px] rounded-[6px] border p-4">
        O Design System é uma iniciativa para escalar a forma como projetamos e desenvolvemos interfaces e produtos digitais na Elo.
        Todos os componentes foram projetados para serem reutilizados de acordo com a necessidade.
        Nosso objetivo é garantir consistência, acessibilidade e qualidade.
        <ScrollArea.ScrollBar />
    </ScrollArea.Root>),
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de Scroll Area com Scroll Bar vertical.'
            }
        }
    }
};
