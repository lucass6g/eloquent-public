import { tv } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    accordionItemVariants: [
      "border-b border-neutral-300",
      "data-[disabled]:opacity-50",
    ],
    accordionTriggerVariants: [
      "flex flex-1 items-center justify-between py-4 text-primary text-sm font-semibold transition-all",
      "hover:underline",
      "[&[data-state=open]>svg]:rotate-180",
      "hover:data-[disabled]:no-underline",
    ],
    accordionHeaderVariants: "flex",
    accordionChildrenVariants: "pb-4 pt-0",
    accordionContentVariants: [
      "overflow-hidden text-neutral-500 text-sm",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ],
    chevronDownIconVariants:
      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 fill-current",
  },
});
