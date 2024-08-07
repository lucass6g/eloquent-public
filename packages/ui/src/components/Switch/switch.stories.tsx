import { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";
import { SwitchProps } from "@radix-ui/react-switch";

const meta = {
  title: "Switch",
  render: (args: any) => {
    const { disabled } = args;
    return (
      <Switch.Root disabled={disabled}>
        <Switch.Button id="1" />
        <div className="ml-2 flex flex-col">
          <Switch.Label htmlFor="1">Teste</Switch.Label>
        </div>
      </Switch.Root>
    )
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Um controle que permite ao usuário ligar ou desligar opções apresentadas.",
      },
    }
  },
  args: {
    disabled: false,
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<SwitchProps>;

export const DefaultSwitch: Story = {
  name: "Switch padrão",
  args: {
    disabled: false,
  },
  render: (args: any) => {
    const { disabled } = args;
    return (
      <Switch.Root disabled={disabled}>
        <Switch.Button id="1" />
        <Switch.Label htmlFor="1">Teste</Switch.Label>
      </Switch.Root>
    )
  },
};


export const SwitchWithoutLabel: Story = {
  name: "Switch",
  args: {},
  render: () => (
    <Switch.Root>
      <Switch.Button />
    </Switch.Root>

  ),
};

export const SwitchWithHelperText: Story = {
  name: "Switch com texto auxiliar",
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Aplicado para adicionar algum um texto de apoio à opção.",
      },
    }
  },
  render: () => (
    <Switch.Root>
      <Switch.Button id="1" />
      <div className="flex flex-col">
        <Switch.Label htmlFor="1">O Brasil é caramelo</Switch.Label>
        <Switch.HelperText>Texto auxiliar ao Switch</Switch.HelperText>
      </div>
    </Switch.Root>
  ),
};


