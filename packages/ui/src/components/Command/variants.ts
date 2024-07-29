import { tv } from 'tailwind-variants';

const commandSlots = tv({
    slots: {
        rootStyle: "flex border border-solid border-neutral-300 h-full w-full flex-col overflow-hidden rounded-[8px] bg-popover ",
        rootContentDialogStyle: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
        inputStyle: "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50",
        listStyle: "max-h-[300px] overflow-y-auto overflow-x-hidden",
        emptyStyle: "py-6 text-center text-sm",
        groupStyle: "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500",
        separatorStyle: "mx-1 h-px bg-border",
        itemStyle: "relative flex gap-2 cursor-default select-none items-center rounded-[4px] text-neutral-800 px-2 py-1.5 text-sm outline-none [&>svg]:w-5 data-[disabled=true]:pointer-events-none data-[selected=true]:bg-neutral-200 data-[selected=true]:text-neutral-800 data-[disabled=true]:opacity-50",
        shortCutStyle: "ml-auto text-xs tracking-widest text-muted-foreground",
        glassIconStyle: "mr-2 h-[18px] w-[18px] shrink-0 opacity-50 text-neutral-500",
        containerInputStyle: "flex items-center border-b px-3",
        dialogContentStyle: "overflow-hidden p-0"
    }
});

export const { emptyStyle, dialogContentStyle, containerInputStyle, glassIconStyle, groupStyle, inputStyle, itemStyle, listStyle, rootContentDialogStyle, rootStyle, separatorStyle, shortCutStyle } = commandSlots();

