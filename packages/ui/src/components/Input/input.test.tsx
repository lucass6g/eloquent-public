import { vi, describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "..";

describe("Input", () => {
  it("should match the snapshot", () => {
    const component = render(<Input type="email" placeholder="email" />);

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should be filled out correctly", async () => {
    const stateFn = vi.fn();

    render(<Input type="email" placeholder="email" onChange={stateFn} />);

    const input = screen.getByPlaceholderText("email");
    await waitFor(() => userEvent.type(input, "placeholder@elo.com"));

    const filledInput = screen.queryByDisplayValue("placeholder@elo.com");
    expect(filledInput).toBeInTheDocument();

    expect(stateFn).toHaveBeenCalled();
  });

  it("should be disabled", async () => {
    const stateFn = vi.fn();

    render(
      <Input type="email" placeholder="email" onChange={stateFn} disabled />
    );

    const input = screen.getByPlaceholderText("email");
    await waitFor(() => userEvent.type(input, "placeholder@elo.com"));

    const filledInput = screen.queryByDisplayValue("placeholder@elo.com");
    expect(filledInput).not.toBeInTheDocument();

    expect(stateFn).not.toHaveBeenCalled();
    expect(input).toBeDisabled();
  });
});
