import { Meta, StoryObj } from "@storybook/react";
import { ProgressProps } from "@radix-ui/react-progress";
import { Progress } from ".";

const meta: Meta<ProgressProps> = {
  title: "Progress",
  component: Progress,
  args: {
    value: 66,
  },
  argTypes: {
    value: {
      control: { type: "number" },
      description: "Define o valor da barra de progresso",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<ProgressProps> = {};
