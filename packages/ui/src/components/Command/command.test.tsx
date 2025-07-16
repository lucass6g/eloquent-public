import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Command } from '.';
import { ComponentIcon } from 'lucide-react';


describe('Command', () => {
    it('renders correctly', () => {
        render(<Command.Root>
            <Command.Input placeholder='Digite um comando...' />
            <Command.List>
                <Command.Empty>Sem resultados.</Command.Empty>
                <Command.Group heading="Título da Seção">
                    <Command.Item><ComponentIcon /> Item 1</Command.Item>
                    <Command.Item><ComponentIcon /> Item 2</Command.Item>
                    <Command.Item><ComponentIcon /> Item 3</Command.Item>
                    <Command.Item><ComponentIcon /> Item 4</Command.Item>
                    <Command.Item><ComponentIcon /> Item 5</Command.Item>
                </Command.Group>
            </Command.List>
        </Command.Root>);

        expect(screen.getByPlaceholderText('Digite um comando...')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('show empty result when', () => {
        const component = render(<Command.Root>
            <Command.Input placeholder='Digite um comando...' />
            <Command.List>
                <Command.Empty>Sem resultados.</Command.Empty>
                <Command.Group heading="Título da Seção">
                    <Command.Item><ComponentIcon /> Item 1</Command.Item>
                    <Command.Item><ComponentIcon /> Item 2</Command.Item>
                </Command.Group>
            </Command.List>
        </Command.Root>);

        const input = screen.getByPlaceholderText('Digite um comando...')
        fireEvent.change(input, {
            target: { value: 'xxx' }
        })
        expect(screen.getByText("Sem resultados.")).toBeInTheDocument();

        expect(component.baseElement).toMatchSnapshot();
    });
    it('show correctly result', () => {
        const component = render(<Command.Root>
            <Command.Input placeholder='Digite um comando...' />
            <Command.List>
                <Command.Empty>Sem resultados.</Command.Empty>
                <Command.Group heading="Título da Seção">
                    <Command.Item><ComponentIcon /> Item 1</Command.Item>
                    <Command.Item><ComponentIcon /> Item 2</Command.Item>
                </Command.Group>
            </Command.List>
        </Command.Root>);

        const input = screen.getByPlaceholderText('Digite um comando...')
        fireEvent.change(input, {
            target: { value: 'Item 1' }
        })
        expect(screen.getByText("Item 1")).toBeInTheDocument();

        expect(component.baseElement).toMatchSnapshot();
    });
});