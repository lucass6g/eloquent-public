import { render } from "@testing-library/react";
import { Tooltip } from ".";
import { describe, it, expect } from "vitest";

describe("Tooltip", () => {
  it("renders Tooltip correctly", () => {
    const { container } = render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover me</Tooltip.Trigger>
          <Tooltip.Content>Tooltip content</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});