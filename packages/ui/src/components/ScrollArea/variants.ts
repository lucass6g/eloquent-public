import { tv } from 'tailwind-variants';

const scrollAreaVariants = tv({
    slots: {
        rootStyle: "relative overflow-hidden",
        rootViewPortStyle: "h-full w-full rounded-[inherit]",
        scrollBarVerticalStyle: "flex touch-none select-none transition-colors h-full w-2.5 border-l border-l-transparent p-[1px]",
        scrollBarHorizontalStyle: "flex touch-none select-none transition-colors h-2.5 flex-col border-t border-t-transparent p-[1px]",
        scrollAreaThumbStyle: "relative flex-1 rounded-full bg-border"
    },
});

export const { rootStyle, rootViewPortStyle, scrollBarVerticalStyle, scrollBarHorizontalStyle, scrollAreaThumbStyle } = scrollAreaVariants();
