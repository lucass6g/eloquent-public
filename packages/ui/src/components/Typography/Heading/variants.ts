import {tv} from "tailwind-variants";

export const headingVariants = tv({
    base: [
        "text-foreground font-barlow font-semibold"
    ],
    variants: {
        level: {
            h1: "font-redonda text-4xl font-extrabold",
            h2: "text-3xl",
            h3: "text-2xl",
            h4: "text-xl",
            h5: "text-md",
            h6: "text-sm"
        }
    },
    defaultVariants: {
        level: "h1"
    }
})