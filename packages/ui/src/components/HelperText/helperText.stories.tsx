import { Meta, StoryObj } from '@storybook/react';
import { HelperText } from '.';

const meta = {
component: () => {
    return (
        <HelperText.Root>
            <HelperText.Label>Seu texto de apoio.</HelperText.Label>
        </HelperText.Root>
    )
},
  title: 'HelperText',
  parameters: {
    layout: 'centered'
},
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelperTextDefault: Story = {
name: 'HelperText',
args: {},
render: () => {
    return (
        <HelperText.Root>
            <HelperText.Label>Seu texto de apoio.</HelperText.Label>
        </HelperText.Root>
    )
  },
};