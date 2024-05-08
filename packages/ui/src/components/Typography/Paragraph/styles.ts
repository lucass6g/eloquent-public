import { cva } from 'class-variance-authority'

export const paragraphStyleClasses = cva(
    [],
  // [
  //   'font-barlow font-regular',
  //   'text-clamp',
  //   'max-w-full',
  //   'leading-distant',
  //   'break-words',
  // ],
  {
    variants: {
      inverse: {
        true: ['text-neutral-100'],
        false: ['text-neutral-1000'],
      },
    },
  },
)
