import { Caption } from "./index.tsx";
import type { CaptionProps } from "./Caption.props.ts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CaptionProps> = {
  title: "Typography/Caption",
  component: Caption,
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

export const Default: StoryObj<CaptionProps> = {};