import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { InputOTP } from "..";
import userEvent from "@testing-library/user-event";

describe("Input OTP", () => {
  it("should match the snapshot", () => {
    const component = render(
      <InputOTP.Root maxLength={4}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP.Root>
    );

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should be filled out correctly", () => {
    const stateFn = vi.fn();

    render(
      <InputOTP.Root maxLength={4} onChange={stateFn}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP.Root>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "1234" } });

    const filledInput = screen.queryByDisplayValue("1234");
    expect(filledInput).toBeInTheDocument();

    expect(stateFn).toHaveBeenCalled();
  });

  it("should be disabled", async () => {
    render(
      <InputOTP.Root disabled maxLength={4}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP.Root>
    );

    const input = screen.getByRole("textbox");
    await waitFor(() => userEvent.type(input, "1234"));

    const filledInput = screen.queryByDisplayValue("1234");
    expect(filledInput).not.toBeInTheDocument();

    expect(input).toBeDisabled();
  });
});
