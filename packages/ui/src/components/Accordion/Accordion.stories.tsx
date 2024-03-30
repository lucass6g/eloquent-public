import { Meta, StoryObj }                                  from '@storybook/react';
import { Accordion as AccordionUI, } from './index';

type AccordionProps = {
	type: "single" | "multiple"
	inverse: boolean,
	collapsible: boolean,
}
const meta = {
	title:      "Accordion",
	parameters: {
		backgrounds: {
			default: "light",
			dark:    "dark",
		},
	},
	args:       {
		type: "single",
	},
	argTypes:   {
		type: {
			options: ['single', 'multiple'],
			control: { type: "inline-radio" },
		}
	},
} satisfies Meta<AccordionProps>

export default meta;

export type Story = StoryObj<AccordionProps>;

export const AccordionWithSingleType: Story = {
	name: "Accordion Single",
	args:   {
		inverse: false,
		type:    "single",
		collapsible: false,
	},
	argTypes: {
		type: {
			options: ['single'],
			control: { type: "inline-radio" },
		}
	},
	render: ({
		inverse=false,
		collapsible=false
	}) => (
		<AccordionUI.Root type={ "single" } collapsible={collapsible} defaultValue="item1">
			<AccordionUI.Item value="item1">
				<AccordionUI.Trigger inverse={ inverse }>Título 1</AccordionUI.Trigger>
				<AccordionUI.Content inverse={ inverse }>Content XXX</AccordionUI.Content>
			</AccordionUI.Item>
		</AccordionUI.Root>
	),
}

export const AccordionWithMultipleType: Story = {
	name: "Accordion Multiple",
	args:   {
		inverse: false,
		type:    "multiple",
	},
	argTypes: {
		type: {
			options: ['multiple'],
			control: { type: "inline-radio" },
		}
	},
	render: ({
		inverse=false,
	}) => (
		<AccordionUI.Root type={ "multiple" }   defaultValue={["item1", "item3"]}>
			<AccordionUI.Item value="item1">
				<AccordionUI.Trigger inverse={ inverse }>Accordion Multiplo 1</AccordionUI.Trigger>
				<AccordionUI.Content inverse={ inverse }>Content XXX</AccordionUI.Content>
			</AccordionUI.Item>
			<AccordionUI.Item value="item2">
				<AccordionUI.Trigger inverse={ inverse }>Accordion Multiplo 2</AccordionUI.Trigger>
				<AccordionUI.Content inverse={ inverse }>Content XXX</AccordionUI.Content>
			</AccordionUI.Item>
			<AccordionUI.Item value="item3">
				<AccordionUI.Trigger inverse={ inverse }>Accordion Multiplo 3</AccordionUI.Trigger>
				<AccordionUI.Content inverse={ inverse }>Content XXX</AccordionUI.Content>
			</AccordionUI.Item>
		</AccordionUI.Root>
	),
}
