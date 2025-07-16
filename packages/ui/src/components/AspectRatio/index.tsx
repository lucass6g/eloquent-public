"use client"

import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(function AspectRatioEloquent({ className, ...props }, ref) {

  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      className={className}
      {...props}
    />
  );
})

export { AspectRatio }
