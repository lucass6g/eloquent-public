import { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta = {
  title: "Switch",
  component: Switch.Default,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
  name: "Switch padrão",
  args: {},
  render: () => (<Switch.Root />),
};
export const SwitchWithTitle: Story = {
  name: "Switch com título",
  args: {},
  render: () => (<Switch.LabelText labelText="O Brasil é caramelo"/> ),
};
export const SwitchWithHelperText: Story = {
  name: "Switch com texto auxiliar",
  args: {},
  render: () => (<Switch.LabelText labelText="Título" helperText="Texto auxiliar ao Switch"/> ),
};
