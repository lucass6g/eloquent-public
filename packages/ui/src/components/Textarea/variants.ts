import { tv } from 'tailwind-variants';

const textAreaVariants = tv({
   slots: {
    textAreaStyle: "min-h-[60px] w-full rounded-[6px] border border-input bg-transparent px-3 py-2 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-400 focus-visible:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-50",
   }
});

export const { textAreaStyle } = textAreaVariants();