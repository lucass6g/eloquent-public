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
  render: () => (<Switch.Default title="Título"/>),
};
export const SwitchWithTitle: Story = {
  name: "Switch com título",
  args: {},
  render: () => (<Switch.LabelText labelText="Título"/> ),
};
export const SwitchWithHelperText: Story = {
  name: "Switch com texto auxiliar",
  args: {},
  render: () => (<Switch.LabelText labelText="Título 2" helperText="Texto auxiliar ao Switch"/> ),
};
