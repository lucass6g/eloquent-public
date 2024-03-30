import { cva } from "class-variance-authority";

export const stepClasses = cva(
  ["h-stack-nano w-stack-nano rounded-full border border-base-dark-pure"],
  {
    variants: {
      active: { true: ["bg-base-dark-pure"] },
      inverse: {
        true: ["border-base-light-pure"],
      },
    },
    compoundVariants: [
      {
        active: true,
        inverse: true,
        class: "bg-base-light-pure",
      },
    ],
  },
);
