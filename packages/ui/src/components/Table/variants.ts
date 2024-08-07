import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    rootWrapperVariants: "relative w-full overflow-auto",
    rootTableVariants: "w-full caption-bottom text-xs",
    headerVariants: "bg-neutral-200 h-12 overflow-hidden",
    bodyVariants: "[&_tr]:h-16",
    footerVariants: "border-t font-medium [&>tr]:last:border-b-0",
    rowVariants:
      "border-t transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted first-of-type:border-0",
    headVariants:
      "first-of-type:rounded-l-[10px] last-of-type:rounded-r-[10px] px-4 text-left align-middle text-neutral-500 font-medium text-sm",
    cellVariants: "px-4 align-middle text-neutral-800 font-normal text-sm",
    captionVariants: "mt-4 text-xs text-neutral-800 font-normal text-center",
  },
});
