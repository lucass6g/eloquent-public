import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '..';
import { Drawer } from '.';


describe('Drawer', () => {
    it('should render the drawer and handle open/close actions correctly', () => {
        render(<Drawer.Root>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>);
        const trigger = screen.getByText('Abrir');
        expect(trigger).toBeInTheDocument();
        expect(screen.queryByText('Content title')).not.toBeInTheDocument();
        expect(screen.queryByText('Content description')).not.toBeInTheDocument();
        fireEvent.click(trigger);
        expect(screen.getByText('Content title')).toBeInTheDocument();
        expect(screen.getByText('Content description')).toBeInTheDocument();
        const cancelButton = screen.getByText('Cancel');
        expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);
        expect(screen.queryByText('Content title')).not.toBeInTheDocument();
        expect(screen.queryByText('Content description')).not.toBeInTheDocument();
    });
    it('should render the responsive variant correctly', () => {
        render(<Drawer.Root>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content data-testid="content"variant="responsive">
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>);
        const trigger = screen.getByText('Abrir');
        expect(trigger).toBeInTheDocument();
        fireEvent.click(trigger);
        expect(screen.getByTestId('content')).toHaveClass('rounded-t-[10px]')
    });
});