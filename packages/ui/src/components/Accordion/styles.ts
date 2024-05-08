import { cva } from 'class-variance-authority'

type ClassVariants = {
  inverse: { true?: string[]; false?: string[] }
}

export const accordionTriggerClasses = cva([
  'border-r-feedback-informative-100',
  'text-feedback-informative-100 font-regular leading-distant',
  'w-full',
  'opacity-100',
  'transition duration-300 group ease-[cubic-bezier(0.87,_0,_0.13,_1)]',
] as string[])

export const accordionContentClasses = cva<ClassVariants>([] as string[], {
  variants: {
    inverse: {
      true: ['feedback-informative-pure bg-feedback-informative-pure'] as string[],
      false: ['bg-feedback-informative-pure'] as string[],
    },
  },
})

export const accordionDividerClasses = cva<ClassVariants>(
  ['h-0.5 w-full'] as string[],
  {
    variants: {
      inverse: {
        true: ['bg-neutral-100'] as string[],
        false: ['bg-neutral-1000'] as string[],
      },
    },
  },
)

export const accordionTriggerContainerClasses = cva([
  'flex justify-between items-center',
  'border-r-base-dark-01',
  'my-stack-xxs',
  'leading-distant',
  'w-full',
] as string[])

export const chevronDownClasses = cva([
  'ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform group-data-[state=open]:rotate-180 leading-default',
] as string[])