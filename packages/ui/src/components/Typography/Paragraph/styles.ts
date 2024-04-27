import { cva } from 'class-variance-authority'

export const paragraphStyleClasses = cva(
  [
    'font-barlow',
    'max-w-full',
    'text-sm',
    'text-xs',
    'xs:text-10',
    'sm:text-6',
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
