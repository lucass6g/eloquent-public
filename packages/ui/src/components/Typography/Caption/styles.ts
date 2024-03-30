import { cva } from 'class-variance-authority'

export const captionStyleClasses = cva(
  [
    'font-sans',
    'max-w-full',
    'm-0',
    'p-0',
    'text-xxxs',
    'sm:text-xxs',
    'font-regular',
    'leading-distant',
    'break-words',
    'text-base-dark-pure',
  ],
  {
    variants: {
      inverse: {
        true: ['text-base-light-pure'],
      },
    },
  },
)
