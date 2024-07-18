import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const meta = {
  title: "Accordion",
  args: {},
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
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AccordionMultiple: Story = {
  name: "Accordion Multiple",
  args: {},
  render: () => (
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Título para o Accordion Multiple</Accordion.Trigger>
        <Accordion.Content>Item-1</Accordion.Content>
        <Accordion.Content>Item-2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}