import { HTMLAttributes } from 'react';
import { buttonGroupClasses } from './styles.ts';

type ButtonElement =  HTMLAttributes<HTMLDivElement>
type ButtonGroupProps = {}  & Omit<ButtonElement, 'className'>
export const ButtonGroup = ({ ...rest}:ButtonGroupProps) => <div className={buttonGroupClasses()}  {...rest}/>