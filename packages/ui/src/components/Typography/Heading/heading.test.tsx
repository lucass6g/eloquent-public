import {it, describe, expect} from "vitest"
import {render, screen} from "@testing-library/react";
import {Heading} from "./index"
import {createRef} from "react";

describe('Heading Component', () => {
    it('renders with default tag when no tag is provided', () => {
        render(<Heading>Test Heading</Heading>);
        const headingElement = screen.getByText('Test Heading');
        expect(headingElement.tagName).toBe('H1');
    });

    it('renders with provided tag name', () => {
        render(<Heading as="h2">Test Heading</Heading>);
        const headingElement = screen.getByText('Test Heading');
        expect(headingElement.tagName).toBe('H2');
    });

    it('applies custom className along with default styles', () => {
        render(<Heading className="custom-class">Test Heading</Heading>);
        const headingElement = screen.getByText('Test Heading');
        expect(headingElement).toHaveClass('custom-class');
    });

    it('forwards ref to the DOM element', () => {
        const ref = createRef<HTMLHeadingElement>();
        render(<Heading ref={ref}>Test Heading</Heading>);
        expect(ref.current?.tagName).toBe('H1');
    });

    it('renders correctly with variant styles for different levels', () => {
        const { rerender } = render(<Heading as="h1">Test Heading</Heading>);
        let headingElement = screen.getByText('Test Heading');
        expect(headingElement).toHaveClass('font-redonda text-4xl font-extrabold');

        rerender(<Heading as="h2">Test Heading</Heading>);
        headingElement = screen.getByText('Test Heading');
        expect(headingElement).toHaveClass('text-3xl font-semibold');

        rerender(<Heading as="h3">Test Heading</Heading>);
        headingElement = screen.getByText('Test Heading');
        expect(headingElement).toHaveClass('text-2xl font-semibold');

        rerender(<Heading as="h4">Test Heading</Heading>);
        headingElement = screen.getByText('Test Heading');
        expect(headingElement).toHaveClass('text-xl font-semibold');

        rerender(<Heading as="h5">Test Heading</Heading>);
        headingElement = screen.getByText('Test Heading');
        expect(headingElement).toHaveClass('text-md font-semibold');

        rerender(<Heading as="h6">Test Heading</Heading>);
        headingElement = screen.getByText('Test Heading');
        expect(headingElement).toHaveClass('text-sm');
    });
});