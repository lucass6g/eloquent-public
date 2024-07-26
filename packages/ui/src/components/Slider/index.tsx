"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { sliderSlots } from "./variants";

import { cn } from "@eloquent/styles";

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { rootStyle, trackStyle, rangeStyle, thumbStyle } = sliderSlots();
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(rootStyle(), className)}
      {...props}
    >
      <SliderPrimitive.Track className={trackStyle()}>
        <SliderPrimitive.Range className={rangeStyle()} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={thumbStyle()} />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;
