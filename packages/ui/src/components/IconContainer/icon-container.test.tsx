import { render, screen } from '@testing-library/react';
import { ComponentIcon } from 'lucide-react';
import { describe, expect, it } from 'vitest';
import { Icon } from '.';


describe('Icon Container Story', () => {
    it('renders with default size', () => {
        const component = render(<Icon.Container data-testid="container" size='medium'>
            <ComponentIcon />
        </Icon.Container>)

        expect(screen.getByTestId('container')).toHaveClass('[&>svg]:size-6');
        expect(component.baseElement).toMatchSnapshot();
    });
    it('renders with small size', () => {
        render(<Icon.Container data-testid="container" size='small'>
            <ComponentIcon />
        </Icon.Container>)

        expect(screen.getByTestId('container')).toHaveClass('[&>svg]:size-4');
    });
    it('renders with large size', () => {
        render(<Icon.Container data-testid="container" size='large'>
            <ComponentIcon />
        </Icon.Container>)

        
        expect(screen.getByTestId('container')).toHaveClass('[&>svg]:size-8');
    });
});