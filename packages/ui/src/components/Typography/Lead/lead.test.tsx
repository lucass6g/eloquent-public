import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Lead } from "./";
import { createRef } from "react";

describe("Lead Component", () => {
  it("should render the component correctly", () => {
    render(<Lead>O Brasil é caramelo</Lead>);
    const largeComponent = screen.getByText("O Brasil é caramelo");
    expect(largeComponent).toBeInTheDocument();
    expect(largeComponent).toHaveClass("text-2xl text-foreground font-normal");
  });

  it("forwards ref to the DOM element", () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<Lead ref={ref}>Test Heading</Lead>);
    expect(ref.current?.tagName).toBe("H1");
  });
});
