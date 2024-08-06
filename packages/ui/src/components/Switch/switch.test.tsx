import { render, screen, waitFor } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Switch } from "..";

describe("Switch", () => {
  it("should match the snapshot", () => {
    const component = render(<Switch.Root id="switch" />);

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should check correctly", async () => {
    const switchFn = vi.fn();

    render(<Switch.Root defaultChecked={false} onCheckedChange={switchFn} />);

    const button = screen.getByRole("switch");
    expect(button).not.toBeChecked();

    await waitFor(() => userEvent.click(button));
    expect(button).toBeChecked();

    expect(switchFn).toHaveBeenCalled();
  });

  it("should uncheck correctly", async () => {
    const switchFn = vi.fn();

    render(<Switch.Root defaultChecked={true} onCheckedChange={switchFn} />);

    const button = screen.getByRole("switch");
    expect(button).toBeChecked();

    await waitFor(() => userEvent.click(button));
    expect(button).not.toBeChecked();

    expect(switchFn).toHaveBeenCalled();
  });

  it("should be disabled", async () => {
    const checkFn = vi.fn();

    render(
      <Switch.Root disabled defaultChecked={false} onCheckedChange={checkFn} />
    );

    const button = screen.getByRole("switch");
    await waitFor(() => userEvent.click(button));

    expect(button).toBeDisabled();
    expect(checkFn).not.toHaveBeenCalled();
  });

  it("renders the switch with title", () => {
    const component = render(
      <Switch.LabelText labelText="O Brasil é caramelo" />
    );
    const labelElement = screen.getByText("O Brasil é caramelo");
    expect(labelElement).toBeInTheDocument();
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(component.baseElement).toMatchSnapshot();
  });

  it("renders the switch with helper text", () => {
    const component = render(
      <Switch.LabelText
        labelText="Título"
        helperText="Texto auxiliar ao Switch"
      />
    );
    const labelElement = screen.getByText("Título");
    expect(labelElement).toBeInTheDocument();
    const helperTextElement = screen.getByText("Texto auxiliar ao Switch");
    expect(helperTextElement).toBeInTheDocument();
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(component.baseElement).toMatchSnapshot();
  });
});
