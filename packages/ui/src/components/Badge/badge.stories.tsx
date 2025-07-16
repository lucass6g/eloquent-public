import { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from ".";
import { badgeVariants } from "./variants";
import { VariantProps } from "class-variance-authority";

type TypeCustomBadgeProps = {} & VariantProps<typeof badgeVariants>;

const meta = {
  title: "Badge",
  render: (args) => (
    <Badge variant="default" {...args}>
      Badge
    </Badge>
  ),
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "destructive"],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<TypeCustomBadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

//colors
export const Default: Story = {
  args: {},
  render: (args) => (
    <Badge variant="default" {...args}>
      Badge
    </Badge>
  ),
};

export const Secondary: Story = {
  args: {},
  render: (args) => (
    <Badge variant="secondary" {...args}>
      Badge
    </Badge>
  ),
};

export const Outline: Story = {
  args: {},
  render: (args) => (
    <Badge variant="outline" {...args}>
      Badge
    </Badge>
  ),
};
export const Destructive: Story = {
  args: {},
  render: (args) => (
    <Badge variant="destructive" {...args}>
      Badge
    </Badge>
  ),
};
