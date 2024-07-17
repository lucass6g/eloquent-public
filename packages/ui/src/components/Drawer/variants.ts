import {tv} from "tailwind-variants";

export const drawerVariants = tv({
    base: [
        ""
    ],
    variants: {
        variant: {
          default: "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col  border bg-background",
          responsive:
            "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col bg-background rounded-t-[10px]",
        },
      },
      defaultVariants: {
        variant: "default",
      },
})