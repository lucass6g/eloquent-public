import {tv} from "tailwind-variants";

export const tableVariants = tv({
    base: "font-barlow text-md text-foreground",
    variants: {
        variant: {
            title: " font-bold",
            body: "font-normal",
        }
    },
    defaultVariants: {
        variant: "title"
    }
})
