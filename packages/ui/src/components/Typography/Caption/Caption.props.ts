import {ComponentProps, ElementRef} from "react";

export type CaptionVariantsProps = {
    size: "default" | "sm";
}
export type CaptionElement = ElementRef<"h6">

export type CaptionProps = ComponentProps<"h6"> & CaptionVariantsProps