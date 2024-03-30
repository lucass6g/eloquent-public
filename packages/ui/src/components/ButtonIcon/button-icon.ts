import type { LucideProps }                       from 'lucide-react';
import { ButtonHTMLAttributes, ElementRef } from 'react';
import { IconList }                         from '../Icon/Icon.ts'

export type ButtonIconElement = ElementRef<"button">;

//type ButtonElementWithoutChildren = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;
type ButtonProps = ButtonHTMLAttributes<HTMLElement>
export type ButtonIconProps = {
		iconName: IconList;
		inverse?: boolean;
		label?: string;
		size?: "small"
		icon: Omit<LucideProps, 'name'>
	} & ButtonProps
