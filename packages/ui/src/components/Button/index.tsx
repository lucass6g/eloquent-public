"use client";
import { Slot }                   from '@radix-ui/react-slot';
import type {  VariantProps } from "class-variance-authority";
import * as React                 from "react";
import { cn }                     from "../../lib/utils.ts";
import {buttonVariant} from './styles';


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, inverse, asChild = false, fullWidth,...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariant({variant, size, inverse, fullWidth}), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Eloquent.Button'



