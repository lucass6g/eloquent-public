import { render, screen } from '@testing-library/react';
import { it, describe, expect } from "vitest"
import { Toggle } from '.';
import { ComponentIcon } from 'lucide-react';

describe('Toggle Component', () => {

    it('renders ToggleWithText story', () => {
        const component = render(<Toggle variant='default'><ComponentIcon data-testid="svg-icon" /> Label </Toggle>);
        expect(screen.getByText('Label')).toBeInTheDocument();
        expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(component.baseElement).toMatchSnapshot();
    });

    it('renders ToggleDefault story', () => {
        render(<Toggle variant='outline' size='sm'><ComponentIcon /> </Toggle>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});