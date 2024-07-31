type InputType = "text" | "password" | "email";

export interface InputRootProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
}