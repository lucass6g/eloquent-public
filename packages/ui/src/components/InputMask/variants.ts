import {tv} from "tailwind-variants"

export const inputMaskVariants = tv({
    base: [
        "flex h-10 w-full rounded-[6px] border border-neutral-300 bg-transparent px-3 py-1 text-sm transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-neutral-500",
    ]
})
