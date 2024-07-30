import * as React from "react"

import { cn } from "@eloquent/styles"
import { inputVariants } from "./variants"
import { InputRootProps } from "./Input.props"

export const Root = React.forwardRef<HTMLInputElement, InputRootProps>(
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
