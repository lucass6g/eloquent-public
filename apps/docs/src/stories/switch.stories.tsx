import { Meta, StoryObj } from "@storybook/react";
import { SwitchDemo as Switch } from "../demo/switch-demo";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchDemo: Story = {
  args: {},
};
