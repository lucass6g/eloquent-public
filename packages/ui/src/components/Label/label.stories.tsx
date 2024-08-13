import { Meta, StoryObj } from '@storybook/react/*';
import { Label } from '.';

const meta = {
    title: 'Label',
    argTypes: {
        asChild: {
            description: "Altere o elemento renderizado padrão para aquele passado como filho, mesclando seus adereços e comportamento.",
            type: { name: "boolean" },
        },
        htmlFor: {
            description: "O id do elemento ao qual o rótulo está associado.",
            type: { name: "string"},
        }
      },
    parameters: {
        docs: {
          description: {
            component: 'Aplicado como rótulo em páginas e componentes.'
          },
        },
        layout: 'centered',
      },
    component: Label,
    tags: ['autodocs'],
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: "Default Label",
    render: () => (
        <Label>Nome da Página</Label>
    )
}