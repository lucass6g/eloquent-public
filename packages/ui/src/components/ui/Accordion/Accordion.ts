import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React              from 'react';

export type AccordionTriggerProps =
	React.ComponentPropsWithoutRef<
		typeof AccordionPrimitive.Trigger
	>
	& {
		inverse?: boolean
	}

export type AccordionContentProps =
	React.ComponentPropsWithoutRef<
		typeof AccordionPrimitive.Content
	>
	& {
		inverse?: boolean
	}