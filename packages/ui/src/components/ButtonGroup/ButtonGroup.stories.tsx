import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup }    from './index.tsx';
import {Button} from '../Button/index.tsx'
const meta = {
	title:      "Button Group",
	parameters: {
		backgrounds: {
			default: "light",
			dark:    "dark",
	},
	}
} satisfies Meta<typeof ButtonGroup>

export default meta;

export type Story = StoryObj<typeof ButtonGroup>;

export const ButtonGroupStory: Story = {
	render: () => (
		<ButtonGroup>
			<Button variant="secondary" inverse>Button 1</Button>
			<Button>Button 2</Button>
		</ButtonGroup>
	)
}