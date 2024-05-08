'use client'
import * as AccordionPrimitive   from '@radix-ui/react-accordion'
import { ChevronDown }           from 'lucide-react';
import * as React                from 'react'
import { ComponentProps }                             from 'react'
import * as Styles                                    from './styles.ts'
import { Typography }                                 from '../Typography';
import {AccordionTriggerProps, AccordionContentProps} from './Accordion.ts'
const Root = (
	props: ComponentProps<typeof AccordionPrimitive.Root>,
) => {
	return <AccordionPrimitive.Root { ...props } />
}

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	ComponentProps<typeof AccordionPrimitive.Item>
>( ( { className, ...props }, ref ) => (
	<AccordionPrimitive.Item ref={ ref } { ...props }/>
) )

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	AccordionTriggerProps
>( ( { children, inverse = false, ...props }, ref ) => (
	<AccordionPrimitive.Header asChild>
		<AccordionPrimitive.Trigger
			ref={ ref }
			className={ Styles.accordionTriggerClasses() }
			{ ...props }
		>
			<div className={ Styles.accordionDividerClasses( { inverse } ) }/>
			<div className={ Styles.accordionTriggerContainerClasses() }>
				<Typography.Heading as="h5" inverse={ inverse } size={ 'small' }>
					{ children }
				</Typography.Heading>
				<div className={ Styles.chevronDownClasses() }>
					<ChevronDown color={ inverse ? "#FFFFFF" : "#000000" }/>
				</div>
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
) )


const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	AccordionContentProps
>( ( { children, inverse = false, ...props }, ref ) => (
	<AccordionPrimitive.Content
		ref={ ref }
		className={ Styles.accordionContentClasses( { inverse } ) }
		{ ...props }
	>
		<div className="pb-4 pt-0">
			<Typography.Description inverse={inverse}>{ children }</Typography.Description>
		</div>
	</AccordionPrimitive.Content>
) )

export const Accordion = {
	Root,
	Item:    AccordionItem,
	Trigger: AccordionTrigger,
	Content: AccordionContent,
}

