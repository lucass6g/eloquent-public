import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ScrollArea } from '.'
import { describe, expect, it } from 'vitest'

describe('ScrollArea Component', () => {
    it('renders children inside RootScrollArea', () => {
        render(
            <ScrollArea.Root>
                <div>Test Child</div>
            </ScrollArea.Root>
        )
        expect(screen.getByText('Test Child')).toBeInTheDocument()
    })

    describe("should match the snapshot", () => {
        it("horizontal", () => {
            const component = render(
                <ScrollArea.Root>
                    <div>Test Child</div>
                    <ScrollArea.ScrollBar orientation="horizontal" />
                </ScrollArea.Root>
            );

            expect(component.baseElement).toMatchSnapshot();
        });

        it("vertical", () => {
            const component = render(
                <ScrollArea.Root>
                    <div>Test Child</div>
                    <ScrollArea.ScrollBar orientation="vertical" />
                </ScrollArea.Root>
            );

            expect(component.baseElement).toMatchSnapshot();
        });
    });
})