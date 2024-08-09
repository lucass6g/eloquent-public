import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    rootVariants: "",
    contentVariants: "flex flex-row items-center gap-1",
    buttonsVariants:
      "gap-1 bg-neutral-100 disabled:bg-neutral-100 disabled:text-neutral-400 shadow-none text-neutral-800 hover:bg-neutral-200 focus:bg-neutral-200 active:bg-neutral-200",
    ellipsisVariants: "flex h-9 w-9 items-center justify-center",
    ellipsisLabelVariants: "sr-only",
    labelVariants: "text-accent-foreground font-normal text-sm",
    formVariants:
      "border border-neutral-300 rounded-full pl-4 flex items-center h-12 bg-neutral-100 w-max",
    formTextVariants: "text-accent-foreground font-normal text-sm",
    formInputVariants:
      "w-10 h-10 text-center px-0 mx-2 font-medium text-sm text-neutral-800",
    formButtonVariants: "border-0 ml-1",
    iconsVariants: "h-4 w-4 stroke-[1.5px]",
  },
});
