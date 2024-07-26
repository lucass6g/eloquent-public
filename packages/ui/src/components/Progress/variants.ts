import { tv } from "tailwind-variants";

export const progressSlots = tv({
  slots: {
    rootStyle:
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20 border border-primary/40",
    indicatorStyle: "h-full w-full flex-1 bg-primary transition-all",
  },
});
