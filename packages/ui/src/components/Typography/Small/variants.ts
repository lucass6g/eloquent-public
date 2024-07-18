import {tv} from "tailwind-variants";

export const smallVariants = tv({
    base: "font-barlow text-sm text-foreground",
    variants: {
        variant: {
            default: " font-medium",
            regular: "font-normal",
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
