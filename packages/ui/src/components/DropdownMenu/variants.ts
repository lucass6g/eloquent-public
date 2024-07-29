import { tv } from "tailwind-variants";

export const dropdownMenuVariants = tv({
  slots: {
    dropdownMenuCheckboxItem:
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    dropdownMenuCheckboxItemIcon: "h-4 w-4",
    dropdownMenuCheckboxItemIconWrapper:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    dropdownMenuContent: [
      "z-50 min-w-[8rem] overflow-hidden rounded-[6px] border border-neutral-300 bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    dropdownMenuRadioItem:
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    dropdownMenuRadioItemIcon: "h-4 w-4 fill-current",
    dropdownMenuRadioItemIconWrapper:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    dropdownMenuSeparator: "my-1 h-px bg-neutral-300",
    dropdownMenuShortcut: "ml-auto text-xs tracking-widest opacity-60",
    dropdownMenuSubContent:
      "z-50 min-w-[8rem] overflow-hidden rounded-[6px] border border-neutral-300 bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    dropdownMenuSubTriggerIcon: "ml-auto h-4 w-4",
    dropdownMenuTrigger: "flex items-center pb-2 text-neutral-500 text-sm",
    dropdownMenuTriggerIcon: "ml-1 h-4 w-4 text-neutral-800",
  },
});

export const dropdownMenuIconVariants = tv({
  base: [
    "h-[18px] w-[18px] text-neutral-800",
    "flex items-center justify-center",
  ],
  variants: {
    position: {
      left: "mr-2",
      right: "ml-auto",
    },
  },
  defaultVariants: {
    position: "left",
  },
});

export const dropdownMenuItemVariants = tv({
  base: [
    "relative",
    "flex items-center px-2 py-1.5",
    "text-sm text-neutral-800",
    "cursor-default select-none outline-none transition-colors",
    "focus:text-neutral-800 focus:bg-neutral-200",
    "hover:text-neutral-800 hover:bg-neutral-200",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
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

export const dropdownMenuLabelVariants = tv({
  base: "p-2 text-sm font-medium text-neutral-800",
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
  base: [
    "cursor-default select-none outline-none",
    "text-sm text-neutral-800",
    "flex items-center px-2 py-1.5",
    "focus:bg-neutral-200 data-[state=open]:bg-neutral-200",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
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
