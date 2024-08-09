import { tv } from 'tailwind-variants';

const alertDialogVariants = tv({
    slots: {
        dialogOverlayStyle: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        alertContentStyle: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-[8px]",
        dialogHeaderStyle: "flex flex-col space-y-2 text-center sm:text-left",
        dialogFooterStyle: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        alertTitleStyle: "text-lg font-semibold text-green-dark-600",
        alertDescriptionStyle: "text-sm text-neutral-500",
    },

});

export const alertButtonActionsVariants = tv({
    base: [],
    variants: {
        variant: {
            default: [
                "bg-primary text-sm font-medium text-primary-foreground shadow py-2 px-4 rounded-[360px]",
                "hover:bg-primary-hover",
                "disabled:bg-neutral-300 disabled:text-neutral-500 disabled:font-medium",
            ],
            secondary: [
                "border border-border text-secondary-foreground text-sm font-medium py-2 px-4 rounded-[360px]",
                "hover:bg-secondary-hover",
                "disabled:text-neutral-500",
                "mt-2 sm:mt-0"
            ],
        },
        size: {
            default: "py-2 px-4 w-[184px] h-[40px] border-lg",
            sm: "h-8 px-3 text-xs w-[152px] h-[32px]",
            icon: "h-9 w-9 first-child:stroke-primary-foreground"
        },
    },
    defaultVariants: {
        variant: "default"
    }
});

export const { dialogOverlayStyle, alertContentStyle, dialogHeaderStyle, dialogFooterStyle, alertTitleStyle, alertDescriptionStyle } = alertDialogVariants();

