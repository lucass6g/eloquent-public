"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { accordionVariants } from "./variants";

const {
  accordionItemVariants,
  accordionTriggerVariants,
  chevronDownIconVariants,
  accordionHeaderVariants,
  accordionContentVariants,
  accordionChildrenVariants,
} = accordionVariants();

const AccordionRoot = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(function AccordionItem({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={accordionItemVariants({ className })}
      {...props}
    />
  );
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(function AccordionTrigger({ className, children, ...props }, ref) {
  return (
    <AccordionPrimitive.Header className={accordionHeaderVariants()}>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={accordionTriggerVariants({ className })}
        {...props}
      >
        {children}
        <ChevronDownIcon className={chevronDownIconVariants()} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(function AccordionContent({ className, children, ...props }, ref) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={accordionContentVariants({ className })}
      {...props}
    >
      <div className={accordionChildrenVariants({ className })}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};
