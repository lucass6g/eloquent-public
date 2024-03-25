import { cva } from 'class-variance-authority'

export const descriptionStyleClasses = cva(
  [
    'font-sans',
    'max-w-full',
    'm-0',
    'p-0',
    'sm:text-xs',
    'text-xxs',
    'font-regular',
    'leading-distant',
    'break-words',
    'text-base-dark-pure',
  ] as string[],
  {
    variants: {
      inverse: {
        true: ['text-base-light-pure'] as string[],
      },
    },
  },
)
