import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "..";

describe("Select", () => {
  describe("should match the snapshot", () => {
    it("opened", () => {
      const component = render(
        <Select.Root>
          <Select.Trigger>
            <Select.Value placeholder="select" />
          </Select.Trigger>
        </Select.Root>
      );

      expect(component.baseElement).toMatchSnapshot();
    });

    it("closed", async () => {
      const component = render(
        <Select.Root>
          <Select.Trigger>
            <Select.Value placeholder="select" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>label</Select.Label>
              <Select.Item value="value-1">value 1</Select.Item>
              <Select.Item value="value-2">value 2</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      );

      const trigger = screen.getByRole("combobox");
      await waitFor(() => userEvent.click(trigger));

      expect(component.baseElement).toMatchSnapshot();
    });
  });

  it("should select correctly", async () => {
    const stateFn = vi.fn();

    render(
      <Select.Root test-id="test" onValueChange={stateFn}>
        <Select.Trigger>
          <Select.Value placeholder="select" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>label</Select.Label>
            <Select.Item value="value-1">value 1</Select.Item>
            <Select.Item value="value-2">value 2</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    );

    const trigger = screen.getByRole("combobox");

    //select value 1
    await waitFor(() => userEvent.click(trigger));

    const option1 = screen.getByText("value 1");
    await waitFor(() => userEvent.click(option1));
    expect(stateFn).toHaveBeenCalledWith("value-1");

    //select value 2
    await waitFor(() => userEvent.click(trigger));

    const option2 = screen.getByText("value 2");
    await waitFor(() => userEvent.click(option2));
    expect(stateFn).toHaveBeenCalledWith("value-2");
  });

  it("should be disabled", async () => {
    const stateFn = vi.fn();
    render(
      <Select.Root disabled onValueChange={stateFn}>
        <Select.Trigger>
          <Select.Value placeholder="select" />
        </Select.Trigger>
      </Select.Root>
    );

    const trigger = screen.getByRole("combobox");
    await waitFor(() => userEvent.click(trigger));

    expect(trigger).toBeDisabled();
    expect(stateFn).not.toHaveBeenCalledWith();
  });
});
