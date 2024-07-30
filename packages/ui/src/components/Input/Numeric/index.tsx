import {
    NumericFormatProps,
    NumericFormat
} from "react-number-format"

import { Input } from ".."

export const Numeric = (props: NumericFormatProps) => {
    return <NumericFormat {...props} customInput={Input.Root} />
}