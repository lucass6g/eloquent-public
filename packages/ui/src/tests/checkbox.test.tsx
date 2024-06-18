import { render, screen, waitFor } from "@testing-library/react";
import { Checkbox } from "..";

describe("Checkbox", () => {
    it("should match the snapshot", () => {
        const component = render(<Checkbox
            checked
            defaultChecked
            required
            onCheckedChange={vi.fn()}
        />);

        expect(component.baseElement).toMatchSnapshot()
    })

    it("should check correctly", async () => {
        const checkFn = vi.fn()

        render(<Checkbox
            defaultChecked={false}
            onCheckedChange={checkFn}
        />);

        const button = screen.getByRole('checkbox')
        await waitFor(() => button.click())

        expect(checkFn).toHaveBeenCalled()
    })

    it("should be disabled", async () => {
        const checkFn = vi.fn()

        render(<Checkbox
            disabled
            defaultChecked={false}
            onCheckedChange={checkFn}
        />);

        const button = screen.getByRole('checkbox')
        await waitFor(() => button.click())

        expect(button).toBeDisabled();
        expect(checkFn).not.toHaveBeenCalled()
    })
}); 