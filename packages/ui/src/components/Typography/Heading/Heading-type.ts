import {ComponentProps, ElementRef} from "react";

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingElements = `h${HeadingLevels}`;
export type HeadingElement = ElementRef<"h1">
export type HeadingEloquentProps = {
    as?: HeadingElements;
}
export interface HeadingProps extends HeadingEloquentProps, ComponentProps<"h1"> {}