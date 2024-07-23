import { render, screen } from "@testing-library/react"
import {describe, it, expect} from "vitest"
import { Caption } from "."

describe("Caption Component", () => {
    it("should rendering the component correctly", () => {
        render(<Caption size="default">O Brasil é caramelo</Caption>);
        expect(screen.getByText("O Brasil é caramelo")).toBeInTheDocument() 
    })

    it("should render component with different sizes", () => {
       const { rerender } = render(<Caption size="default">Size default</Caption>);
        let sizeElement = screen.getByText("Size default");
        expect(sizeElement).toHaveClass("text-sm");
         
        rerender(<Caption size="sm">Size sm</Caption>);
        sizeElement = screen.getByText("Size sm");
        expect(sizeElement).toHaveClass("text-xs");
        
    })
})