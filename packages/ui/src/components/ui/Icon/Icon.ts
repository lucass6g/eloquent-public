import { icons, LucideProps } from 'lucide-react';

export type IconList =  keyof typeof icons;

export type IconProps = LucideProps & {
	name: IconList;
}