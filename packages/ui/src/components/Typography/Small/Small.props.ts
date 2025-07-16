import {ComponentProps, ElementRef} from "react";
import {VariantProps} from "tailwind-variants";
import {smallVariants} from "./variants.ts";

export type SmallVariantsProps = VariantProps<typeof smallVariants>

export type SmallElement = ElementRef<"h6">

export type SmallProps = ComponentProps<"h6"> & SmallVariantsProps