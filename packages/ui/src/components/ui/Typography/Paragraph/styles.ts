import { cva } from 'class-variance-authority'

export const paragraphStyleClasses = cva(
  [
    'font-sans',
    'max-w-full',
    'text-sm',
    'text-xs',
    'xs:text-xs',
    'sm:text-sm',
    'font-regular',
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
