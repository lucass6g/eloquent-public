import { Meta, StoryObj } from "@storybook/react";
import { InputMask } from ".";

const meta = {
  title: "Input Mask",
  component: InputMask.Numeric,
  argTypes: {
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
    }
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputMask.Numeric>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputNumeric: Story = {
  render: function(args) {
    return (
      <div className="w-[392px]">
        <InputMask.Numeric {...args}/>
      </div>
    )
  }
};