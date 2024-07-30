import {
    NumericFormatProps,
    NumericFormat
} from "react-number-format"

import { Input } from "../Root"

export const Numeric = (props: NumericFormatProps) => {
    return <NumericFormat {...props} customInput={Input} />
}