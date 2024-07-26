type InputType = "text" | "password" | "number" | "email";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    type?: InputType;
  }