import { Button }         from "./index";
import { Meta, StoryObj }          from "@storybook/react";

const meta: Meta<typeof Button> = {
  
  title: "Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    children: "Buttons",
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    disabled: {
      type:  "boolean"
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      control: { type: "boolean" },
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  args: {
    variant: "primary",
    inverse: false,
  },
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: "inline-radio" },
    }
  }
};

export const PrimaryInverse: Story = {
  args: {
    ...Primary.args,
    inverse: true,
  },
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: "inline-radio" },
    }
  }
};

export const Secondary: Story = {
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  args: {
    variant: "secondary",
  },
  argTypes: {
    variant: {
      options: ['secondary'],
      control: { type: "inline-radio" },
    }
  }
};

export const SecondaryInverse: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    ...Secondary.args,
    inverse: true,
  },
  argTypes: {
    variant: {
      options: ['secondary'],
      control: { type: "inline-radio" },
    }
  }
};