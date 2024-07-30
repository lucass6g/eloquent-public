import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../Label";
import { Input } from "../";
import { Button } from "../../Button";
import { InputProps } from "./Input.props";
import { HelperText } from "../../HelperText";

const meta = {
  title: "Input/Root",
  component: Input.Root,
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
        type: {
          summary: "string",
          detail: "'text' | 'password' | 'number' | 'email'"
        }
      },
      options: [
        "password",
        "text",
        "email"
      ],
    },
    placeholder: {
      description: "Uma string que define o texto de ajuda que é exibido quando o input está vazio.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Label" }
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

export const Default: Story = {
  args: {},
  render: function (args) {
    return (
      <div className="w-[392px]">
        <Input.Root {...args} />
      </div>
    )
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: function (args) {
    return (
      <div className="w-[392px]">
        <Input.Root {...args} />
      </div>
    )
  }
}

export const WithLabel: Story = {
  args: {},
  render: function (args) {
    return (
      <div className="grid w-[392px] max-w-sm items-center gap-1.5">
        <Label className="text-neutral-800 font-medium" htmlFor="with-label">
          Título
        </Label>
        <Input.Root id="with-label" {...args} />
      </div>
    );
  },
};

export const WithHelper: Story = {
  args: {
    id: "label",
  },
  render: function (args) {
    return (
      <HelperText.Root className="w-[392px]">
        <Label htmlFor="label" className="text-neutral-800 font-medium">Titulo</Label>
        <Input.Root {...args} />
        <HelperText.Label>Seu texto de apoio aparecerá aqui.</HelperText.Label>
      </HelperText.Root>
    );
  },
};

export const WithButton: Story = {
  args: {},
  render: function (args) {
    return (
      <div className="flex gap-2 w-[392px] items-center">
        <Input.Root {...args} />
        <Button className="w-28">Button Label</Button>
      </div>
    )
  }
}
