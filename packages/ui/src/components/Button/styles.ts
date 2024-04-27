import { cva } from 'class-variance-authority';

export type ClassVariantsProps = Readonly<{
	variant: {
		primary?: string[]
		secondary?: string[]
		link?: string[]
		icon?: string[]
	}
	size: {
		small?: string[]
		medium?: string[]
		large?: string[]
		icon?: string[]
	}
	inverse: {
		true?: string[]
		false?: string[]
	}
	fullWidth: {
		true?: string[]
		false?: string[]
	}
}>

export const buttonVariants = cva<ClassVariantsProps>(
	[
		'font-sans text-xs font-semibold',
		'outline-offset-4',
		'box-border border-2',
		'transition-all',
		'disabled:opacity-50 disabled:border-none disabled:cursor-not-allowed ',
	],
	{
		variants: {
			variant: {
				primary: [
					'text-neutral-100',
					'border-transparent',
					'bg-positive-100',
					'hover:bg-neutral-200',
					'active:bg-base-light-01 active:text-base-dark-01',
				],
				secondary: [
					'bg-neutral-dark-100',
					'text-neutral-dark-1000',
					'border-base-light-02',
					'hover:bg-base-light-02',
					'active:border-base-light-02 bg-base-light-01',
				],
				link: ['text-primary underline-offset-4 hover:underline'],
				icon: [
					'bg-transparent border-transparent font-normal border-none',
					'flex  flex-row  gap-stack-xxs',
				],
			},
			size: {
				small: ['px-inline-xxxs h-8 leading-tiny text-xxs'],
				medium: ['px-inline-xxs h-12 leading-default'],
				large: ['px-inline-xs h-14 leading-distant text-sm'],
				icon: [],
			},
			inverse: {
				true: [''],
			},
			fullWidth: {
				true: ['w-full'],
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'medium',
		},
		compoundVariants: [
			{
				variant: 'primary',
				inverse: true,
				class: [
					'bg-neutral-100',
					'text-neutral-1000',
					'hover:bg-base-light-02',
					'active:bg-base-light-03 active:text-base-dark-03',
				],
			},
			{
				variant: 'secondary',
				inverse: true,
				class: [
					'bg-transparent',
					'border-neutral-100',
					'text-neutral-100',
					'hover:bg-base-dark-03',
					'active:bg-base-dark-01 active:text-base-light-01',
					'disabled:bg-neutral-1000 disabled:opacity-50 disabled:border-base-light-02',
				],
			},
		],
	},
)
