import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    rootVariants: "",
    contentVariants: "flex flex-row items-center gap-1",
    previousVariants: "gap-1",
    nextVariants: "gap-1",
    ellipsisVariants: "flex h-9 w-9 items-center justify-center",
    ellipsisLabelVariants: "sr-only",
    labelVariants: "",
    withFormVariants:
      "border border-neutral-300 rounded-full pl-4 flex items-center h-12 bg-neutral-100 w-max",
    withFormTextVariants: "text-dark-green-500 font-normal text-sm",
    withFormInputVariants:
      "w-10 h-10 text-center px-0 mx-2 font-medium text-sm text-neutral-800",
    withFormButtonVariants: "border-0 ml-1",
    iconsVariants: "h-4 w-4",
  },
});
