import { tv } from "tailwind-variants";

export const captionVariants = tv({
  base: "text-md text-foreground font-normal",
  variants: {
    size: {
      default: "text-sm",
      sm: "text-xs",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
