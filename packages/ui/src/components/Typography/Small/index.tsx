import {forwardRef} from "react";
import {SmallElement, SmallProps} from "./Small.props.ts";
import {cn} from "@eloquent/styles";
import {smallVariants} from "./variants.ts";

export const Small = forwardRef<SmallElement, SmallProps>(
    function Small({className,variant="default",...rest}, ref) {
        return (
            <h6
                ref={ref}
                className={cn(smallVariants({
                    className,
                    variant
                }))}
                {...rest}
            />
        )
    }
)
