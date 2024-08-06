import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@eloquent/styles";
import { ButtonProps } from "./Button.props";
import { buttonVariants } from "./variants";
import { Loader2 } from "lucide-react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    function EloquentButton({
        className, 
        variant = "default", 
        disabled = false, 
        loading = false, 
        size = "default", 
        asChild = false, 
        children,
        labelLoading = "Carregando...",
        ...props
    }, 
        ref)  {
        const Comp = asChild ? Slot : "button";

        const LoadingContent = (
            <div className="flex items-center">
                <Loader2 className={cn("animate-spin h-4 w-4 mr-2", size === "icon" && "m-auto")}/>
                {size !== "icon" && labelLoading}
            </div>
        )
          
        return (
            <Comp
                disabled={disabled || loading}
                className={cn(variant === "none" ? buttonVariants({variant, className}): 
                buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
        >
            {loading ? LoadingContent : children}
        </Comp>
    );
    }
);
