import { tv } from 'tailwind-variants';

const checkboxVariants = tv({
    slots: {
        rootStyle: "flex-col space-x-2 [&[aria-disabled='true']]:cursor-not-allowed [&[aria-disabled='true']]:opacity-50",
        checkboxStyle: "peer h-4 w-4 shrink-0 rounded-[4px] border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        indicatorStyle: "flex items-center justify-center text-current",
        labelTextStyle: "text-sm font-medium text-green-dark-600",
        helperTextStyle: "pl-4 text-sm text-neutral-500"
    }
});

export const { rootStyle, indicatorStyle, labelTextStyle, helperTextStyle, checkboxStyle } = checkboxVariants();