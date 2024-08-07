import { tv } from "tailwind-variants";

export const tooltipVariants = tv({
  slots: {
    tooltipContentVariants: [
      "z-50 overflow-hidden shadow-md rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-800 animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
  },
});
