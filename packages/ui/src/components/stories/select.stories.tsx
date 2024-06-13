import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
} from "../select";

const meta = {
  title: "Select",
  component: () => (
    <Select.Root>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="Escolha uma opção de fruta" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Frutas</Select.Label>
          <Select.Item value="apple">Maçã</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Mirtilo</Select.Item>
          <Select.Item value="grapes">Uvas</Select.Item>
          <Select.Item value="pineapple">Abacaxi</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

//render componente
export const SelectDemo: Story = {
  args: {},
};
