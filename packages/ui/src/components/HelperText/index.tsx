import React from "react";
import { cn } from "@eloquent/styles";
import { LabelHelperTextProps, RootHelperTextProps } from "./helperText.props";
import { helperTextVariants } from "./variants";

const {root, label} = helperTextVariants()

const RootHelperText = React.forwardRef<HTMLDivElement, RootHelperTextProps>(
    function RootHelperText({className, children, ...props}, ref){
        return(
            <div className={cn(root(), className)} ref={ref} {...props}>
                {children}
            </div>
        )
    }
)

const LabelHelperText = React.forwardRef<HTMLSpanElement, LabelHelperTextProps>(
    function LabelHelperText({className, children, ...props}, ref){
        return(
            <span className={cn(label(), className)} ref={ref} {...props}>
                {children}
            </span>
        )
    }
)

export const HelperText = {
    Root: RootHelperText,
    Label: LabelHelperText
}