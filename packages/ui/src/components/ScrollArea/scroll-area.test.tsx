import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { ScrollArea } from '.';

describe('ScrollArea Component', () => {
    it('renders horizontal scrollbar', () => {
        const component = render(<ScrollArea.Root data-testid="scroll-area" type="always" className="w-96 whitespace-nowrap rounded-[6px] border">
            <div className="flex w-max space-x-4 p-4">
                O Design System é uma iniciativa para escalar a forma como projetamos e desenvolvemos interfaces e produtos digitais na Elo.
                Todos os componentes foram projetados para serem reutilizados de acordo com a necessidade.
                Nosso objetivo é garantir consistência, acessibilidade e qualidade.
            </div>
            <ScrollArea.ScrollBar data-testid="scrollbar" orientation='horizontal' />
        </ScrollArea.Root>);
        const scrollArea = screen.getByTestId('scroll-area');
        expect(scrollArea).toBeInTheDocument();

        const scrollBar = screen.getByTestId('scrollbar');
        expect(scrollBar).toHaveAttribute('data-orientation', 'horizontal');

        expect(component.baseElement).toMatchSnapshot();
    });

    it('renders vertical scrollbar', () => {
        const component = render(<ScrollArea.Root data-testid="scroll-area" type="always" className="h-[200px] w-[350px] rounded-[6px] border p-4">
            O Design System é uma iniciativa para escalar a forma como projetamos e desenvolvemos interfaces e produtos digitais na Elo.
            Todos os componentes foram projetados para serem reutilizados de acordo com a necessidade.
            Nosso objetivo é garantir consistência, acessibilidade e qualidade.
            <ScrollArea.ScrollBar data-testid="scrollbar" />
        </ScrollArea.Root>);

        const scrollArea = screen.getByTestId('scroll-area');
        expect(scrollArea).toBeInTheDocument();

        const scrollBar = screen.getByTestId('scrollbar');
        expect(scrollBar).toHaveAttribute('data-orientation', 'vertical');

        expect(component.baseElement).toMatchSnapshot();
    });
});