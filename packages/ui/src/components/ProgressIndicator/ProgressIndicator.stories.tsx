
import { ProgressIndicatorProps } from './ProgressIndicator.ts';
import { Meta, StoryObj }   from '@storybook/react';
import { ProgressIndicator } from './index.tsx';

const meta: Meta<ProgressIndicatorProps> = {
	title:      "Progress Indicator",
	component:  ProgressIndicator,
	parameters: {
		backgrounds: {
			default: "light",
		},
	},
	args:       {
		inverse: false,
		activeIndex: 0,
		size: 3,
	},
	argTypes: {
		inverse: {
			control: { type: "boolean" },
		},
	},
}

export default meta;

type Story = StoryObj<ProgressIndicatorProps>;

export const Default: Story = {}
export const Inverse: Story = {
	args: {
		...Default.args,
		inverse: true,
	},
	parameters: {
		backgrounds: {
			default: "dark",
		},
	},
}