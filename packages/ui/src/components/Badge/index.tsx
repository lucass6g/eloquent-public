import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@eloquent/styles";
import { badgeVariants } from "./variants";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(badgeVariants({ variant }), className)}
    {...props}
  />
));

export { Badge };
