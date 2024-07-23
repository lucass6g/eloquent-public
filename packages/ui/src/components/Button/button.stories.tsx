import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { LayoutGrid, Loader2, X } from "lucide-react";

import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.props";

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
        "link",
        "secondary",
        "badge"
      ] satisfies ButtonVariant[],
      description: "Variante do botão",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "sm"] satisfies ButtonSize[],
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
  tags: ["experimental"]
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

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const WithIcon: Story = {
  render(props) {
    return (
      <Button {...props}>
        <LayoutGrid className="mr-2 h-4 w-4" />
        Clique aqui
      </Button>
    );
  },
};

export const Loading: Story = {
  render: (props) => {
    return (
      <Button {...props} disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Clique aqui
      </Button>
    );
  }
}

export const Badge: Story = {
  render: (props) => {
    return (
      <Button {...props} variant="badge">
          Clique aqui
          <X className="ml-2 w-4 h-4"/>
      </Button>
    );
  },
  args: {
    variant: "badge",
  }
}

export const Icon: Story = {
  render: (props) => {
    return(
      <Button {...props} size="icon" variant="icon">
        <LayoutGrid className="h-4 w-4" />
      </Button>
    )
  },
};