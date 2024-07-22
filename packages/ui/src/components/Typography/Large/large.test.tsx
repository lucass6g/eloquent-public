import {it, describe, expect} from "vitest"
import {render, screen} from "@testing-library/react";
import {Large} from "./"
import {createRef} from "react";

describe('Large Component', () => {
    it('should render the component correctly', () => {
        render(<Large>O Brasil é caramelo</Large>);
        expect(screen.getByText('O Brasil é caramelo')).toBeInTheDocument();
    })

    it('forwards ref to the DOM element', () => {
        const ref = createRef<HTMLHeadingElement>();
        render(<Large ref={ref}>Test Heading</Large>);
        expect(ref.current?.tagName).toBe('H2');
    });
});