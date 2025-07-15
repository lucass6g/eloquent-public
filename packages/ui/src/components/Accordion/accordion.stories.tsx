import { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from ".";

type AccordionProps = {
  type: "single" | "multiple"
  collapsible?: boolean
  disabled: boolean
  defaultValue: string
}

const meta:Meta<AccordionProps> = {
  title: "Accordion",
  parameters: {
    docs: {
      description: {
        component: 'Um conjunto empilhado verticalmente de títulos interativos, cada um revelando uma seção associada de conteúdo.'
      },
    },
  },
  argTypes: {
    type: {
        description: "Determina se um ou vários itens podem ser abertos ao mesmo tempo.",
        options: ["single", "multiple"],
        control: {type: "radio"},
    },
    collapsible: {
        description: "Quando `type` é `single`, permite fechar o conteúdo ao clicar no trigger de um item aberto.",
        options: [true, false],
        control: {type: "boolean"},
        defaultValue: false,
    },
    defaultValue: {
        description: "O valor do item cujo conteúdo é expandido quando o Accordion é inicialmente renderizado. Use `defaultValue` se você não precisar controlar o estado de um Accordion.",
        control: {type: "text"},
        defaultValue: "item-1"
    },
    disabled: {
        description: "Desabilita o Accordion.",
        control: {type: "boolean"},
        options: [true, false],
         defaultValue: false,
    },
  },
  render: ({type, disabled,collapsible, defaultValue}) => (
    <Accordion.Root type={type as "single"} disabled={disabled} collapsible={collapsible} defaultValue={defaultValue}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Título para o Accordion Single</Accordion.Trigger>
        <Accordion.Content>
        Texto de resposta para o Accordion expandido
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
  tags: ['autodocs'],
} satisfies Meta<AccordionProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AccordionSingle: Story = {
  name: "Accordion Single",
  args: {
    type: "single",
    collapsible: true,
    disabled: false,
    defaultValue: "item-1"
  },
  render: ({type, disabled,collapsible, defaultValue}) => (
    <Accordion.Root type={type as "single"} disabled={disabled} collapsible={collapsible} defaultValue={defaultValue}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Título para o Accordion item</Accordion.Trigger>
        <Accordion.Content>Texto de resposta para o Accordion expandido</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Título para o Accordion item</Accordion.Trigger>
        <Accordion.Content>Texto de resposta para o Accordion expandido</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export const AccordionMultiple: Story = {
  name: "Accordion Multiple",
   args: {
    type: "multiple",
    disabled: false
  },
  render: ({type, disabled}) => (
    <Accordion.Root type={type} disabled={disabled}>
      <Accordion.Item value="item-1">
      <Accordion.Trigger>Título para o Accordion item</Accordion.Trigger>
      <Accordion.Content>Texto de resposta para o Accordion expandido</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Título para o Accordion com múltiplos itens</Accordion.Trigger>
        <Accordion.Content>Texto de resposta para o Accordion expandido</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export const AccordionDisabled: Story = {
  name: "Accordion Disabled",
   args: {
    type: "multiple",
    disabled: true
  },
  render: ({type, disabled}) => (
    <Accordion.Root type={type}>
      <Accordion.Item value="item-1" disabled={disabled}>
        <Accordion.Trigger>Título para o Accordion item desabilitado</Accordion.Trigger>
        <Accordion.Content>Texto de resposta para o Accordion expandido</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Título para o Accordion item</Accordion.Trigger>
        <Accordion.Content>Texto de resposta para o Accordion expandido</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}