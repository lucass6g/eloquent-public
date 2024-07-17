import {tv} from "tailwind-variants";

export const alertVariants = tv({
    base: [
        "relative w-full p-4 text-sm rounded-[8px] [&>svg]:stroke-primary-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:stroke-foreground [&>svg~*]:pl-7"
    ],
    variants: {
        variant: {
            default: "bg-white border border-[#E0E0E0] text-foreground",
            destructive:
                "bg-background border text-destructive border-destructive [&>svg]:stroke-destructive *:text-destructive",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})