import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    filterWrapperVariants: "flex items-center py-4",
    filterVariants: "max-w-sm",
    tableWrapperVariants: "rounded-md border",
    tableVariants: "",
    noResultsVariants: "flex items-center justify-center h-64",
    sortHeaderVariants: "flex items-center space-x-2",
    sortHeaderButtonVariants: "-ml-3 h-8 data-[state=open]:bg-accent",
    sortHeaderIconsVariants: "ml-2 h-4 w-4",
    sortHeaderMenuIconsVariants: "mr-2 h-3.5 w-3.5 text-muted-foreground/70",
    viewOptionsButtonVariants: "ml-auto hidden h-8 lg:flex",
    viewOptionsButtonIconVariants: "mr-2 h-4 w-4",
    viewOptionsMenuContentVariants: "w-[150px]",
  },
});
