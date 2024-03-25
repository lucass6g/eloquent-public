import { icons }     from 'lucide-react';
import { IconProps } from './Icon.ts'

export const Icon = ( { name, color, size, ...rest }: IconProps ) => {
	const LucideIcon = icons[name];

	return <LucideIcon color={ color } size={ size } { ...rest }/>;
};
