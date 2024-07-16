import {forwardRef} from "react";
import {LargeElement, LargeProps} from "./Large.props";
import {cn} from "@eloquent/styles";
import {largeVariants} from "./variants.ts";

export const Large = forwardRef<LargeElement, LargeProps>(
    function Large({className, as: TagName = "h2",...rest}, ref) {
        return (
            <TagName
                ref={ref}
                className={cn(largeVariants({
                    className
                }))}
                {...rest}
            />
        )
    }
)
