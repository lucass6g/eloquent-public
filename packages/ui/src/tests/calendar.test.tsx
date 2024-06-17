import { render, waitFor } from "@testing-library/react";
import { act } from "react";
import { Calendar } from "..";

describe("Calendar", () => {
    beforeEach(() => {
        const date = new Date(2024, 0, 1, 12)
        vi.setSystemTime(date)
    })

    it("should match the snapshot", () => {
        const component = render(<Calendar
            mode="single"
            selected={new Date()}
            onSelect={vi.fn()}
        />);

        expect(component.baseElement).toMatchSnapshot()
    })

    it("should go back to the previous month correctly", async () => {
        const component = render(<Calendar
            mode="single"
            selected={new Date()}
            onSelect={vi.fn()}
        />);

        const button = component.getByRole('button', { name: /go to previous month/i })
        act(() => button.click())

        const month = await waitFor(() => component.findByText(/december 2023/i))
        expect(month).toBeInTheDocument();
    })

    it("should go to next month correctly", async () => {
        const component = render(<Calendar
            mode="single"
            selected={new Date()}
            onSelect={vi.fn()}
        />);

        const button = component.getByRole('button', { name: /go to next month/i })
        act(() => button.click())

        const month = await waitFor(() => component.findByText(/february 2024/i))
        expect(month).toBeInTheDocument();
    })

    it("should select a day correctly", () => {
        const onSelect = vi.fn()
        const component = render(<Calendar
            mode="single"
            selected={new Date()}
            onSelect={onSelect}
        />);

        const button = component.getAllByRole('gridcell', { name: '2' })[0]
        act(() => button?.click())

        expect(onSelect.mock.calls[0][0].getDate()).toBe(2)
    })
}); 