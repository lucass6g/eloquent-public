import { forwardRef }                       from 'react'
import { ParagraphElement, ParagraphProps } from './Paragraph.ts'
import { paragraphStyleClasses }            from './styles.ts';
import {cn} from "../../../lib/utils.ts";

export const Paragraph = forwardRef<ParagraphElement, ParagraphProps>(
	( { inverse = false, ...props }, forwardedRef ) => (
		<p
			ref={ forwardedRef }
			className={ cn('text-blue-600',paragraphStyleClasses( { inverse } )  )}
			{ ...props }
		/>
	),
)

Paragraph.displayName = 'OrbParagraph'
