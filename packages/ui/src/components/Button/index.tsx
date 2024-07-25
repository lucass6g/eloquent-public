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
        disabled, 
        loading = false, 
        size, 
        asChild = false, 
        startIcon,
        children,
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
            <span className="flex items-center">
                {loading && <Loader2 className={cn("animate-spin h-4 w-4 mr-2", size === "icon" && "m-auto")}/>}
                {renderIcon(startIcon)}
                {children}
                {renderIcon(endIcon)}
            </span>
        </Comp>
    );
    }
);
