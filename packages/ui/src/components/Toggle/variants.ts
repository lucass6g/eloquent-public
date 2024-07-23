import { tv } from "tailwind-variants";

export const toggleVariants = tv({
    base: [
        "inline-flex items-center justify-between rounded-[6px] text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&>svg]:mr-2",
    ],
    variants: {
        variant: {
            default: "bg-transparent",
            outline:
                "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        },
        size: {
            default: "h-10 px-3 w-[90px]",
            sm: "h-8 px-2",
            lg: "h-10 px-3",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
}

)