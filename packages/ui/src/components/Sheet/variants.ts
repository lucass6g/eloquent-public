import { tv } from 'tailwind-variants';

export const sheetVariants = tv({
    base: "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom:
                "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right:
                "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
    },
    defaultVariants: {
        side: "right",
    },
});

const sheetSlots = tv({
    slots: {
        sheetOverlayStyle:  "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        sheetContentStyle: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary [&>svg]:h-4 [&>svg]:w-4 [&>span]:sr-only",
        sheetHeaderStyle: "flex flex-col space-y-2 text-center sm:text-left",
        sheetFooterStyle: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        sheetTitleStyle: "text-lg font-semibold text-foreground",
        sheetDescriptionStyle: "text-sm text-muted-foreground"

    }
});

export const { sheetOverlayStyle, sheetContentStyle, sheetHeaderStyle, sheetFooterStyle, sheetTitleStyle, sheetDescriptionStyle } = sheetSlots();