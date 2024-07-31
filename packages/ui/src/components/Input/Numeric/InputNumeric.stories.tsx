import { Meta, StoryObj } from "@storybook/react";
import { Input } from "..";

const meta = {
  title: "Input/Numeric",
  component: Input.Numeric,
  args: {
    placeholder: "Digite o valor do cashback",
    prefix: "R$ ",
    thousandSeparator: ",",
    suffix: " BRL",
    disabled: false,
    allowLeadingZeros: false,
    allowNegative: false,
    fixedDecimalScale: false,
    decimalSeparator: ".",
    thousandsGroupStyle: "none"
  },
  argTypes: {
    placeholder: {
      description: "Uma string que define o texto de ajuda que é exibido quando o input está vazio.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "Digite o valor" }
      },
    },
    disabled: {
      description: "Se o input está desabilitado.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    allowLeadingZeros: {
      description: "Se o input aceita zeros à esquerda.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    allowNegative: {
      description: "Se o input aceita números negativos.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" }
      }
    },
    allowedDecimalSeparators: {
      description: "Uma string que define os separadores decimais permitidos.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "undefined" }
      }
    },
    decimalScale: {
      description: "Limita o número de casas decimais.",
      control: { type: "number" },
      table: {
        defaultValue: { summary: "undefined" }
      }
    },
    decimalSeparator: {
      description: "Define o separador decimal.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "." }
      }
    },
    fixedDecimalScale: {
      description: "Se definido como true, ele adiciona 0s à direita após decimalSeparator.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" }
      }
    },
    thousandSeparator: {
      description: "Define o separador de milhar.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "," }
      }
    },
    prefix: {
      description: "Adiciona o caractere de prefixo antes do valor de entrada.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "undefined" }
      }
    },
    suffix: {
      description: "Adiciona o sufixo após o valor de entrada.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "undefined" }
      }
    },
    thousandsGroupStyle: {
      description: "Define o estilo de agrupamento de mil.",
      control: { type: "select" },
      options: ["thousand", "lakh", "wan", "none", undefined],
      table: {
        defaultValue: { summary: "none" }
      }
    }
  },
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof Input.Numeric>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithNumeric: Story = {
  render: function (args) {
    return (
      <div className="w-[392px]">
        <Input.Numeric {...args} />
      </div>
    )
  }
};