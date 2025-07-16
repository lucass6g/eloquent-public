import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Dialog } from '.';

const mockComponent = <Dialog.Root>
    <Dialog.Trigger data-testid="trigger">
        Abrir
    </Dialog.Trigger>
    <Dialog.Content data-testid="content" className="min-w-[300px] h-[280px]"/>
</Dialog.Root>

describe('Dialog Component', () => {
    it('should open and display dialog content when trigger is clicked', () => {
        const component = render(mockComponent);
        const triggerButton = screen.getByTestId('trigger');
        fireEvent.click(triggerButton);
        const content = screen.getByTestId('content');
        expect(content).toBeInTheDocument();
        expect(component.baseElement).toMatchSnapshot();
    });
});