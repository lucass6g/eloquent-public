import {tv} from "tailwind-variants";

export type ClassVariantsProps = {

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
}

export const buttonVariant = tv({
    base: [
        'text-neutral-100',
        'font-barlow antialiased',
        'outline-offset-4',
        'box-border border-2',
        'transition-all',
        'disabled:border-none disabled:cursor-not-allowed ',
    ],
    variants: {
        variant: {
            primary: [
                'border-transparent',
                'bg-neutral-1000',
                'hover:bg-neutral-900',
                'disabled:bg-neutral-700'
            ],
            secondary: [
                'text-neutral-1000',
                'border-2 border-neutral-700',
                'bg-transparent',
                'hover:border-neutral-1000 hover:bg-neutral-600',
                'disabled:bg-neutral-700 disabled:border-neutral-700',
            ],
            link: ['text-primary underline-offset-4 hover:underline'],
            icon: [
                'font-normal',
                'border-none',
                'bg-transparent border-transparent',
                'flex flex-row gap-stack-xxs',
            ],
        },
        size: {
            small: ['px-inline-4 h-8 leading-tiny text-6'],
            medium: ['px-inline-6 h-12 leading-default'],
            large: ['px-inline-8 h-14 leading-distant text-10'],
            icon: [],
        },
        inverse: {
            true: ['text-neutral-1000'],
            false: ['text-neutral-100'],
        },
        fullWidth: {
            true: ['w-full'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        inverse: false,
        size: 'medium',
        fullWidth: false,
    },
    compoundVariants: [
        {
            variant: 'primary',
            inverse: true,
            class: [
                'bg-neutral-100',
                'text-neutral-1000',
                'hover:bg-neutral-700',
            ],
        },
        {
            variant: 'secondary',
            inverse: true,
            class: [
                'bg-transparent',
                'border-neutral-100',
                'text-neutral-100',
            ],
        },
    ],
})
