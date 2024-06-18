import { Checkbox, type CheckboxProps, Label } from "../";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CheckboxProps> = {
  title: "Checkbox",
  component: Checkbox,
  args: {
    disabled: false,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {};

export const WithLabel: Story = {
  render(props) {
    return (
      <div className="flex items-center gap-2">
        <Checkbox {...props} id="terms" />
        <Label htmlFor="terms">Aceitar termos e condições da promoção</Label>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
