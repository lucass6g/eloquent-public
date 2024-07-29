"use client"

import * as React from "react"

import { cn } from "@eloquent/styles"
import {inputMaskVariants} from "./variants"
import ReactInputMask from "react-input-mask"
import { InputMaskProps } from "./InputMask.props"

const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>(
  function InputMask({className, type = "text", ...props}, ref) {
    return (
        <ReactInputMask 
          type={type}
          className={cn(inputMaskVariants(), className)} 
          inputRef={ref}
          {...props} 
        />
  )
  }
)

export { InputMask }