import type { ElementRef, HTMLAttributes } from 'react';

export type CaptionElement = ElementRef<'p'>
export type CaptionAsProps = {
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export type CaptionOrbProps = {
	inverse?: boolean
}

export type CaptionProps = CaptionAsProps &
                           CaptionOrbProps &
                           HTMLAttributes<HTMLParagraphElement> &
                           HTMLAttributes<HTMLHeadingElement>