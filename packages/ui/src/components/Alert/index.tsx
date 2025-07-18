import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@eloquent/styles";
import { alertSlots, alertVariants } from "./variants";

const { alertDescriptionStyle, alertTitleStyle } = alertSlots();

const RootAlert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
        <div
            ref={ref}
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        />
));
RootAlert.displayName = "Alert";

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn(alertTitleStyle(), className)}
        {...props}
    />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(alertDescriptionStyle(), className)}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription";

export const Alert = {
    Root: RootAlert,
    Title: AlertTitle,
    Description: AlertDescription,
};

