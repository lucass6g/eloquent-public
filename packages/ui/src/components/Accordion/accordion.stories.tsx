import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const meta = {
  title: "Accordion",
  render: () => (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Título para o Accordion</Accordion.Trigger>
        <Accordion.Content>
        Texto de resposta para o Accordion expandido
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
