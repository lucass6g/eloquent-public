type InputType = "text" | "password" | "email";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
}