// import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "@eloquent/styles"
import { CollapsibleContent as CollapsibleContentPrimitive, CollapsibleContentProps, Collapsible as CollapsiblePrimitive, CollapsibleProps, CollapsibleTrigger as CollapsibleTriggerPrimitive, CollapsibleTriggerProps } from "@radix-ui/react-collapsible"
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react"
import React from "react"
import { Button } from "../Button"
import { contentStyle, rootStyle, triggerContainerStyle, triggerTitleStyle } from "./variants"


const Root = React.forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive>
>(function CollapsibleRootEloquent({ className, ...props }, ref) {
    return (
        <CollapsiblePrimitive
            ref={ref}
            className={
                rootStyle({ className })}
            {...props}
        />
    )
})

const CollapsibleTrigger = React.forwardRef<
    React.ElementRef<typeof CollapsibleTriggerPrimitive>,
    React.ComponentPropsWithoutRef<typeof CollapsibleTriggerPrimitive> & CollapsibleTriggerProps & CollapsibleProps
>(function CollapsibleTriggerEloquent({ children, title, className, open: isOpen, ...props }, ref) {
    return (
    <CollapsibleTriggerPrimitive
        ref={ref}
        className={cn(
            className)} {...props}
    >
        <div className={triggerContainerStyle()}>
            <h4 className={
                triggerTitleStyle({ className })
            }>
                {title}
            </h4>
            <Button size="sm" variant='none'>
                {isOpen ? (<ChevronsDownUp />) : (<ChevronsUpDown />)}
            </Button>
        </div>
    </CollapsibleTriggerPrimitive>
    )
})

const CollapsibleContent = React.forwardRef<
    React.ElementRef<typeof CollapsibleContentPrimitive>,
    React.ComponentPropsWithoutRef<typeof CollapsibleContentPrimitive> & CollapsibleContentProps
>(function CollapsibleContentEloquent({ children, className, ...props }, ref) {
    return (
        <CollapsibleContentPrimitive
            ref={ref}
            className={
                contentStyle({ className })
            } {...props}>
            {children}
        </CollapsibleContentPrimitive>
    )
})

export const Collapsible = {
    Root,
    Trigger: CollapsibleTrigger,
    Content: CollapsibleContent
}
