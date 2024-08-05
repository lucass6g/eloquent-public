"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { switchVariants } from "./variants";

type SwitchProps = {
  labelText: string;
  helperText?: string;
};
const { rootVariants, thumbVariants } = switchVariants();

const LabelText = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchProps
>(function SwitchLabelTextEloquent(
  { className, labelText, helperText, ...props },
  ref
) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SwitchPrimitives.Root
        className={rootVariants({ className })}
        id={labelText}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb className={thumbVariants({ className })} />
      </SwitchPrimitives.Root>
      <div className="ml-2 flex flex-col">
        <label
          htmlFor={labelText}
          className="block text-sm font-medium ml-8px text-green-dark-500"
        >
          {labelText}
        </label>
        <label
          htmlFor={labelText}
          className="block text-sm ml-8px text-neutral-500"
        >
          {helperText}
        </label>
      </div>
    </div>
  );
});

const Root = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(function SwitchEloquent({ className, ...props }, ref) {
  return (
    <SwitchPrimitives.Root
      className={rootVariants({ className })}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={thumbVariants({ className })} />
    </SwitchPrimitives.Root>
  );
});

export const Switch = {
  Root,
  LabelText,
};
