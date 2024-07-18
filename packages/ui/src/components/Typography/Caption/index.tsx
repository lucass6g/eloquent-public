import {forwardRef} from "react";
import {CaptionElement, CaptionProps} from "./Caption.props.ts";
import {cn} from "@eloquent/styles";
import {captionVariants} from "./variants.ts";

export const Caption = forwardRef<CaptionElement, CaptionProps>(
    function Caption({className,size="default",...rest}, ref) {
        return (
            <h6
                ref={ref}
                className={cn(captionVariants({
                    className,
                    size
                }))}
                {...rest}
            />
        )
    }
)
