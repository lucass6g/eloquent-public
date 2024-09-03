import { tv } from 'tailwind-variants';

export const iconContainerVariants = tv({
    base: [],
    variants: {
        size: {
            small: '[&>svg]:size-4',
            medium: '[&>svg]:size-6',
            large: '[&>svg]:size-8'
        },
    },
    defaultVariants: {
        size: 'medium'
    },
});