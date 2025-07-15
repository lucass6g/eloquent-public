import { Table } from "./";
import type {TableProps} from "./Table.props.ts";
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<TableProps> = {
  title: "Typography/Table",
  component: Table,
  args: {
    children: "O Brasil é caramelo",
    variant: "title",
  },
  argTypes: {
    variant: {
      options: ["title", "body"],
      control: { type: "radio" },
    },
  }
};

export default meta;

export const Default: StoryObj<TableProps> = {};