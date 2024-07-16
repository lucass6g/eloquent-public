import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@eloquent/styles";

export const alertVariants = cva(
    "relative w-full p-4 text-sm rounded-[8px] [&>svg]:stroke-primary-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:stroke-foreground [&>svg~*]:pl-7",
    {
        variants: {
            variant: {
                default: "bg-white border border-[#E0E0E0] text-foreground",
                destructive:
                    "bg-background border text-destructive border-destructive [&>svg]:stroke-destructive *:text-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

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
        className={cn("text-base not-italic font-medium", className)}
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
        className={cn("text-base font-normal not-italic text-[#616161]", className)}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription";

export const Alert = {
    Root: RootAlert,
    Title: AlertTitle,
    Description: AlertDescription,
};
