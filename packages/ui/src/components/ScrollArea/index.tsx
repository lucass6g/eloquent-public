import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import * as React from "react"

import { rootStyle, rootViewPortStyle, scrollAreaThumbStyle, scrollBarHorizontalStyle, scrollBarVerticalStyle } from "./variants"

const RootScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(function RootScrollAreaEloquent({ className, children, ...props }, ref) {
  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={rootStyle({ className })}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className={rootViewPortStyle()}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(function ScrollBarEloquent({ className, orientation = "vertical", ...props }, ref) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={orientation === "vertical" ? scrollBarVerticalStyle() : scrollBarHorizontalStyle()}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={scrollAreaThumbStyle()} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
})

export const ScrollArea = {
  Root: RootScrollArea,
  ScrollBar
}
