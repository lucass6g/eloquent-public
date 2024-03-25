import { forwardRef }                   from 'react'
import { CaptionElement, CaptionProps } from './Caption.ts';
import { captionStyleClasses }          from './styles.ts'

export const Caption = forwardRef<CaptionElement, CaptionProps>(
	( {
		as: Caption = 'p',
		inverse = false,
		...props
	}, forwardedRef ) => (
		<Caption ref={ forwardedRef } className={ captionStyleClasses( { inverse } ) } { ...props }/>
	),
)
