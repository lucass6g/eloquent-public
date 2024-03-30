import { ElementRef, HTMLAttributes } from 'react';

export type SubtitleElement = ElementRef<'h3'>

export type SubtitleOrbProps = {
	inverse?: boolean
}

export type SubTitleAsProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export type SubTitleSizeProps = {
	size: 'display' | 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall'
}

export type SubtitleProps = SubTitleAsProps &
                             SubTitleSizeProps &
                             SubtitleOrbProps &
                             HTMLAttributes<HTMLHeadingElement>