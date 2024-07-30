import { render, screen, waitFor } from '@testing-library/react';
import { it, describe, expect } from "vitest"
import userEvent from '@testing-library/user-event';
import { HoverCard } from '.';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import { CalendarDays } from 'lucide-react';


describe('HoverCard Component', () => {
    it('renders HoverDefault story and displays content on hover', async () => {
        const component = render(<HoverCard.Root>
            <HoverCard.Trigger>
                <Button variant="link">@Cartão Elo</Button>
            </HoverCard.Trigger>
            <HoverCard.Content>
                Cartão Elo - O cartão do Brasileiro.
            </HoverCard.Content>
        </HoverCard.Root>);

        const triggerButton = screen.getByText('@Cartão Elo');
        expect(triggerButton).toBeInTheDocument();

        await userEvent.hover(triggerButton);
        const content = await screen.findByText('Cartão Elo - O cartão do Brasileiro.');
        expect(content).toBeInTheDocument();
        expect(component.baseElement).toMatchSnapshot();
    });
    it('renders HoverCardExample story and displays content with avatar on hover', async () => {
        const component = render(
            <HoverCard.Root>
                <HoverCard.Trigger asChild>
                    <Button variant="link">@Cartão Elo</Button>
                </HoverCard.Trigger>
                <HoverCard.Content className="w-80">
                    <div className="flex space-x-4">
                        <Avatar.Root size='sm'>
                            <Avatar.Fallback data-testid="avatar">Elo</Avatar.Fallback>
                        </Avatar.Root>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">Cartão Elo</h4>
                            <p className="text-sm">O cartão do Brasileiro.</p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-muted-foreground">
                                    Fundada em 2011
                                </span>
                            </div>
                        </div>
                    </div>
                </HoverCard.Content>
            </HoverCard.Root>
        );
        const triggerButton = screen.getByText('@Cartão Elo');
        expect(triggerButton).toBeInTheDocument();
        userEvent.hover(triggerButton);
        await waitFor(() => {
            const avatarFallback = screen.getByTestId('avatar');
            expect(avatarFallback).toBeInTheDocument();
            const content = screen.getByText('Cartão Elo');
            expect(content).toBeInTheDocument();
            const subContent = screen.getByText('O cartão do Brasileiro.');
            expect(subContent).toBeInTheDocument();
            const calendarText = screen.getByText('Fundada em 2011');
            expect(calendarText).toBeInTheDocument();
            expect(component.baseElement).toMatchSnapshot();
        });
    });
});