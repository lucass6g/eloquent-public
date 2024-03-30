"use client";
import { forwardRef }                         from "react";
import { ButtonIconElement, ButtonIconProps } from './button-icon.ts'
import { cn }                                 from '../../lib/utils.ts';
import { Icon }                                 from "../Icon"
import { buttonClasses, roundIconClasses } from "./styles.ts";

export const ButtonIcon = forwardRef<ButtonIconElement, ButtonIconProps>(
	( { iconName, inverse = false, children, icon, size, className, ...props }, forwardedRef ) => {
		//if ( !iconName ) {
		//	throw new Error( "<ButtonIcon/>: iconName is required" );
		//}
		console.log('Inverse:', inverse)

		const isLabeled = children !== undefined && children !== "";
		return (
			<button
				{ ...props }
				ref={ forwardedRef }
				className={ cn( buttonClasses( { inverse: inverse, size: size } ), className ) }
			>
				<Icon
					name={ iconName }
					className={ roundIconClasses( { inverse: inverse, labeled: isLabeled, size} ) }
					aria-disabled={ props.disabled }
					{ ...icon}
				/>
				{ children }
			</button>
		);
	},
);
