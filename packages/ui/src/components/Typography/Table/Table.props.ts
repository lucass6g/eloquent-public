import {ComponentProps, ElementRef} from "react";
import {VariantProps} from "tailwind-variants";
import {tableVariants} from "./variants.ts";

export type TableVariantsProps = VariantProps<typeof tableVariants>

export type TableElement = ElementRef<"h6">

export type TableProps = ComponentProps<"h6"> & TableVariantsProps