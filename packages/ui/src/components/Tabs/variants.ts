import { tv } from "tailwind-variants"

export const tabsVariants = tv({
    slots: {
        list: "bg-neutral-200 rounded-[6px] h-9 p-1 text-muted-foreground",
        trigger: [
            "inline-flex rounded-[2px] items-center justify-center text-neutral-500 whitespace-nowrap px-3 py-1 text-sm ring-offset-background transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:font-medium"
        ],
        content: [
            "mt-2 ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        ],
    }
})