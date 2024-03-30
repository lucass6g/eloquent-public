import { icons }     from 'lucide-react';
import { IconProps }      from './Icon.ts';
import { Meta, StoryObj } from '@storybook/react';
import {Icon}             from './index.tsx'
const meta:Meta<IconProps> = {
	title: "Icon",
	component: Icon,
	args: {
		name: "ArrowUp",
		color: "black",
		size: 24
	},
	argTypes: {
		name: {
			options: Object.keys(icons),
			control: "select"
		},
		color: {
			control: "color"
		},
		size: {
			control: "number"
		}
	}
}

export default meta;

type Story =  StoryObj<IconProps>;

export const Primary:Story = {}