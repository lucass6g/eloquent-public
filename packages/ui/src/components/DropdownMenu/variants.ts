import { tv } from "tailwind-variants";

export const dropdownMenuVariants = tv({
  slots: {
    dropdownMenuShortcut: "ml-auto text-xs tracking-widest opacity-60",
    dropdownMenuSeparator: "-mx-1 my-1 h-px bg-muted",
    dropdownMenuRadioItem:
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    dropdownMenuRadioItemIconWrapper:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    dropdownMenuRadioItemIcon: "h-4 w-4 fill-current",
    dropdownMenuCheckboxItem:
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    dropdownMenuCheckboxItemIconWrapper:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    dropdownMenuCheckboxItemIcon: "h-4 w-4",
    dropdownMenuContent: [
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    dropdownMenuSubContent:
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    dropdownMenuSubTriggerIcon: "ml-auto h-4 w-4",
  },
});

export const dropdownMenuLabelVariants = tv({
  base: "px-2 py-1.5 text-sm font-semibold",
  variants: {
    inset: {
      true: "pl-8",
      false: "",
    },
  },
  defaultVariants: {
    inset: false,
  },
});

export const dropdownMenuItemVariants = tv({
  base: "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  variants: {
    inset: {
      true: "pl-8",
      false: "",
    },
  },
  defaultVariants: {
    inset: false,
  },
});

export const dropdownMenuSubTriggerVariants = tv({
  base: "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
  variants: {
    inset: {
      true: "pl-8",
      false: "",
    },
  },
  defaultVariants: {
    inset: false,
  },
});
