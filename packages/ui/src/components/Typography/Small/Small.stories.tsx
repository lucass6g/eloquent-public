import { Small } from "./";
import type { SmallProps } from "./Small.props.ts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<SmallProps> = {
  title: "Typography/Small",
  component: Small,
  args: {
    children: "O Brasil é caramelo",
    size: "default",
  },
  argTypes: {
    size: {
      options: ["default", "sm"],
      control: { type: "radio" },
    },
  }
};

export default meta;

export const Default: StoryObj<SmallProps> = {};