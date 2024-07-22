import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { it, describe, expect } from "vitest"
import { toast } from 'sonner';
import { SonnerToaster } from '.';
import { Button } from '../Button';
import { vi } from 'vitest';

describe('SonnerToaster', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });
    });
    it('displays the toast message when the button is clicked', async () => {
        const toastMessageMock = vi.spyOn(toast, 'message');
        const component = render(
            <div>
                <SonnerToaster />
                <button onClick={() => toast.message('Elo o cartão do brasileiro', {
                    description: 'Elo o cartão do brasileiro',
                    action: <Button onClick={() => console.log(':)')}>Desfazer</Button>,
                })}>
                    Abrir
                </button>
            </div>
        );
        const button = screen.getByText('Abrir');
        fireEvent.click(button);
        await waitFor(() => {
            expect(toastMessageMock).toHaveBeenCalledWith('Elo o cartão do brasileiro', {
                description: 'Elo o cartão do brasileiro',
                action: expect.anything(),
            });
        });
        expect(component.baseElement).toMatchSnapshot();
        toastMessageMock.mockRestore();
    });
});