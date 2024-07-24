import { Meta, StoryObj } from "@storybook/react";
import { Button, Label, Input } from "../";
import { InputProps } from "./Input.props";

const meta = {
  title: "Input",
  component: (args) => <Input {...args} />,
  args: {
    type: "text",
    disabled: false,
  },
  argTypes: {
    type: {
      description: "Uma string especificando o tipo de controle a ser renderizado.",
      table: {
        defaultValue: { summary: "text" },
        control: { type: "select" },
      },
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
    disabled: {
      description: "Se o input está desabilitado",
      table: {
        control: { type: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {},
  render: function(args) {
    return (
      <div className="w-[392px]">
        <Input placeholder="Name" type="text" {...args}/>
      </div>
    )
  }
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
      <div className="grid w-[392px] max-w-sm items-center gap-1.5">
        <Label className="p-2 text-neutral-800" htmlFor="email">
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
      <div className="flex w-[392px] max-w-sm items-center space-x-2 gap-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    );
  },
};
