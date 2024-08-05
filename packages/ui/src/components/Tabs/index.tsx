"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@eloquent/styles"

const Root = TabsPrimitive.Root

import { tabsVariants } from "./variants"

const { list, content, trigger } = tabsVariants()

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(
    function TabList({ className, ...props }, ref) {
        return (
            <TabsPrimitive.List
                ref={ref}
                className={cn(list(), className)}
                {...props}
            />
        )
    }
)

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(
    function TabsTrigger({ className, ...props }, ref) {
        return (
            <TabsPrimitive.Trigger
                ref={ref}
                className={cn(trigger(), className)}
                {...props}
            />
        )
    }
)

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(
    function TabsContent({ className, ...props }, ref) {
        return (
            <TabsPrimitive.Content
                ref={ref}
                className={cn(content(), className)}
                {...props}
            />
        )
    }
)

export const Tabs = {
    Root,
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent
}
