import { tv } from "tailwind-variants";

const switchVariants = tv({
  slots: {
    rootStyle: "flex items-center [&[aria-disabled='true']]:cursor-not-allowed [&[aria-disabled='true']]:opacity-50",
    switchButtonStyle: [
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors",
      "data-[state=checked]:bg-green-dark-500 data-[state=unchecked]:bg-neutral-400",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    labelTextStyle: "text-sm ml-2 font-medium text-green-dark-500",
    helperTextStyle: "text-sm ml-2 text-neutral-500",
    thumbStyle:
      "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
  },
});

export const { rootStyle, labelTextStyle, thumbStyle, helperTextStyle, switchButtonStyle } = switchVariants();
