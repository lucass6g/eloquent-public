import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenuDemo } from "../demo/dropdown-menu-demo";

const meta = {
  title: "DropdownMenu",
  component: DropdownMenuDemo,
  parameters: {
    layout: "up",
  },
} satisfies Meta<typeof DropdownMenuDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropDownMenu: Story = {
  args: {},
};
