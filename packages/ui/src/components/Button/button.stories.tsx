import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { LayoutGrid, X } from "lucide-react";

import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.props";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  args: {
    children: "Clique aqui",
    disabled: false,
    size: "default",
    loading: false
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
        "badge",
        "none"
      ] satisfies ButtonVariant[],
      description: "Variante do botão",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "sm", "none"] satisfies ButtonSize[],
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
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      description: "Se o botão está em estado de `carregando...`",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    startIcon: {
      description: "Ícone no início do botão",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    endIcon: {
      description: "Ícone no final do botão",
      table: {
        type: { summary: "React.ReactNode" },
      },
    }
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

export const NoStyle: Story = {
  args: {
    variant: "none",
    size: "none",
  },
};


export const WithIcon: Story = {
  render(props) {
    return (
      <div className="flex items-center gap-4">
        <Button {...props} startIcon={<LayoutGrid className="w-4 h-4 mr-2"/>}>
          Start icon
        </Button>
        <Button {...props} endIcon={<LayoutGrid className="w-4 h-4 ml-2"/>}>
          End Icon
        </Button>
      </div>
    );
  }
};

export const Loading: Story = {
  render: (props) => {
    return (
      <Button {...props}>
        Clique aqui
      </Button>
    );
  },
  args: {
    loading: true
  }
}

export const Badge: Story = {
  render: (props) => {
    return (
       <div className="flex items-center gap-4">
          <Button {...props} variant="badge" startIcon={<X className="mr-2 w-4 h-4" />}>
            Start icon
          </Button>
          <Button {...props} variant="badge" endIcon={<X className="ml-2 w-4 h-4" />}>
            End icon
          </Button>
       </div>
    );
  },
  args: {
    variant: "badge"
  }
}

export const Icon: Story = {
  render: ({children, ...props}) => {
    return(
      <Button {...props} size="icon" variant="icon" startIcon={<LayoutGrid className="h-4 w-4" />} />
    )
  }
};
