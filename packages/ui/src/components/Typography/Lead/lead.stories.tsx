import { Lead } from "./index.tsx";
import type { LeadProps } from "./Lead.props.ts";
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<LeadProps> = {
  title: "Typography/Lead",
  component: Lead,
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

export const Default: StoryObj<LeadProps> = {
  args: {
    as: "h1",
  },
};