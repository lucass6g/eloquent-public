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

export const AccordionSingle: Story = {
  name: "Accordion Single",
  args: {},
  render: () => (
    <Accordion.Root type="single" collapsible>
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
  args: {},
  render: () => (
    <Accordion.Root type="multiple">
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