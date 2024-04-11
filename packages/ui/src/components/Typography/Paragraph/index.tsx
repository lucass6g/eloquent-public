import { forwardRef }                       from 'react'
import { ParagraphElement, ParagraphProps } from './Paragraph.ts'
import { paragraphStyleClasses }            from './styles.ts';

export const Paragraph = forwardRef<ParagraphElement, ParagraphProps>(
	( { inverse = false, ...props }, forwardedRef ) => (
		<p
			ref={ forwardedRef }
			className={ paragraphStyleClasses( { inverse } ) }
			{ ...props }
		/>
	),
)

Paragraph.displayName = 'OrbParagraph'
