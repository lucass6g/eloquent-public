import { Meta, StoryObj } from "@storybook/react";
import { Label, Input } from "../";
import { InputProps } from "./Input.props";

const meta = {
  title: "Input",
  component: (args) => <Input {...args} />,
  args: {
    type: "text",
    disabled: false,
    placeholder: "Label"
  },
  argTypes: {
    type: {
      description: "Uma string especificando o tipo de controle a ser renderizado.",
      control: { type: "select" },
      table: {
        defaultValue: { summary: "text" },
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
    placeholder: {
      description: "Uma string que define o texto de ajuda que é exibido quando o input está vazio.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Name" }
      },
    },
    disabled: {
      description: "Se o input está desabilitado",
      control: { type: "boolean" },
      table: {
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
    return <Input {...args}/>
  }
};

export const InputWithLabel: Story = {
  args: {},
  render: function (args) {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-neutral-800" htmlFor="with-label">
          Título
        </Label>
        <Input id="with-label" {...args} />
      </div>
    );
  },
};


export const InputWithHelper: Story = {
  args: {},
  render: function (args) {
    return (
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label className="text-neutral-800" htmlFor="with-label">
          Título
        </Label>
        <Input helperText="Seu texto de apoio aparecerá aqui." id="with-label" {...args} />
      </div>
    );
  },
};
