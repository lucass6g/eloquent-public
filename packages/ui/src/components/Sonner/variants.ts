import { tv } from "tailwind-variants";

export const sonnerSlots = tv({
    slots: {
      toastStyle: 'group toast flex justify-between group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg [&>div>div[data-title]]:font-semibold [&>button]:min-w-[87px]',
       descriptionStyle: 'group-[.toast]:text-muted-foreground',
       actionButtonSyle: 'group-[.toast]:bg-primary group-[.toast]:w-[5px] group-[.toast]:text-primary-foreground',
       cancelButtonStyle: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
    }
  });