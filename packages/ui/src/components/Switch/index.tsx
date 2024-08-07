import * as LabelPrimitive from "@radix-ui/react-label";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { helperTextStyle, labelTextStyle, rootStyle, switchButtonStyle, thumbStyle } from "./variants";


const Root = React.forwardRef<HTMLDivElement, { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement>>(
  function SwitchRootEloquent({ className, disabled, children, ...props }, ref) {
    return (
      <div className={rootStyle({ className })} ref={ref} aria-disabled={disabled} {...props}>
        {children}
      </div >
    )
  }
)

const SwitchLabelText = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(
  function SwitchLabelTextEloquent({ className, children, ...props }, ref) {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={labelTextStyle({ className })}
        {...props}
      >
        {children}
      </LabelPrimitive.Root>
    )
  }
)

const SwitchHelperText = React.forwardRef<React.HTMLAttributes<HTMLParagraphElement>, & React.HTMLAttributes<HTMLDivElement>>(
  function SwitchHelperTextEloquent({ className, children, ...props }) {
    return (
      <p className={helperTextStyle({ className })} {...props}>
        {children}
      </p>
    )
  }
)


const SwitchButton = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(function SwitchButtonEloquent({ className, ...props }, ref) {
  return (
    <SwitchPrimitives.Root
      className={switchButtonStyle({ className })}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={thumbStyle({ className })} />
    </SwitchPrimitives.Root>
  );
});

export const Switch = {
  Root,
  Button: SwitchButton,
  HelperText: SwitchHelperText,
  Label: SwitchLabelText,
};
