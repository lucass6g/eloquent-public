import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '.';

const meta = {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
        description: {
            component: "Um botão de dois estados que pode ser ativado ou desativado."
        },
        story: {
            inline: false,
            iframeHeight: 300,
        },
    },
}
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryName: Story = {
name: 'Toggle',
args: {},
render: () => (<Toggle />),
};