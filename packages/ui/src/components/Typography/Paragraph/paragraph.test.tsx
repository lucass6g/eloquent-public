import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./";
import { createRef } from "react";

describe("Paragraph Component", () => {
  it("should render the component correctly", () => {
    render(<Paragraph>O Brasil é caramelo</Paragraph>);
    const largeComponent = screen.getByText("O Brasil é caramelo");
    expect(largeComponent).toBeInTheDocument();
    expect(largeComponent).toHaveClass("text-md text-foreground font-normal");
  });

  it("forwards ref to the DOM element", () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<Paragraph ref={ref}>Test Heading</Paragraph>);
    expect(ref.current?.tagName).toBe("P");
  });
});
