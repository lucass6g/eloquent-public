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
                "bg-green-dark-600 font-medium text-primary-foreground shadow",
                "hover:bg-green-dark-400",
                "disabled:bg-neutral-300 disabled:text-neutral-500 disabled:font-medium",
            ],
            secondary: [
                "border border-neutral-300 text-accent-foreground text-sm font-medium",
                "hover:bg-neutral-200",
                "disabled:text-neutral-500",
            ],
            destructive: [
                "bg-red-600 text-neutral-100 font-medium", 
                "hover:bg-red-400",
                "disabled:bg-neutral-300 disabled:text-neutral-500",
            ],
            link: [
                "text-green-dark-600 underline",
                "disabled:text-neutral-500",
            ],
            loading: "",
            badge: [
                "bg-green-dark-600 text-sm text-neutral-100 min-w-fit max-w-fit max-h-6 cursor-pointer",
                "hover:bg-green-dark-400",
                "disabled:bg-neutral-300 disabled:text-neutral-500",
            ],
            icon: [
                "p-0 border border-neutral-300 text-neutral-800",
                "disabled:text-neutral-500",
            ],
        },
        size: {
            default: "py-2 px-4 w-[184px] h-[40px] border-lg",
            sm: "h-8 px-3 text-xs w-[152px] h-[32px]",
            icon: "h-9 w-9 first-child:stroke-primary-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});