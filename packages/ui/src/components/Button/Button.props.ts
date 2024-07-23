import { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./variants";
import { ValueOf } from "src/types/select-key";

export interface ButtonHTMLAttributes extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
export interface ButtonVariantsProps extends VariantProps<typeof buttonVariants>{}
export interface ButtonEloquentProps  {
    asChild?: boolean
}

export interface  ButtonProps extends ButtonEloquentProps, ButtonHTMLAttributes, ButtonVariantsProps {}

export type ButtonVariant = Required<ValueOf<ButtonVariantsProps, "variant">>;
export type ButtonSize = Required<ValueOf<ButtonVariantsProps, "size">>