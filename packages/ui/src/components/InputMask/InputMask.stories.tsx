import { Meta, StoryObj } from "@storybook/react";
import { InputMask } from ".";
import { InputMaskProps } from "./InputMask.props";
import { Label } from "../Label";
import { HelperText } from "../HelperText";
import { Button } from "../Button";

const meta = {
  title: "Input Mask",
  component: InputMask,
  argTypes: {
    type: {
      description: "Uma string especificando o tipo de controle a ser renderizado.",
      control: {type: "select"},
      table: {
        defaultValue: {summary: "text"},
        type: {
          summary: "string",
          detail: "'text' | 'tel'"
        }
      },
      options: ["text", "tel"],
    },
    placeholder: {
      description: "Uma string que define o texto de ajuda que é exibido quando o input está vazio.",
      control: {type: "text"},
      table: {
        defaultValue: {summary: "Label"}
      },
    },
    disabled: {
      description: "Se o input está desabilitado",
      control: { type: "boolean" },
      table: {
        defaultValue: {summary: "false"},
      },
    },
    mask: {
      description: "Máscara do input"
    },
    maskChar: {
      description: "Caractere para cobrir partes não preenchidas da máscara. O caractere padrão é `_`. Se definido como nulo ou string vazia, as partes não preenchidas ficarão vazias como na entrada comum.",
      table: {defaultValue: {summary: "_"}}
    }
  },
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
} satisfies Meta<InputMaskProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    mask: "+55\ (99)\ 9999-9999",
    placeholder: "Digite seu telefone"
  },
  render: function(args) {
    return (
      <div className="w-[392px]">
        <InputMask {...args}/>
      </div>
    )
  }
};

export const InputWithLabel: Story = {
  args: {
    mask: "+55\ (99)\ 9999-9999",
    placeholder: "Digite seu telefone"
  },
  render: function (args) {
    return (
      <div className="grid w-[392px] max-w-sm items-center gap-1.5">
        <Label className="text-neutral-800 font-medium" htmlFor="with-label">
          Telefone*
        </Label>
        <InputMask id="with-label" {...args} />
      </div>
    );
  },
};

export const InputWithHelper: Story = {
  args: {
    placeholder: "Digite seu telefone",
    mask: "+55\ (99)\ 9999-9999",
    id: "label"
  },
  render: function (args) {
    return (
     <HelperText.Root className="w-[392px]">
        <Label htmlFor="label" className="text-neutral-800 font-medium">Telefone*</Label>
        <InputMask {...args} />
        <HelperText.Label>Seu telefone com prefixo +55</HelperText.Label>
     </HelperText.Root>
    );
  },
};

export const InputWithButton: Story = {
  args: {
    mask: "+55\ (99)\ 9999-9999",
    placeholder: "Digite seu telefone"
  },
  render: function (args) {
    return (
      <div className="flex gap-2 w-[392px] items-center">
        <InputMask {...args} />
        <Button className="w-28">Enviar</Button>
      </div>
    )
  }
}

