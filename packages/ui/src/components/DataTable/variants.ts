import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    rootVariants: "flex flex-col items-end",
    rowsPerPageWrapperVariants: "flex items-center space-x-2",
    rowsPerPageVariants: "text-sm",
    rowsPerPageSelectTriggerVariants: "h-8 w-[70px]",
  },
});
