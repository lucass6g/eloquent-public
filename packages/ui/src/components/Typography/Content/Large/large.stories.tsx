import { Large } from "./";
import type { LargeProps } from "./Large.props";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<LargeProps> = {
  title: "Typography/Large",
  component: Large,
  args: {
    children: "O Brasil é caramelo",
    as: "h1",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Define o nível do cabeçalho",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h1" },
      },
    },
    },
};

export default meta;

export const Default: StoryObj<LargeProps> = {
  args: {
    as: "h1",
  },
};