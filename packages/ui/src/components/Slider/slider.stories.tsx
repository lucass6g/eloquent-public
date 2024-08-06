import { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";

type SliderProps = React.ComponentProps<typeof Slider>;

const meta: Meta<SliderProps> = {
  title: "Slider",
  component: Slider,
  args: {
    defaultValue: [10],
    step: 1,
    min: 0,
    max: 100,
  },
  argTypes: {
    defaultValue: {
      description: "Define o valor da barra de progresso",
    },
    step: {
      description: "Define o intervalo entre os valores da barra de progresso",
    },
    min: {
      description: "Valor mínimo da barra de progresso",
    },
    max: {
      description: "Valor máximo da barra de progresso",
    },
  },
};

export default meta;

export const Default: StoryObj<SliderProps> = {};
