import { tv } from "tailwind-variants";

export const selectVariants = tv({
    slots: {
        triggerClasses:             [
            "flex items-center justify-between whitespace-nowrap text-sm ring-offset-background placeholder:text-muted-foreground ",
            "h-10 w-full px-3 py-2 gap-2",
            "bg-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "border border-input rounded-[6px]",
        ],
        scrollUpButtonClasses:  "flex cursor-default items-center justify-center py-1",
        scrollDownButtonClasses: "flex cursor-default items-center justify-center py-1",
        contentClasses: [
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-[6px] border bg-popover text-popover-foreground",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        ],
        selectItemClasses:                 [
            "relative flex w-full cursor-default select-none items-center rounded-[6px] py-1.5 pl-8 pr-2 text-sm outline-none",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            "focus:bg-neutral-200 focus:text-accent-foreground",
        ],
        selectItemIndicatorClasses: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        selectLabelClasses: "px-2 py-1.5 text-sm font-semibold",
        separatorClasses: "-mx-1 my-1 h-px bg-border",
        chevronDownClasses: "h-4 w-4 opacity-50",
        viewportClasses: "p-1",
        popperContentClasses: "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        popperViewportClasses: "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
    }
})