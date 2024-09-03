import { tv } from 'tailwind-variants';

const dialogVariants = tv({
    slots: {
        dialogOverlayStyle: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        dialogContentStyle: "fixed left-[50%] top-[50%] z-50 grid lg:w-full max-w-lg min-w-[328px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  rounded-[8px]",
        dialogHeaderStyle: "flex flex-col space-y-2 text-center sm:text-left",
        dialogFooterStyle: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        dialogTitleStyle: "text-lg font-semibold text-green-dark-600",
        dialogDescriptionStyle: "text-sm text-neutral-500",
    }
});

export const { dialogOverlayStyle, dialogContentStyle, dialogHeaderStyle, dialogFooterStyle, dialogTitleStyle, dialogDescriptionStyle } = dialogVariants();