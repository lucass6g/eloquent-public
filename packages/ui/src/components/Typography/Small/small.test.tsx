import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Small } from "./";
import { createRef } from "react";

describe("Small Component", () => {
  it("should render the component correctly", () => {
    render(<Small size="default">O Brasil é caramelo</Small>);
    const largeComponent = screen.getByText("O Brasil é caramelo");
    expect(largeComponent).toBeInTheDocument();
    expect(largeComponent).toHaveClass("text-sm text-foreground font-normal");
  });

  it("forwards ref to the DOM element", () => {
    const ref = createRef<HTMLHeadingElement>();
    render(
      <Small size="default" ref={ref}>
        Test Small
      </Small>
    );
    expect(ref.current?.tagName).toBe("H6");
  });

  it("should render component with different sizes", () => {
    const { rerender } = render(<Small size="default">Size default</Small>);
    let sizeElement = screen.getByText("Size default");
    expect(sizeElement).toHaveClass("text-sm");

    rerender(<Small size="sm">Size sm</Small>);
    sizeElement = screen.getByText("Size sm");
    expect(sizeElement).toHaveClass("text-xs");
  });
});
