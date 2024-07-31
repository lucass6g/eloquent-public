import { Meta, StoryObj } from "@storybook/react";
import { Input } from "..";

const meta = {
  title: "Input/Pattern",
  component: Input.Pattern,
  args: {
    format: "(##) #####-####",
    placeholder: "Digite seu telefone",
    mask: "_",
    disabled: false,
    allowEmptyFormatting: false,
    patternChar: "#"
  },
  argTypes: {
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
    allowEmptyFormatting: {
      description: "Se o input deve permitir formatação vazia",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    format: {
      description: "Uma string que define o formato do input",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "undefined" }
      },
    },
    mask: {
      description: "Uma string que define a máscara do input",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "undefined" }
      },
    },
    patternChar: {
      description: "Um caractere que define o padrão do input",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "#" }
      },
    }
  },
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof Input.Pattern>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithPattern: Story = {
  render: function (args) {
    return (
      <div className="w-[392px]">
        <Input.Pattern {...args} />
      </div>
    )
  }
};