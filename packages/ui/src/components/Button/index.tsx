import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@eloquent/styles";
import { ButtonProps } from "./Button.props";
import { buttonVariants } from "./variants";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    function EloquentButton({className, variant, size, asChild = false, ...props}, ref)  {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
        />
    );
    }
);
