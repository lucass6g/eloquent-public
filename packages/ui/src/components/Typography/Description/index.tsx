import { forwardRef }                           from "react";
import { cn }                                   from '../../../lib/utils.ts';
import { DescriptionElement, DescriptionProps } from './Description.ts';
import { descriptionStyleClasses }              from "./styles.ts";

export const Description = forwardRef<DescriptionElement, DescriptionProps>(
	( {
		as: Description = "p",
		inverse = false,
		className,
		...props
	}, forwardedRef ) => (
		<Description
			ref={ forwardedRef }
			className={ cn( descriptionStyleClasses( { inverse } ), className ) }
			{ ...props }
		/>
	),
);

Description.displayName = "OrbDescription";
