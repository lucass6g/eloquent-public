import { ElementRef, HTMLAttributes } from 'react';

export type ParagraphElement = ElementRef<'p'>

export type ParagraphOrbProps = {
	inverse?: boolean
}

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
                             ParagraphOrbProps