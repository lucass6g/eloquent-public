import { ElementRef, HTMLAttributes } from 'react';

export type DescriptionAsProps = {
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export type DescriptionElement = ElementRef<"p">;

export type DescriptionOrbProps = {
	inverse?: boolean;
};

export type DescriptionProps =
	HTMLAttributes<HTMLParagraphElement>
	& DescriptionOrbProps
	& DescriptionAsProps