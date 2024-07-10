import {forwardRef} from "react";
import {HeadingElement, HeadingProps} from "./Heading-type";
import {cn} from "@eloquent/styles";
import {headingVariants} from "./variants"

export const Heading = forwardRef<HeadingElement, HeadingProps>(
    function Heading({className, as: TagName = "h1", ...rest}, ref) {
        return (
            <TagName
                ref={ref}
        className={cn(headingVariants({
            level: TagName,
            className
        }),)}
        {...rest}
        />
    )
    }
)
