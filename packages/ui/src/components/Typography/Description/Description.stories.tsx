import { DescriptionProps } from '@/components/ui/Typography/Description/Description.ts';
import { Description }      from './index.tsx';
import { Meta, StoryObj }   from '@storybook/react';

const meta: Meta<DescriptionProps> = {
	title: 'Typography/Description',
	component: Description,
	parameters: {
		backgrounds: {
			default: "dark",
		}
	},
	args: {
		inverse: true,
		children: 'Description',
		as: 'p',
	},
	argTypes: {
		inverse: {
			control: { type: 'boolean' },
		},
		as: {
			control: { type: 'select' },
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
			defaultValue: "p"
		}
	},
};

export default meta;

type Story = StoryObj<DescriptionProps>;

export const Default: Story = {
	render: ({...props }) => <Description {...props}/>
}