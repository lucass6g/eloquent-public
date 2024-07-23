import {tv} from "tailwind-variants"

export const baseButton = tv({
    base: [
        "inline-flex items-center justify-center whitespace-nowrap",
        "border-lg rounded-lg transition-colors",
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
                "bg-primary text-primary-foreground shadow",
                "hover:bg-green-dark-400",
                "disabled:bg-neutral-300 disabled:text-neutral-500 disabled:font-medium",
            ],
            secondary: [
                "shadow-sm",
                "border-foreground",
                "text-accent-foreground hover:bg-accent hover:text-accent-foreground",
            ],
            destructive:
                "bg-destructive text-destructive-foreground shadow-sm hover:opacity-90",
            link: "text-primary underline-offset-4 hover:underline",
            icon: "p-0",
            loading: "",
        },
        size: {
            default: "py-2 px-4 min-w-[152px] min-h-[24px] border-lg",
            sm: "h-8 px-3 text-xs",
            icon: "h-9 w-9 first-child:stroke-primary-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});