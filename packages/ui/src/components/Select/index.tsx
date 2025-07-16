"use client";

import * as React from "react";
import {CheckIcon, ChevronDownIcon, ChevronUpIcon,} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react"
import { cn } from "@eloquent/styles";
import { selectVariants } from "./variants";


const { 
    triggerClasses, 
    scrollDownButtonClasses, 
    scrollUpButtonClasses, 
    contentClasses,
    popperContentClasses,
    popperViewportClasses,
    viewportClasses,
    selectItemClasses,
    selectItemIndicatorClasses,
    selectLabelClasses,
    separatorClasses,
    chevronDownClasses
} = selectVariants()

const Root = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(
    function SelectTrigger({className, children, ...props}, ref) {
           return (
            <SelectPrimitive.Trigger
                ref={ref}
                className={cn(triggerClasses(), className)}
                {...props}
            >
                {children}
                <SelectPrimitive.Icon asChild>
                    <ChevronDown className={chevronDownClasses()}/>
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
        );
    }
);

const SelectScrollUpButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(
    function SelectScrollUpButton({className, ...props}, ref){
        return (
        <SelectPrimitive.ScrollUpButton
            ref={ref}
            className={cn(scrollUpButtonClasses(), className)}
            {...props}
        >
            <ChevronUpIcon/>
        </SelectPrimitive.ScrollUpButton>
        )
    }
);

const SelectScrollDownButton = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(
    function SelectScrollDownButton({className, ...props}, ref){
        return (
        <SelectPrimitive.ScrollDownButton
            ref={ref}
            className={cn(scrollDownButtonClasses(), className)}
            {...props}
        >
            <ChevronDownIcon/>
        </SelectPrimitive.ScrollDownButton>
        )
    }
);

const SelectContent = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
    function SelectContent({className, children, position = "popper", ...props}, ref){
        return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={cn(contentClasses(), position === "popper" && popperContentClasses(), className)}
                position={position}
                {...props}
            >
                <SelectScrollUpButton/>
                <SelectPrimitive.Viewport
                    className={cn(viewportClasses(), position === "popper" && popperViewportClasses())}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton/>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
        )
    }
);

const SelectLabel = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(
    function SelectLabel({className, ...props}, ref){
        return (
        <SelectPrimitive.Label
            ref={ref}
            className={cn(selectLabelClasses(), className)}
            {...props}
        />
        )
    }
);

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(
    function SelectItem({className, children, ...props}, ref){
        return (
        <SelectPrimitive.Item
            ref={ref}
            className={cn(selectItemClasses(), className)}
            {...props}
        >
        <span className={selectItemIndicatorClasses()}>
          <SelectPrimitive.ItemIndicator>
            <CheckIcon className="h-4 w-4"/>
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
        )
    }
);

const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(
    function SelectSeparator({className, ...props}, ref){
        return (
        <SelectPrimitive.Separator
            ref={ref}
            className={cn(separatorClasses(), className)}
            {...props}
        />
        )
    }
);

export const Select = {
    Root,
    Group: SelectGroup,
    Value: SelectValue,
    Trigger: SelectTrigger,
    Content: SelectContent,
    Label: SelectLabel,
    Item: SelectItem,
    Separator: SelectSeparator,
    ScrollUpButton: SelectScrollUpButton,
    ScrollDownButton: SelectScrollDownButton,
};
