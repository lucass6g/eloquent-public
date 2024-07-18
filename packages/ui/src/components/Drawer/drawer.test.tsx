import { render, screen, fireEvent } from '@testing-library/react';
import {it, describe, expect} from "vitest"
import { Button } from '..';
import { Drawer } from '.';


describe('Drawer', () => {
    window.matchMedia = window.matchMedia || function() {
        return {
            matches: false,
            addListener: function() {},
            removeListener: function() {}
        };
    };
    it('should render the component correctly', () => {
        const component = render(<Drawer.Root>
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

    expect(component.baseElement).toMatchSnapshot();
    })
    it('should render the drawer and handle open/close actions correctly', () => {
        const component = render(<Drawer.Root>
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
        fireEvent.click(trigger);
        expect(screen.getByText('Content title')).toBeInTheDocument();
        expect(screen.getByText('Content description')).toBeInTheDocument();
        const cancelButton = screen.getByText('Cancel');
        expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);
        expect(component.baseElement).toMatchSnapshot();
    });
    it('should render the responsive variant correctly', () => {
        const component = render(<Drawer.Root>
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
        expect(component.baseElement).toMatchSnapshot();
    });

    it('should open the drawer from right direction', () => {
        const component = render(<Drawer.Root direction='right'>
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
        expect(screen.getByTestId('content')).toHaveAttribute('vaul-drawer-direction', "right")
        expect(component.baseElement).toMatchSnapshot();
    });
    it('should open the drawer from left direction', () => {
        const component = render(<Drawer.Root direction='left'>
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
        expect(screen.getByTestId('content')).toHaveAttribute('vaul-drawer-direction', "left")
        expect(component.baseElement).toMatchSnapshot();
    });
    it('should open the drawer from top direction', () => {
        const component = render(<Drawer.Root direction='top'>
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
        expect(screen.getByTestId('content')).toHaveAttribute('vaul-drawer-direction', "top")
        expect(component.baseElement).toMatchSnapshot();
    });
});