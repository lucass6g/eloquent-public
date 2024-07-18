import {tv} from "tailwind-variants";

export const avatarRootVariants = tv({
    base: [
        "relative flex shrink-0 overflow-hidden rounded-full"
    ],
    variants: {
        size: {
            xsm: "h-8 w-8",
            sm: 'h-10 w-10',
            md:"h-16 w-16",
            lg: "h-20 w-20",
            xl: 'h-24 w-24',
            huge: 'h-[104px] w-[104px]'
        },
    },
    defaultVariants: {
        size: "md",
    },
})

export const avatarFallbackVariants = tv({
    base: [
        "flex h-full w-full items-center justify-center rounded-full bg-muted"
    ],
    variants: {
        fontSize: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg'
        }
    },
    defaultVariants: {
        fontSize: 'md'
    },
})