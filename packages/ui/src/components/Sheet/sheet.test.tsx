import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { it, describe, expect, vi, beforeEach, afterEach } from "vitest"
import { Sheet } from '.';

const SheetTest = (props: React.ComponentProps<typeof Sheet.Root>) => (
    <Sheet.Root>
        <Sheet.Trigger>Abrir</Sheet.Trigger>
        <Sheet.Content {...props}>
            <Sheet.Header>
                <Sheet.Title>Você está certo disso?</Sheet.Title>
                <Sheet.Description>
                    Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
                    e removerá seus dados dos nossos servidores.
                </Sheet.Description>
            </Sheet.Header>
        </Sheet.Content>
    </Sheet.Root>
);

describe('given a default Sheet', () => {
    let rendered: RenderResult;
    let trigger: HTMLElement;
    let closeButton: HTMLElement;
    let consoleWarnMock: ReturnType<typeof vi.spyOn>;
    let consoleWarnMockFunction: ReturnType<typeof vi.fn>;
    let consoleErrorMock: ReturnType<typeof vi.spyOn>;
    let consoleErrorMockFunction: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        consoleWarnMockFunction = vi.fn();
        consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(consoleWarnMockFunction);
        consoleErrorMockFunction = vi.fn();
        consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(consoleErrorMockFunction);

        rendered = render(<SheetTest />);
        trigger = rendered.getByText('Abrir');
    });

    afterEach(() => {
        consoleWarnMock.mockRestore();
        consoleWarnMockFunction.mockClear();
        consoleErrorMock.mockRestore();
        consoleErrorMockFunction.mockClear();
    });


    describe('after clicking the trigger', () => {
        beforeEach(() => {
            fireEvent.click(trigger);
            closeButton = rendered.getByText('Close');
        });

        it('should render content correctly', () => {
            const component = render(<SheetTest />)
            expect(screen.getByText('Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados dos nossos servidores.')).toBeInTheDocument();
            expect(component.baseElement).toMatchSnapshot();
        });


        it('should open the content', () => {
            expect(closeButton).toBeVisible();
        });

        describe('when pressing escape', () => {
            beforeEach(() => {
                fireEvent.keyDown(document.activeElement!, { key: 'Escape' });
            });

            it('should close the content', () => {
                expect(closeButton).not.toBeInTheDocument();
            });
        });
    });
});