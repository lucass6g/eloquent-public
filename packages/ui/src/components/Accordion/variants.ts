import {tv} from "tailwind-variants";

export const accordionVariants = tv({
    slots: {
        accordionItemClasses: "border-b border-neutral-300",
        accordionTriggerClasses: [
            "flex flex-1 items-center justify-between py-4 text-primary text-sm font-semibold transition-all",
            " hover:underline",
            "[&[data-state=open]>svg]:rotate-180",
        ],
        accordionHeaderClasses: "flex",
        accordionChildrenClasses: "pb-4 pt-0",
        accordionContentClasses: "overflow-hidden text-neutral-500 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        chevronDownIconClasses: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 fill-current"
    }
})