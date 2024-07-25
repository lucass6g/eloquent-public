import {tv} from "tailwind-variants"

export const baseButton = tv({
    base: [
        "inline-flex items-center justify-center whitespace-nowrap",
        "rounded-lg transition-colors",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        "disabled:pointer-events-none",
        "text-sm font-medium antialiased",
        "leading-4"
    ]
})

export const buttonVariants = tv({
    extend: baseButton,
    variants: {
        variant: {
            default:[
                "bg-primary font-medium text-primary-foreground shadow",
                "hover:bg-primary-hover",
                "disabled:bg-neutral-300 disabled:text-neutral-500 disabled:font-medium",
            ],
            secondary: [
                "border border-border text-secondary-foreground text-sm font-medium",
                "hover:bg-secondary-hover",
                "disabled:text-neutral-500",
            ],
            destructive: [
                "bg-destructive text-destructive-foreground font-medium", 
                "hover:bg-destructive-hover",
                "disabled:bg-neutral-300 disabled:text-neutral-500",
            ],
            link: [
                "text-primary underline",
                "disabled:text-neutral-500",
            ],
            badge: [
                "bg-primary text-sm text-primary-foreground min-w-fit max-w-fit max-h-6 cursor-pointer",
                "hover:bg-primary-hover",
                "disabled:bg-neutral-300 disabled:text-neutral-500",
            ],
            icon: [
                "p-0 border border-border text-accent-foreground",
                "disabled:text-neutral-500",
            ],
            none: "border-none bg-transparent text-inherit cursor-default",
        },
        size: {
            default: "py-2 px-4 w-[184px] h-[40px] border-lg",
            sm: "h-8 px-3 text-xs w-[152px] h-[32px]",
            icon: "h-9 w-9 first-child:stroke-primary-foreground",
            none: "p-0 m-0",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});