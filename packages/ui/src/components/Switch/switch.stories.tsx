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
          <Switch.HelperText>Texto auxiliar ao Switch</Switch.HelperText>
        </div>
      </Switch.Root>
    )
  },
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<SwitchProps>;



export const SwitchWithoutLabel: Story = {
  name: "Switch Padrão",
  args: {},
  render: () => (
    <Switch.Root>
      <Switch.Button />
    </Switch.Root>

  ),
};


export const SwitchWithTitle: Story = {
  name: "Switch com título",
  args: {},
  render: () => (
    <Switch.Root>
      <Switch.Button />
      <div className="ml-2 flex flex-col">
        <Switch.Label>O Brasil é caramelo</Switch.Label>
      </div>
    </Switch.Root>

  ),
};


export const SwitchWithHelperText: Story = {
  name: "Switch com texto auxiliar",
  args: {},
  render: () => (
    <Switch.Root>
      <Switch.Button id="1" />
      <div className="ml-2 flex flex-col">
        <Switch.Label htmlFor="1">O Brasil é caramelo</Switch.Label>
        <Switch.HelperText>Texto auxiliar ao Switch</Switch.HelperText>
      </div>
    </Switch.Root>
  ),
};

export const SwitchButton: Story = {
  args: {
    disabled: false,
  },
};

