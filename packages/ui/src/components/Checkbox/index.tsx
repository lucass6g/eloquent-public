import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";
import { checkboxStyle, helperTextStyle, indicatorStyle, labelTextStyle, rootStyle } from "./variants";
export type { CheckboxProps } from "@radix-ui/react-checkbox";


const Root = React.forwardRef<HTMLDivElement, { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement>>(
  function RootCheckboxEloquent({ className, disabled, children, ...props }, ref) {
    return (
      <div className={rootStyle({ className })} ref={ref} aria-disabled={disabled} {...props}>
        {children}
      </div >
    )
  }
)

const CheckboxLabelText = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(
  function CheckboxLabelTextEloquent({ className, ...props }, ref) {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={labelTextStyle({ className })}
        {...props}
      />
    )
  }
)

const RootCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(function CheckboxEloquent({ className, ...props }, ref) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={checkboxStyle({ className })}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={indicatorStyle()}
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
});

const CheckboxHelperText = React.forwardRef<React.HTMLAttributes<HTMLParagraphElement>, & React.HTMLAttributes<HTMLDivElement>>(
  function RootCheckboxEloquent({ className, children, ...props }) {
    return (
      <p className={helperTextStyle({ className })} {...props}>
        {children}
      </p>
    )
  }
)


export const Checkbox = {
  Root: Root,
  Label: CheckboxLabelText,
  HelperText: CheckboxHelperText,
  Button: RootCheckbox
};
