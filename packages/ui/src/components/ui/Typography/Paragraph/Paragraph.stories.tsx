import { ParagraphProps }   from '@/components/ui/Typography/Paragraph/Paragraph.ts';
import { Paragraph }        from './index.tsx';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paragraph> = {
	title: 'Typography/Paragraph',
	component: Paragraph,
	parameters: {
		backgrounds: {
			default: "dark",
		}
	},
	args: {
		inverse: true,
		children: 'Paragraph',
	},
	argTypes: {
		inverse: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;

type Story = StoryObj<ParagraphProps>;

export const Default: Story = {
	name: 'Paragraph',
	render: ({ ...props }) => <Paragraph {...props}/>
}