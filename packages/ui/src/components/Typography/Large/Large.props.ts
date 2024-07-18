import {ComponentProps, ElementRef} from "react";
import {HeadingLevels} from "../Heading/Heading.props.ts";
export type LargeElements = `h${HeadingLevels}`
export type LargeElement = ElementRef<"h2">
export type LargeEloquentProps = {
    as?: LargeElements;
}
export interface LargeProps extends LargeEloquentProps, ComponentProps<"h2">{}