import { ElementRef, HTMLAttributes } from 'react';

export type HeadingElement = ElementRef<'h1'>
export type HeadingAsProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export type HeadingSizeProps = {
	size: 'display' | 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall'
}

export type HeadingOrbProps = {
	inverse?: boolean
}

export type HeadingProps = HeadingAsProps &
                           HTMLAttributes<HTMLHeadingElement> &
                           HeadingOrbProps &
                           HeadingSizeProps
export type HeadingStylesProps = {
	headingLevel: {
		[key in HeadingSizeProps['size']]: string[]
	}
	inverse: {
		true: string[]
	}
}