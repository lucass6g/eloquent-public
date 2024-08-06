import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    rootWrapperVariants: "relative w-full overflow-auto",
    rootTableVariants: "w-full caption-bottom text-sm",
    headerVariants: "[&_tr]:border-b",
    bodyVariants: "[&_tr:last-child]:border-0",
    footerVariants: "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
    rowVariants:
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
    headVariants:
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    cellVariants:
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    captionVariants: "mt-4 text-sm text-muted-foreground",
  },
});
