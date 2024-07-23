import { Meta, StoryObj } from "@storybook/react";
import { Button, Label, Input } from "../";
import { InputProps } from "./Input.props";

const meta = {
  title: "Input",
  component: (args) => <Input {...args} />,
  args: {
    type: "text",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "file",
        "email",
        "password",
        "text",
        "checkbox",
        "radio",
        " date",
        "datetime-local",
        "email",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "time",
        "url",
        "week",
      ],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    type: "text",
    placeholder: "Name",
  },
};

export const InputFile: Story = {
  args: {},
  render: function (args) {
    return (
      <>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="p-2" htmlFor="picture">
            Picture
          </Label>
          <Input id="picture" type="file" {...args} />
        </div>
      </>
    );
  },
};

export const InputDisabled: Story = {
  args: {
    disabled: true,
  },
  render: function (args) {
    return <Input type="email" placeholder="Email" {...args} />;
  },
};

export const InputWithLabel: Story = {
  args: {},
  render: function () {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="p-2" htmlFor="email">
          Email
        </Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    );
  },
};

export const InputWithButton: Story = {
  args: {},
  render: function () {
    return (
      <div className="flex w-full max-w-sm items-center space-x-2 gap-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    );
  },
};
