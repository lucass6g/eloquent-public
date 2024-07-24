import * as React from "react"

import { cn } from "@eloquent/styles"
import {inputVariants} from "./variants"
import { InputProps } from "./Input.props"

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({className, type = "text", ...props}, ref) {
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

export { Input }