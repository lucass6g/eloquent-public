type InputType = "text" | "password" | "email" | "time";

export interface InputRootProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
}