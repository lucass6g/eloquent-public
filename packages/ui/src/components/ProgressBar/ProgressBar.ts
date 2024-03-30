import { Root } from '@radix-ui/react-progress';
import React    from 'react';

type RootPropsWithoutRef = React.ComponentPropsWithoutRef<typeof Root>;

type RootPropsOmitted = Omit<RootPropsWithoutRef, "value" | "max">;

export type ProgressBarProps =
	RootPropsOmitted
	& {
		inverse?: boolean;
		value: number;
		label?: "number" | "text"
	}