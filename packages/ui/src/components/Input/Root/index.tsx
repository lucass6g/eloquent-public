import * as React from "react"

import { cn } from "@eloquent/styles"
import { inputVariants } from "./variants"
import { InputProps } from "./Input.props"

export const Root = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, type = "text", ...props }, ref) {
    return (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
