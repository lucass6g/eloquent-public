import { headingStyleClasses }                    from './styles.ts'
import { forwardRef} from 'react'
import { cn }                                     from "../../../../lib/utils";
import { HeadingElement, HeadingProps } from './Heading.ts';

export const Heading = forwardRef<HeadingElement, HeadingProps>(
  (
    {
      as: Heading = 'h1',
      inverse = false,
      size = 'medium',
      className,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <Heading
        ref={forwardedRef}
        className={cn(headingStyleClasses({ headingLevel: size, inverse }), className)}
        {...props}
      />
    )
  },
)

Heading.displayName = 'OrbHeading'
