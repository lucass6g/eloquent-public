import {ComponentProps, ElementRef} from "react";
import {HeadingLevels} from "../Heading/Heading.props.ts";
export type LeadElements = `h${HeadingLevels}`
export type LeadElement = ElementRef<"h1">
export type LeadEloquentProps = {
    as?: LeadElements;
}
export interface LeadProps extends LeadEloquentProps, ComponentProps<"h1">{}