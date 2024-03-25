import { HeadingStylesProps } from './Heading.ts'
import { cva } from 'class-variance-authority'

export const headingStyleClasses = cva<HeadingStylesProps>(
  ['font-sans', 'm-0', 'p-0', 'transition-all', 'break-words'],
  {
    variants: {
      headingLevel: {
        display: [
          'font-bold',
          'text-xl text-base-dark-pure',
          'sm:text-xxxl',
          'sm:leading-tiny',
          'sm:tracking-medium',
          'leading-medium',
          'tracking-small',
        ],
        xLarge: [
          'font-bold',
          'sm:text-xl',
          'text-lg',
          'sm:leading-medium',
          'leading-tiny',
          'tracking-small',
        ],
        large: [
          'font-bold',
          'text-md',
          'sm:text-lg',
          'leading-medium',
          'sm:tracking-small',
        ],
        medium: [
          'font-semibold',
          'text-sm',
          'sm:text-md',
          'leading-medium',
          'sm:tracking-[0]',
        ],
        small: [
          'font-semibold',
          'text-xs',
          'sm:text-sm',
          'leading-medium',
          'sm:tracking-[0]',
        ],
        xSmall: [
          'text-xs',
          'font-semibold',
          'leading-medium',
          'sm:tracking-[0]',
        ],
      },
      inverse: {
        true: ['text-base-light-pure'],
      },
    },
  },
)
