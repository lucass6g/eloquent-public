import { tv } from "tailwind-variants";

export const baseVariants = tv({
  slots: {
    checkboxItem:
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    checkboxItemIcon: "h-4 w-4",
    checkboxItemIconWrapper:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    content: [
      "z-50 min-w-[8rem] overflow-hidden rounded-[6px] border border-neutral-300 bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    radioItem:
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    radioItemIcon: "h-4 w-4 fill-current",
    radioItemIconWrapper:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    separator: "my-1 h-px bg-neutral-300",
    shortcut: "ml-auto text-xs tracking-widest opacity-60",
    subContent:
      "z-50 min-w-[8rem] overflow-hidden rounded-[6px] border border-neutral-300 bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    subTriggerIcon: "ml-auto h-4 w-4",
    trigger:
      "flex items-center pb-2 font-normal text-neutral-800 text-sm focus:outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    triggerIcon: "ml-1 h-4 w-4 text-neutral-800",
  },
});

export const iconVariants = tv({
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

export const itemVariants = tv({
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

export const labelVariants = tv({
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

export const subTriggerVariants = tv({
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
