import {ProgressBar}          from './index.tsx';
import { ProgressBarProps } from './ProgressBar.ts';
import { Meta, StoryObj }   from '@storybook/react';

const meta: Meta<ProgressBarProps> = {
	title: "Progress Bar",
	component: ProgressBar,
	parameters: {
		backgrounds: {
			default: "light",
			if: {arg: "inverse", eq: true, default: "dark"}
		},

	},
	args: {
		value: 50,
		label: "number",
		inverse: false,
	},
	argTypes: {
		value: {
			type: "number",
		},
		label: {
			options: ["number", "text"],
			control: { type: "radio" },
		},
		inverse: {
			control: { type: "boolean" },
		},
	},
}

export default meta;

type Story = StoryObj<ProgressBarProps>;

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