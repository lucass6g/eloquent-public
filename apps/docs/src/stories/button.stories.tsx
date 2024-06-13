import { Button, type ButtonProps } from "@eloquent/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

type ButtonVariant = Required<ButtonProps["variant"]>;

type ButtonSize = Required<ButtonProps["size"]>;

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  args: {
    children: "Clique aqui",
    disabled: false,
    size: "default",
  },
  argTypes: {
    onClick: {
      action: "onClick",
      table: {
        disable: true,
      },
    },
    onFocus: {
      action: "onFocus",
      table: {
        disable: true,
      },
    },
    onMouseOver: {
      action: "onMouseOver",
      table: {
        disable: true,
      },
    },
    type: {
      control: { type: "inline-radio" },
      options: ["button", "submit", "reset"],
      description: "Tipo do botão",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
      },
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "ghost",
        "link",
        "outline",
        "secondary",
      ] satisfies ButtonVariant[],
      description: "Variante do botão",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "lg", "sm"] satisfies ButtonSize[],
      description: "Tamanho do botão",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      description: "Se o botão está desabilitado",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "s" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Icon: Story = {
  render(props) {
    return (
      <Button {...props}>
        <Plus />
      </Button>
    );
  },
  args: {
    variant: "default",
    size: "icon",
    "aria-label": "Adicionar",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};
