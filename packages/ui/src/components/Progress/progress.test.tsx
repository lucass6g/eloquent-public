import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./";

describe("Progress Component", () => {
  it("renders with default value when no value is provided", () => {
    const component = render(<Progress data-testid="testeprogress" />);
    const progressElement = screen.getByTestId("testeprogress").children[0];
    expect(progressElement).toHaveStyle({ transform: "translateX(-100%)" });
    expect(component.baseElement).toMatchSnapshot();
  });

  it("renders with value when value is provided", () => {
    const component = render(
      <Progress value={50} data-testid="testeprogress" />
    );
    const progressElement = screen.getByTestId("testeprogress").children[0];
    expect(progressElement).toHaveStyle({ transform: "translateX(-50%)" });
    expect(component.baseElement).toMatchSnapshot();
  });
});
