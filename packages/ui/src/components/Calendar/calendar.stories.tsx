import { Meta, StoryObj } from '@storybook/react-vite';
import {Calendar } from ".";

//meta
const meta = {
  title: "Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
