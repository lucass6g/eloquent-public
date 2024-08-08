import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    rootVariants: "mx-auto flex w-full justify-center",
    contentVariants: "flex flex-row items-center gap-1",
    previousVariants: "gap-1 pl-2.5",
    nextVariants: "gap-1 pr-2.5",
    ellipsisVariants: "flex h-9 w-9 items-center justify-center",
    iconsVariants: "h-4 w-4",
  },
});
