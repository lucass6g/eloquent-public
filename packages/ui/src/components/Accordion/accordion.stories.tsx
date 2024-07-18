import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const meta = {
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
      description: "`single` ou `multiple`",
      type: { name: "string" },
    },
    collapsible: {
      description: "Se o Accordion pode ser fechado.",
      type: { name: "boolean"},
    }
  },
  render: () => (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Título para o Accordion Single</Accordion.Trigger>
        <Accordion.Content>
        Texto de resposta para o Accordion expandido
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
  tags: ['autodocs'],
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AccordionWithOneItem: Story = {
  name: "Accordion With One Item",
  args: {},
  render: () => (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Título para o Accordion com 1 item</Accordion.Trigger>
        <Accordion.Content>Item-1</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export const AccordionWithMultipleItems: Story = {
  name: "Accordion With Multiple Items",
  args: {},
  render: () => (
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Título para o Accordion com múltiplos itens</Accordion.Trigger>
        <Accordion.Content>Item-1</Accordion.Content>
        <Accordion.Content>Item-2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}