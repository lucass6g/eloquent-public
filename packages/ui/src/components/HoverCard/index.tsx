"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@eloquent/styles"
import { hoverContentStyle } from "./variants"

const Root = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({className, align = "center", sideOffset = 4, ...props}, ref) => (
    <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
            hoverContentStyle(),
            className
        )}
        {...props}
    />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export const HoverCard = {
    Root,
    Trigger: HoverCardTrigger,
    Content: HoverCardContent
}
