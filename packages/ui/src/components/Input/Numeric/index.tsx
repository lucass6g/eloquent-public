import {
    NumericFormatProps,
    NumericFormat
} from "react-number-format"

import { Root } from "../Root"

export const Numeric = (props: NumericFormatProps) => {
    return <NumericFormat {...props} customInput={Root} />
}