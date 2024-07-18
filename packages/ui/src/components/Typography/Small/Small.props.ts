import {ComponentProps, ElementRef} from "react";

export type SmallVariantsProps = {
    size: "default" | "sm";
}
export type SmallElement = ElementRef<"h6">

export type SmallProps = ComponentProps<"h6"> & SmallVariantsProps