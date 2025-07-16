"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@eloquent/styles";
import React from "react";
import { progressSlots } from "./variants";

const { indicatorStyle, rootStyle } = progressSlots();

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        rootStyle(),
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(indicatorStyle())}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;
