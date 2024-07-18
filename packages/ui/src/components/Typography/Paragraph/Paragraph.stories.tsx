import { Paragraph } from "./index.tsx";
import type { ParagraphProps } from "./Paragraph.props.ts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ParagraphProps> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  args: {
    children: "O Brasil é caramelo",
  },
};

export default meta;

export const Default: StoryObj<ParagraphProps> = {};