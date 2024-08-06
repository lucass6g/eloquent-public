import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Slider } from "./";
import React from "react";

describe("Slider Component", () => {
  it("renders with default value when no value is provided", () => {
    const component = render(<Slider data-testid="slider-test" />);
    const sliderElement = screen.getByRole("slider");

    expect(sliderElement?.getAttribute("aria-valuenow")).toBe("0");
    expect(sliderElement?.getAttribute("aria-valuemin")).toBe("0");
    expect(sliderElement?.getAttribute("aria-valuemax")).toBe("100");
    expect(component.baseElement).toMatchSnapshot();
  });

  it("renders with provided value", () => {
    const component = render(
      <Slider
        data-testid="slider-test"
        max={99}
        min={1}
        step={1}
        defaultValue={[10]}
      />
    );
    const sliderElement = screen.getByRole("slider");

    expect(sliderElement?.getAttribute("aria-valuenow")).toBe("10");
    expect(sliderElement?.getAttribute("aria-valuemin")).toBe("1");
    expect(sliderElement?.getAttribute("aria-valuemax")).toBe("99");
    expect(component.baseElement).toMatchSnapshot();
  });
});
