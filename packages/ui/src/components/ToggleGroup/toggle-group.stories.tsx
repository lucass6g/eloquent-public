import { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, Toggle } from "../";

const meta = {
  title: "Toggle Group",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <>
      <ToggleGroup.Root
        variant={args.variant}
        size={args.size}
        disabled={args.disabled}
        type="multiple"
      >
        <ToggleGroup.Item value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </>
  ),
} satisfies Meta<typeof Toggle>;

type Story = StoryObj<typeof meta>;

//colors
export const ToggleGroupDefaultStyle: Story = {
  args: { variant: "default" },
};

export const ToggleGroupOutlineStyle: Story = {
  args: { variant: "outline" },
};

export const ToggleGroupSingle: Story = {
  args: { variant: "outline" },
  render: (args) => (
    <>
      <ToggleGroup.Root
        variant={args.variant}
        size={args.size}
        disabled={args.disabled}
        type="single"
      >
        <ToggleGroup.Item value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </>
  ),
};

//sizes
export const ToggleGroupSizeDefault: Story = {
  args: { variant: "default", size: "default" },
};

export const ToggleGroupSizeSmall: Story = {
  args: { variant: "default", size: "sm" },
};

export const ToggleGroupSizeLarge: Story = {
  args: { variant: "default", size: "lg" },
};

//disabled
export const ToggleGroupDisabled: Story = {
  args: { variant: "default", size: "default", disabled: true },
};

export default meta;
