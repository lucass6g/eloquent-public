import { tv } from "tailwind-variants";

export const badgeVariants = tv({
    base: [
        "flex items-center rounded-md border px-2 py-1 text-sm font-barlow transition-colors",
    ],
    variants: {
        variant: {
            default:
                "border-transparent bg-green-dark-500 text-neutral-100",
            secondary:
                "border-transparent bg-neutral-200 text-neutral-800",
            destructive:
                "border-transparent bg-red-600 text-neutral-100",
            outline:
                "border-neutral-300 text-neutral-800",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})