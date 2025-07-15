import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "..";
import { describe, expect, it, vi } from "vitest";

describe("Button", () => {
  describe("should match the snapshot", () => {
    it("default", () => {
      const component = render(<Button>button</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("secondary", () => {
      const component = render(<Button variant="secondary">button</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("outline", () => {
      const component = render(<Button variant="secondary">button</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("destructive", () => {
      const component = render(<Button variant="destructive">button</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("disabled", () => {
      const component = render(<Button disabled>button</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("ghost", () => {
      const component = render(<Button variant="secondary">button</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("link", () => {
      const component = render(<Button variant="link">button</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("icon", () => {
      const component = render(<Button size="icon">+</Button>);

      expect(component.baseElement).toMatchSnapshot();
    });
  });

  it("should click correctly", async () => {
    const clickFn = vi.fn();
    render(<Button onClick={clickFn}>button</Button>);

    const button = screen.getByRole("button", { name: /button/i });
    await waitFor(() => userEvent.click(button));

    expect(clickFn).toHaveBeenCalled();
  });

  it("should be disabled", async () => {
    const clickFn = vi.fn();
    render(
      <Button disabled onClick={clickFn}>
        button
      </Button>
    );

    const button = screen.getByRole("button", { name: /button/i });
    await waitFor(() => userEvent.click(button));

    expect(button).toBeDisabled();
    expect(clickFn).not.toHaveBeenCalled();
  });
});
