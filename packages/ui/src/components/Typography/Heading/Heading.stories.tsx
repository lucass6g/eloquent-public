import { Heading }               from './index.tsx';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
	title: 'Typography/Heading',
	component: Heading,
	parameters: {
		backgrounds: {
			default: "dark",
		}
	},
	args: {
		inverse: true,
		children: 'Heading',
		size: 'medium',
		as: 'h1',
	},
	argTypes: {
		inverse: {
			control: { type: 'boolean' },
			defaultValue: true,
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		as: {
			control: { type: 'select' },
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			defaultValue: "h1"
		}
	},
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
	render: ({...props }) => <Heading {...props}/>
}