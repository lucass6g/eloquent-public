import { cva } from "class-variance-authority";

export const buttonClasses = cva(
  [
    "flex items-center gap-inline-xxxs font-medium",
    "disabled:text-base-light-02",
  ],
  {
    variants: {
      inverse: {
        true: ["text-base-light-pure", "disabled:text-base-dark-02"],
      },
      size: {
        small: ["text-xxs"],
      }
    },
  },
);

export const roundIconClasses = cva(
  [
    "h-inline-md w-inline-md flex items-center justify-center rounded-full",
    "hover:bg-base-light-01",
    "aria-disabled:hover:!bg-transparent",
  ],
  {
    variants: {
      labeled: {
        true: [
          "border-2 ",
          "aria-disabled:!border aria-disabled:hover:!border-base-light-02",
        ],
      },
      inverse: {
        true: ["border-base-dark-01 hover:!bg-base-dark-03 "],
      },
      size: {
        small: ["h-stack-xs w-stack-xs"],
      }
    },
    compoundVariants: [
      {
        labeled: true,
        inverse: true,
        class: "hover:border-base-light-pure border-base-dark-01",
      },
      {
        labeled: true,
        inverse: false,
        class: "border-base-light-02 hover:border-base-dark-pure ",
      },
    ],
  },
);
