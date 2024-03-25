import { cva } from 'class-variance-authority'

export const captionStyleClasses = cva(
  [
    'font-sans',
    'max-w-full',
    'text-md',
    'md:text-md',
    'font-semibold',
    'leading-distant',
    'break-words',
  ],
  {
    variants: {
      inverse: {
        true: ['text-base-light-pure'],
        false: ['text-base-dark-pure'],
      },
    },
  },
)
