"use client";
import { forwardRef }                                                       from 'react'
import { CaptionElement, CaptionProps, ValidAsValuesProps } from './Caption.ts';
import { captionStyleClasses }                                              from './styles.ts'

export const Caption = forwardRef<CaptionElement, CaptionProps>(
	( {
		as: Caption = 'p',
		inverse = false,
		...props
	}, forwardedRef ) => {
		const validAsValues = [
			"p",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6"
		] as const satisfies ValidAsValuesProps[]

		if (!validAsValues.includes(Caption)) {
			throw new Error(
				`Invalid value "${Caption}" provided for prop "as" in Caption component.`
			);

		}

		return (
			<Caption ref={ forwardedRef } className={ captionStyleClasses( { inverse } ) } { ...props }/>
		)
	},
)
