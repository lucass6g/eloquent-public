import { render, screen } from "@testing-library/react"
import {describe, it, expect} from "vitest"
import { Caption } from "."

describe("Caption", () => {
    it("should match the snapshot", () => {
        const component = render(<Caption size="default" />);
        expect(component.baseElement).toMatchSnapshot();
      });

    it("should render the text", () => {
        render(<Caption size="default">O Brasil é caramelo</Caption>);
        expect(screen.getByText("O Brasil é caramelo")).toBeInTheDocument() 
    })
})