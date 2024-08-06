import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { Index } from "..";

describe("Calendar", () => {
  beforeEach(() => {
    const date = new Date(2024, 0, 1, 12);
    vi.setSystemTime(date);
  });

  it("should match the snapshot", () => {
    const component = render(
      <Index mode="single" selected={new Date()} onSelect={vi.fn()} />
    );

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should go back to the previous month correctly", async () => {
    render(<Index mode="single" selected={new Date()} onSelect={vi.fn()} />);

    const button = screen.getByRole("button", {
      name: /go to previous month/i,
    });
    act(() => button.click());

    const month = await waitFor(() => screen.findByText(/dezembro 2023/i));
    expect(month).toBeInTheDocument();
  });

  it("should go to next month correctly", async () => {
    render(<Index mode="single" selected={new Date()} onSelect={vi.fn()} />);

    const button = screen.getByRole("button", { name: /go to next month/i });
    act(() => button.click());

    const month = await waitFor(() => screen.findByText(/fevereiro 2024/i));
    expect(month).toBeInTheDocument();
  });

  it("should select a day correctly", () => {
    const onSelect = vi.fn();
    render(
      <Index mode="single" selected={new Date()} onSelect={onSelect} />
    );

    const button = screen.getAllByRole("gridcell", { name: "2" })[0];
    act(() => button?.click());

    expect(onSelect).toHaveBeenCalled();
    expect(onSelect.mock.calls[0][0]).toStrictEqual(
      new Date("2024-01-02T03:00:00.000Z")
    );
  });

  it("should be disabled", () => {
    const onSelect = vi.fn();
    render(
      <Index
        mode="single"
        selected={new Date()}
        onSelect={onSelect}
        disabled={{ dayOfWeek: [0, 6] }}
      />
    );

    const button = screen.getAllByRole("gridcell", { name: "6" })[0];
    act(() => button?.click());

    expect(onSelect).not.toHaveBeenCalled();
  });
});
