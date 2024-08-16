import { describe, it, expect } from "vitest";
import { ToggleGroup } from ".";
import { Bold, Italic, Underline } from "lucide-react";
import { render, screen } from "@testing-library/react";

const mockToggleGroupComponent = (
  <ToggleGroup.Root
    variant="default"
    size="default"
    disabled={false}
    type="single"
  >
    <ToggleGroup.Item value="bold" aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="italic" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
      <Underline className="h-4 w-4" />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
);

describe("ToggleGroup Component", () => {
  it("should render ToggleGroup component with default values", async () => {
    const component = render(mockToggleGroupComponent);
    const toggleGroup = screen.getByRole("group");
    const toggleGroupItem = screen.getByLabelText("Toggle bold");

    expect(toggleGroup.children.length).toBe(3);
    expect(toggleGroupItem?.getAttribute("aria-label")).toBe("Toggle bold");
    expect(component.baseElement).toMatchSnapshot();
  });
});
