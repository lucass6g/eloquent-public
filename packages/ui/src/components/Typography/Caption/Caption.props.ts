import {ComponentProps, ElementRef} from "react";
import {VariantProps} from "tailwind-variants";
import {captionVariants} from "./variants.ts";

export type CaptionVariantsProps = VariantProps<typeof captionVariants>
export type CaptionElement = ElementRef<"h6">

export type CaptionProps = ComponentProps<"h6"> & CaptionVariantsProps