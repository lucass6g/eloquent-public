"use client"

import {
  NumericFormatProps, 
  NumericFormat,
  PatternFormatProps,
  PatternFormat
} from "react-number-format"

import { Input } from "../Input"

const Numeric = (props: NumericFormatProps) => {
  return <NumericFormat {...props}  customInput={Input}/>
}

const Pattern = (props: PatternFormatProps) => {
  return <PatternFormat {...props} customInput={Input}/>
}

export const InputMask = {
  Numeric,
  Pattern
}