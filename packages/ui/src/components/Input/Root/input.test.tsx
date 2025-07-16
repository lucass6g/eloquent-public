import { vi, describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "..";

describe("Input", () => {
  it("should match the snapshot", () => {
    const component = render(<Input.Root type="email" placeholder="email" />);

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should be filled out correctly", async () => {
    const stateFn = vi.fn();

    render(<Input.Root type="email" placeholder="email" onChange={stateFn} />);

    const input = screen.getByPlaceholderText("email");
    await waitFor(() => userEvent.type(input, "placeholder@elo.com"));

    const filledInput = screen.queryByDisplayValue("placeholder@elo.com");
    expect(filledInput).toBeInTheDocument();

    expect(stateFn).toHaveBeenCalled();
  });

  it("should be disabled", async () => {
    const stateFn = vi.fn();

    render(
      <Input.Root type="email" placeholder="email" onChange={stateFn} disabled />
    );

    const input = screen.getByPlaceholderText("email");
    await waitFor(() => userEvent.type(input, "placeholder@elo.com"));

    const filledInput = screen.queryByDisplayValue("placeholder@elo.com");
    expect(filledInput).not.toBeInTheDocument();

    expect(stateFn).not.toHaveBeenCalled();
    expect(input).toBeDisabled();
  });

  it("should render a different type", () => {
    const { rerender } = render(<Input.Root type="text" placeholder="text" />);
    const textInput = screen.getByPlaceholderText("text");
    expect(textInput).toHaveAttribute("type", "text");

    rerender(<Input.Root type="password" placeholder="password" />);
    const passwordInput = screen.getByPlaceholderText("password");
    expect(passwordInput).toHaveAttribute("type", "password");

    rerender(<Input.Root type="email" placeholder="email" />);
    const emailInput = screen.getByPlaceholderText("email");
    expect(emailInput).toHaveAttribute("type", "email");
  })
});
