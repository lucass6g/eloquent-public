import { CaptionProps }   from '@/components/ui/Typography/Caption/Caption.ts';
import { Caption }        from './index.tsx';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Caption> = {
	title: 'Typography/Caption',
	component: Caption,
	parameters: {
		backgrounds: {
			default: "dark",
		}
	},
	args: {
		inverse: true,
		children: 'Caption',
		as: 'p',
	},
	argTypes: {
		inverse: {
			control: { type: 'boolean' },
		},
		as: {
			control: { type: 'select' },
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
		}
	},
};

export default meta;

type Story = StoryObj<CaptionProps>;

export const Default: Story = {
	name: 'Caption',
	render: ({ ...props }) => <Caption {...props}/>
}