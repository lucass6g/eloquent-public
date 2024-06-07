import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

const meta = {
  title: "components/Avatar",
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>Shadcn</AvatarFallback>
    </Avatar>
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
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>Avatar Shad</AvatarFallback>
    </Avatar>
  ),
};
export const AvatarWithFallback: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="@shadcn" />
      <AvatarFallback>CH</AvatarFallback>
    </Avatar>
  ),
};
