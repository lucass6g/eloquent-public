import { HTMLAttributes } from 'react';

type ButtonElement =  HTMLAttributes<HTMLDivElement>
type ButtonGroupProps = {}  & Omit<ButtonElement, 'className'>
export const ButtonGroup = ({ ...rest}:ButtonGroupProps) => <div className="flex flex-col md:flex-row gap-2 "  {...rest}/>