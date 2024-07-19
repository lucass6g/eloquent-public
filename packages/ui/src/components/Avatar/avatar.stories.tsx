import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta = {
  title: "Avatar",
  render: () => (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
      <Avatar.Fallback>Shadcn</Avatar.Fallback>
    </Avatar.Root>
  ),
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarWithImage: Story = {
  args: {},
  render: () => (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
      <Avatar.Fallback>Avatar Shad</Avatar.Fallback>
    </Avatar.Root>
  ),
};
export const AvatarWithFallback: Story = {
  args: {},
  render: () => (
    <Avatar.Root>
      <Avatar.Image src="" alt="@shadcn"/>
      <Avatar.Fallback>Elo</Avatar.Fallback>
    </Avatar.Root>
  ),
};
export const AvatarWithSizesProperties: Story = {
  args: {},
  name: 'Avatar com tamanhos específicos',
  render: () => (
    <Avatar.Root size="xl">
      <Avatar.Image src="" alt="@shadcn"/>
      <Avatar.Fallback fontSize="lg">Elo</Avatar.Fallback>
    </Avatar.Root>
  ),
};
