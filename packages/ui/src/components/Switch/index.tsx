"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@eloquent/styles";
import { switchVariants } from "./variants";

type SwitchProps = {
    labelText: string;
    helperText?: string;
}
const { base, thumbClasses} = switchVariants();

const LabelText = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchProps
>(({ className, labelText, helperText, ...props }, ref) => (<div style={{ display: 'flex', alignItems: 'center' }}>
    <SwitchPrimitives.Root
        className={cn(base(), className)}
        id={labelText}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(thumbClasses(), className)}
        />
    </SwitchPrimitives.Root>
    <div className="ml-2 flex flex-col">
        <label htmlFor={labelText} className="block text-sm font-medium ml-8px text-green-dark-500" >
            {labelText}
        </label>
        <label htmlFor={labelText} className="block text-sm ml-8px text-neutral-500">
            {helperText}
        </label>
    </div>
</div>));

const Root = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(base(), className)}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(thumbClasses(), className)}
        />
    </SwitchPrimitives.Root>
));
Root.displayName = SwitchPrimitives.Root.displayName;
LabelText.displayName = SwitchPrimitives.Root.displayName;

export const Switch = {
    LabelText: LabelText,
    Root
}
