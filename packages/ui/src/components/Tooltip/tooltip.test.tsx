import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from ".";
import { describe, it, expect } from "vitest";

describe("Tooltip", () => {
  it("should match the snapshot", () => {
    const component = render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover me</Tooltip.Trigger>
          <Tooltip.Content>Tooltip content</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should render TooltipTrigger and TooltipContent", async () => {
    render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover me</Tooltip.Trigger>
          <Tooltip.Content>Tooltip content</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );

    expect(screen.getByText("Hover me")).toBeInTheDocument();

    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();

    userEvent.hover(screen.getByText("Hover me"));

    const tooltipContent = await screen.findAllByText("Tooltip content");
    expect(tooltipContent[0]).toBeInTheDocument();
  });
});
