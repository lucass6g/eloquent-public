import { ButtonIconProps } from '@/components/ui/ButtonIcon/button-icon.ts';
import { Meta, StoryObj }  from '@storybook/react';
import { ButtonIcon }      from './index.tsx';

const meta: Meta<ButtonIconProps> = {
	title: "Button Icon",
	component: ButtonIcon,
	args: {
		iconName: "ArrowUp",
		children: "Button Icon",
		inverse: false,
	},
	argTypes: {
		iconName: {
			options: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight' ],
			control: "select"
		},
		inverse: {
			control: "boolean"
		}
	},
	parameters: {
		backgrounds: {
			default: "light"
		}
	},
}

export default meta;

type Story =  StoryObj<ButtonIconProps>;

export const Primary: Story = {}
export const Inverse: Story = {
	args: {
		inverse: true
	},
	parameters: {
		backgrounds: {
			default: "dark"
		}
	}
}