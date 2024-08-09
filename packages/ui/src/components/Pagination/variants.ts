import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    rootVariants: "",
    buttonsVariants: [
      "gap-1 bg-neutral-100 disabled:bg-neutral-100 shadow-none",
      "disabled:text-neutral-400 text-neutral-800 hover:bg-neutral-200 font-normal",
      "data-[active=true]:bg-neutral-200 data-[active=true]:font-semibold",
    ],
    contentVariants: "flex flex-row items-center gap-1",
    ellipsisLabelVariants: "sr-only",
    ellipsisVariants: "flex h-9 w-9 items-center justify-center",
    formButtonVariants: "border-0 ml-1",
    formInputVariants:
      "w-10 h-10 text-center px-0 mx-2 font-medium text-sm text-neutral-800",
    formTextVariants: "text-accent-foreground font-normal text-sm",
    formVariants:
      "border border-neutral-300 rounded-full pl-4 flex items-center h-12 bg-neutral-100 w-max",
    iconsVariants: "h-4 w-4 stroke-[1.5px]",
    labelVariants: "text-accent-foreground font-normal text-sm",
  },
});
