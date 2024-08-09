import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AlertDialog } from '.';

const mockComponent = <AlertDialog.Root>
    <AlertDialog.Trigger data-testid="trigger">
        Abrir
    </AlertDialog.Trigger>
    <AlertDialog.Content>
        <AlertDialog.Header>
            <AlertDialog.Title data-testid="title">
                Você está certo disso?
            </AlertDialog.Title>
            <AlertDialog.Description data-testid="description">
                Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados dos nossos servidores
            </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
            <AlertDialog.Cancel data-testid="cancel">
                Cancelar
            </AlertDialog.Cancel>
            <AlertDialog.Action data-testid="Action">
                Continuar
            </AlertDialog.Action>
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>

describe('AlertDialog Component', () => {
    it('should open and display dialog content when trigger is clicked', () => {
        const component = render(mockComponent);
        const triggerButton = screen.getByTestId('trigger');
        fireEvent.click(triggerButton);
        const title = screen.getByTestId('title');
        const description = screen.getByTestId('description');
        const cancelButton = screen.getByTestId('cancel');
        const actionButton = screen.getByTestId('Action');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Você está certo disso?');
        expect(description).toBeInTheDocument();
        expect(description).toHaveTextContent('Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados dos nossos servidores');
        expect(cancelButton).toBeInTheDocument();
        expect(actionButton).toBeInTheDocument();
        expect(component.baseElement).toMatchSnapshot();
    });
    it('should close the dialog when the cancel button is clicked', () => {
        const component = render(mockComponent);
        const triggerButton = screen.getByTestId('trigger');
        fireEvent.click(triggerButton);
        const cancelButton = screen.getByTestId('cancel');
        fireEvent.click(cancelButton);
        const title = screen.queryByTestId('title');
        expect(title).not.toBeInTheDocument();
        expect(component.baseElement).toMatchSnapshot();
    });
});