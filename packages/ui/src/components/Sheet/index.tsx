"use client"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { sheetContentStyle, sheetDescriptionStyle, sheetFooterStyle, sheetHeaderStyle, sheetOverlayStyle, sheetTitleStyle, sheetVariants } from "./variants"

const Root = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(function SheetOverlayEloquent({ className, ...props }, ref) {
  return (
    <SheetPrimitive.Overlay
      className={sheetOverlayStyle({ className })}
      {...props}
      ref={ref}
    />
  )
})


interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(function SheetContentEloquent({ side = "right", className, children, ...props }, ref) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={sheetVariants({ side, className })}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className={sheetContentStyle({ className })}>
          <Cross2Icon />
          <span>Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
})

const SheetHeader = (function SheetHeaderEloquent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={sheetHeaderStyle({ className })}
      {...props}
    />
  )
})

const SheetFooter = (function SheetFooterEloquent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={sheetFooterStyle({ className })}
      {...props}
    />
  )
})

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(function SheetTitleEloquent({ className, ...props }, ref) {
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={sheetTitleStyle({ className })}
      {...props}
    />
  )
})

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(function SheetDescriptionEloquent({ className, ...props }, ref) {
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={sheetDescriptionStyle({ className })}
      {...props}
    />
  )
})

export const Sheet = {
  Root,
  Portal: SheetPortal,
  Overlay: SheetOverlay,
  Trigger: SheetTrigger,
  Close: SheetClose,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
}
