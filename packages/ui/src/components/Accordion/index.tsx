"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@eloquent/styles";
import {accordionVariants} from "./variants"

const AccordionRoot = AccordionPrimitive.Root;

const {
    accordionItemClasses, 
    accordionTriggerClasses, 
    chevronDownIconClasses,
    accordionHeaderClasses,
    accordionContentClasses,
    accordionChildrenClasses
} = accordionVariants()

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(
    function AccordionItem({className, ...props}, ref) {
        return (
        <AccordionPrimitive.Item
            ref={ref}
            className={cn(accordionItemClasses(), className)}
            {...props}
        />
        )
    }
);

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(
    function AccordionTrigger({className, children, ...props}, ref) {
        return (
        <AccordionPrimitive.Header className={accordionHeaderClasses()}>
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(accordionTriggerClasses(), className)}
                {...props}
            >
                {children}
                <ChevronDownIcon className={chevronDownIconClasses()} />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        )
    }
);

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(
    function AccordionContent({className, children, ...props}, ref) {
        return(
        <AccordionPrimitive.Content
            ref={ref}
            className={cn(accordionContentClasses(), className)}
            {...props}
        >
            <div className={cn(accordionChildrenClasses(), className)}>{children}</div>
        </AccordionPrimitive.Content>
        )
    }
);

export const Accordion = {
    Root: AccordionRoot,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
};
