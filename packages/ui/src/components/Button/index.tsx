import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@eloquent/styles";
import { ButtonProps } from "./Button.props";
import { buttonVariants } from "./variants";
import { Loader2 } from "lucide-react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    function EloquentButton({
        className, 
        variant, 
        children, 
        disabled, 
        loading = false, 
        size, 
        asChild = false, 
        icon,
        startIcon,
        endIcon,
        ...props
    }, 
        ref)  {
        const Comp = asChild ? Slot : "button";
        const renderIcon = (icon: React.ReactNode) => !loading && icon;

        return (
            <Comp
                disabled={disabled || loading}
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
        >
            {loading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
            {renderIcon(startIcon)}
            {children}
            {renderIcon(endIcon)}
        </Comp>
    );
    }
);
