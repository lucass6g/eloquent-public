import {
    PatternFormatProps,
    PatternFormat
} from "react-number-format"

import { Root } from "../Root"

export const Pattern = (props: PatternFormatProps) => {
    return <PatternFormat {...props} customInput={Root} />
}