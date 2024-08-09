"use client"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as React from "react"

import { alertButtonActionsVariants, alertContentStyle, alertDescriptionStyle, alertTitleStyle, dialogFooterStyle, dialogHeaderStyle, dialogOverlayStyle } from "./variants"

const Root = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(function AlertDialogOverlayEloquent({ className, ...props }, ref) {
    return (
        <AlertDialogPrimitive.Overlay
            className={dialogOverlayStyle({ className })}
            {...props}
            ref={ref}
        />
    )
})

const AlertDialogContent = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(function AlertDialogContentEloquent({ className, ...props }, ref) {
    return (
        <AlertDialogPortal>
            <AlertDialogOverlay />
            <AlertDialogPrimitive.Content
                ref={ref}
                className={alertContentStyle({ className })}
                {...props}
            />
        </AlertDialogPortal>
    )
})

const AlertDialogHeader = (function AlertDialogHeaderEloquent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={dialogHeaderStyle({ className })}
            {...props}
        />
    )
})

const AlertDialogFooter = (function AlertDialogFooterEloquent({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={dialogFooterStyle({ className })}
            {...props}
        />
    )
})

const AlertDialogTitle = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(function AlertDialogTitleEloquent({ className, ...props }, ref) {
    return (
        <AlertDialogPrimitive.Title
            ref={ref}
            className={alertTitleStyle({ className })}
            {...props}
        />
    )
})

const AlertDialogDescription = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(function AlertDialogDescriptionEloquent({ className, ...props }, ref) {
    return (
        <AlertDialogPrimitive.Description
            ref={ref}
            className={alertDescriptionStyle({ className })}
            {...props}
        />
    )
})

const AlertDialogAction = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Action>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(function AlertDialogActionEloquent({ className, ...props }, ref) {
    return (
        <AlertDialogPrimitive.Action
            ref={ref}
            className={alertButtonActionsVariants({ className })}
            {...props}
        />
    )
})

const AlertDialogCancel = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(function AlertDialogCancelEloquent({ className, ...props }, ref) {
    return (
        <AlertDialogPrimitive.Cancel
            ref={ref}
            className={
                alertButtonActionsVariants({ variant: "secondary", className })
            }
            {...props}
        />
    )
})

export const AlertDialog = {
    Root,
    Portal: AlertDialogPortal,
    Overlay: AlertDialogOverlay,
    Trigger: AlertDialogTrigger,
    Content: AlertDialogContent,
    Header: AlertDialogHeader,
    Footer: AlertDialogFooter,
    Title: AlertDialogTitle,
    Description: AlertDialogDescription,
    Action: AlertDialogAction,
    Cancel: AlertDialogCancel,
}
