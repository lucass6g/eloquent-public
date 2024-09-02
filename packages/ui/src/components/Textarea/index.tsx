import * as React from "react"

import { textAreaStyle } from "./variants"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextAreaEloquent({ className, ...props }, ref) {
    {
      return (
        <textarea
          className={textAreaStyle({ className })}
          ref={ref}
          {...props}
        />
      )
    }
  }
)

export { Textarea }
