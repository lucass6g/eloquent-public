import {
    PatternFormatProps,
    PatternFormat
} from "react-number-format"

import { Input } from ".."

export const Pattern = (props: PatternFormatProps) => {
    return <PatternFormat {...props} customInput={Input.Root} />
}