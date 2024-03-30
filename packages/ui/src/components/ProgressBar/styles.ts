import { cva } from 'class-variance-authority';

type ClassVariants = {
	inverse: {
		true?: string[];
		false?: string[]
	}
}



export const progressRootClasses = cva<ClassVariants>( [ "relative bg-base-dark-01 overflow-hidden w-full h-[8px] border-none" ] as string[], {
	variants: {
		inverse: {
			true:  [ 'bg-base-dark-01' ] as string[],
			false: [ 'bg-base-light-02' ] as string[],
		},
	},
} )

export const progressIndicatorClasses = cva<ClassVariants>( [ " w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]" ] as string[], {
	variants: {
		inverse: {
			true:  [ 'bg-base-light-pure' ] as string[],
			false: [ 'bg-base-dark-pure' ] as string[],
		},
	},
} )

export const progressLabelClasses = cva( [ "text-xs text-base-dark-01" ] as string[] )