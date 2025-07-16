import { tv } from "tailwind-variants";

export const sliderSlots = tv({
  slots: {
    rootStyle: "relative flex w-full touch-none select-none items-center",
    trackStyle:
      "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
    rangeStyle: "absolute h-full bg-primary",
    thumbStyle:
      "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  },
});
