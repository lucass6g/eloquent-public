import { Meta, StoryObj } from "@storybook/react";
import { Pattern } from ".";

const meta = {
  title: "InputPattern",
  component: Pattern,
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
    }
  },
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof Pattern>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputPattern: Story = {
  args: {
    format: "##.###.###/####-##",
    placeholder: "Digite seu CNPJ"
  },
  render: function (args) {
    return (
      <div className="w-[392px]">
        <Pattern {...args} />
      </div>
    )
  }
};