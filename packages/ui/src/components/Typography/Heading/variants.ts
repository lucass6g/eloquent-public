import {tv} from "tailwind-variants";

export const headingVariants = tv({
    base: [
        "text-green-dark-600"
    ],
    variants: {
        level: {
            h1: "font-redonda text-4xl font-extrabold",
            h2: "text-3xl font-bold",
            h3: "text-2xl font-bold",
            h4: "text-xl font-bold",
            h5: "text-lg font-bold",
            h6: "text-base font"
        }
    },
    defaultVariants: {
        level: "h1"
    }
})