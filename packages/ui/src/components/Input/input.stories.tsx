import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";
import { InputProps } from "./Input.props";
import { HelperText } from "../HelperText";

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
  args: {
    id: "label",
  },
  render: function (args) {
    return (
     <HelperText.Root>
        <Label htmlFor="label" className="text-neutral-800">Titulo</Label>
        <Input {...args} />
        <HelperText.Label>Seu texto de apoio aparecerá aqui.</HelperText.Label>
     </HelperText.Root>
    );
  },
};

export const InputWithButton: Story = {
  args: {},
  render: function (args) {
    return (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input {...args} />
        <Button className="max-w-28">Subscribe</Button>
      </div>
    )
  }
}
