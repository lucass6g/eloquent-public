import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as React from "react"

import { dialogContentStyle, dialogDescriptionStyle, dialogFooterStyle, dialogHeaderStyle, dialogOverlayStyle, dialogTitleStyle } from "./variants"

const Root = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(function DialogOverlayEloquent({ className, ...props }, ref) {
    return (
        <DialogPrimitive.Overlay
            ref={ref}
            className={dialogOverlayStyle({ className })}
            {...props}
        />
    )
})

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(function DialogContentEloquent({ className, children, ...props }, ref) {
    return (
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Content
                ref={ref}
                className={dialogContentStyle({ className })}
                {...props}
            >
                {children}
            </DialogPrimitive.Content>
        </DialogPortal>
    )
})

const DialogHeader = (function DialogheaderEloquent({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={dialogHeaderStyle({ className })}
            {...props}
        />
    )
})

const DialogFooter = (function DialogFooterEloquent({
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

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(function DialogTitleEloquent({ className, ...props }, ref) {
    return (
        <DialogPrimitive.Title
            ref={ref}
            className={dialogTitleStyle({ className })}
            {...props}
        />
    )
})

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(function DialogDescriptionEloquent({ className, ...props }, ref) {
    return (
        <DialogPrimitive.Description
            ref={ref}
            className={dialogDescriptionStyle({ className })}
            {...props}
        />
    )
})

export const Dialog = {
    Root,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Trigger: DialogTrigger,
    Close: DialogClose,
    Content: DialogContent,
    Header: DialogHeader,
    Footer: DialogFooter,
    Title: DialogTitle,
    Description: DialogDescription,
}
