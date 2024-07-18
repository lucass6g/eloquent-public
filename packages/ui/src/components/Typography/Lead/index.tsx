import {forwardRef} from "react";
import {LeadElement, LeadProps} from "./Lead.props.ts";
import {cn} from "@eloquent/styles";
import {leadVariants} from "./variants.ts";

export const Lead = forwardRef<LeadElement, LeadProps>(
    function Lead({className, as: TagName = "h1",...rest}, ref) {
        return (
            <TagName
                ref={ref}
                className={cn(leadVariants({
                    className
                }))}
                {...rest}
            />
        )
    }
)
