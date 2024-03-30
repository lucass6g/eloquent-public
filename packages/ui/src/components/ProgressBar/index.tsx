import { Case, Switch, Default }                                                        from "@eloquent/react";
import * as Progress                                                           from '@radix-ui/react-progress';
import { progressIndicatorClasses, progressLabelClasses, progressRootClasses } from './styles.ts';
import { ProgressBarProps } from './ProgressBar.ts';
import { Typography } from "../Typography/index.tsx";



export const ProgressBar = ( { inverse = false, value = 0, label="number", ...props }: ProgressBarProps ) => {
	return (
		<div className={ "flex flex-col items-end w-full gap-2" }>
			<Progress.Root
				className={ progressRootClasses( { inverse } ) }
				value={ value }
				{ ...props }
			>
				<Progress.Indicator
					className={ progressIndicatorClasses( { inverse } ) }
					style={ { transform: `translateX(-${ 100 - value }%)` } }
				/>
			</Progress.Root>

			<Switch>
				{/*TODO: Possível exclusão desse Case - Falar com a Laís sobre o motivo de inclusão*/}
				<Case condition={ label == "text" }>
					<Typography.Description className={ progressLabelClasses() }>{ value }% concluído{value > 1 ?"s": ""}</Typography.Description>
				</Case>

				<Default>
					<Typography.Description className={ progressLabelClasses() }>{ value }%</Typography.Description>
				</Default>
			</Switch>

		</div>
	);
};
