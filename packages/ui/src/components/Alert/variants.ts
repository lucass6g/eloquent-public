import { tv } from "tailwind-variants";

export const alertVariants = tv({
    base: [
        "relative w-full p-4 text-sm rounded-[8px] [&>svg]:stroke-primary-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:stroke-foreground [&>svg~*]:pl-7"
    ],
    variants: {
        variant: {
            default: "bg-white border border-neutral-300 text-foreground",
            destructive:
                "bg-background border text-destructive border-destructive [&>svg]:stroke-destructive *:text-destructive",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export const alertSlots = tv({
    slots: {
        alertTitleStyle: "text-base not-italic font-medium",
        alertDescriptionStyle: "text-base font-normal not-italic text-neutral-500",
    }
})