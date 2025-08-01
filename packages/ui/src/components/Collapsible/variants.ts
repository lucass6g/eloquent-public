import { tv } from 'tailwind-variants';

const collapsibleVariants = tv({
    slots: {
        rootStyle: "mb-1 space-y-2 [&>[data-disabled]]:opacity-50" ,
        contentStyle: "space-y-2 [&>div]:rounded-[6px] [&>div]:border [&>div]:px-4 [&>div]:py-3 [&>div]:text-sm [&>div]:text-neutral-500",
        triggerContainerStyle: "ml-4 flex items-center justify-between space-x-4 [&>button>svg]:text-green-dark-500 [&>button>svg]:w-[16px] [&>button>svg]:h-[16px]",
        triggerTitleStyle: 'text-sm text-left font-bold text-green-dark-500',
    }
});

export const { rootStyle, contentStyle,  triggerTitleStyle, triggerContainerStyle } = collapsibleVariants();

