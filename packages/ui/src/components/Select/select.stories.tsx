import { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta = {
  title: "Select",
  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: `
<Select.Root>f
  <Select.Trigger className="w-[180px]">
    <Select.Value className="text-neutral-800" placeholder="Selecione um item" />
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      <Select.Item value="apple">Item 1</Select.Item>
      <Select.Item value="banana">Item 2</Select.Item>
      <Select.Item value="blueberry">Item 3</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
        `,
        language: 'tsx',
      },
      description: {
        component: 'Exibe uma lista de opções para o usuário escolher acionada por um botão.'
      },
      subcomponents: { Props: 'argTypes' }, 
    },
  },
  argTypes: {
    defaultValue: {
      description: "O valor da seleção quando renderizado inicialmente. Use quando não precisar controlar o estado da seleção.",
      type: { name: "string" },
    },
    value: {
      description: "O valor controlado da seleção. Deve ser usado em conjunto com onValueChange.",
      type: { name: "string"},
    },
    onValueChange: {
      description: "Manipulador de eventos chamado quando o valor é alterado.",
      type: { name: "function" },
    },
    defaultOpen: {
      description: "O estado aberto da seleção quando ela é renderizada inicialmente. Use quando não precisar controlar seu estado aberto.",
      type: { name: "boolean" },
    },
    open: {
      description: "O estado aberto controlado da seleção. Deve ser usado em conjunto com onOpenChange.",
      type: { name: "boolean" },
    },
    onOpenChange: {
      description: "Manipulador de eventos chamado quando o estado aberto da seleção é alterado.",
      type: { name: "function" },
    },
    dir: {
      description: "A direção de leitura da seleção, quando aplicável. Se omitido, herda globalmente de DirectionProvider ou assume o modo de leitura LTR (da esquerda para a direita).",
      type: { name: "ltr ou rtl" },
    },
    name: {
      description: "O nome da seleção. Enviado com seu próprio formulário como parte de um par nome/valor.",
      type: { name: "string" },
    },
    disabled: {
      description: "Quando verdadeiro, impede que o usuário interaja com o select.",
      type: { name: "boolean" },
    },
    required: {
      description: "Quando verdadeiro, indica que o usuário deve selecionar um valor antes que o formulário proprietário possa ser enviado.",
      type: { name: "boolean" },
    },
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

//render componente
export const Default: Story = {
  args: {},
  render: () => (
    <Select.Root>
      <Select.Trigger className="w-[180px]">
        <Select.Value className="text-neutral-800" placeholder="Selecione um item" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item value="apple">Item 1</Select.Item>
          <Select.Item value="banana">Item 2</Select.Item>
          <Select.Item value="blueberry">Item 3</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};