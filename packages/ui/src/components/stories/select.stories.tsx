import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../select";

const meta = {
  title: "Select",
  component: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Escolha uma opção de fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frutas</SelectLabel>
          <SelectItem value="apple">Maçã</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Mirtilo</SelectItem>
          <SelectItem value="grapes">Uvas</SelectItem>
          <SelectItem value="pineapple">Abacaxi</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
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
