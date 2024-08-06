import {forwardRef} from "react";
import {LargeElement, ParagraphProps} from "./Paragraph.props.ts";
import {cn} from "@eloquent/styles";
import {paragraphVariants} from "./variants.ts";

export const Paragraph = forwardRef<LargeElement, ParagraphProps>(
    function Paragraph({className, ...rest}, ref) {
        return (
            <p
                ref={ref}
                className={cn(paragraphVariants({
                    className
                }))}
                {...rest}
            />
        )
    }
)
