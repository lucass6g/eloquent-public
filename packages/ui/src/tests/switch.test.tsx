import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "..";

describe("Switch", () => {
    it("should match the snapshot", () => {
        const component = render(<Switch id="switch" />);

        expect(component.baseElement).toMatchSnapshot()
    })

    it("should check correctly", async () => {
        const switchFn = vi.fn()

        render(<Switch
            defaultChecked={false}
            onCheckedChange={switchFn}
        />);

        const button = screen.getByRole('switch')
        expect(button).not.toBeChecked()

        await waitFor(() => userEvent.click(button))
        expect(button).toBeChecked()

        expect(switchFn).toHaveBeenCalled()
    })

    it("should uncheck correctly", async () => {
        const switchFn = vi.fn()

        render(<Switch
            defaultChecked={true}
            onCheckedChange={switchFn}
        />);

        const button = screen.getByRole('switch')
        expect(button).toBeChecked()

        await waitFor(() => userEvent.click(button))
        expect(button).not.toBeChecked()

        expect(switchFn).toHaveBeenCalled()
    })

    it("should be disabled", async () => {
        const checkFn = vi.fn()

        render(<Switch
            disabled
            defaultChecked={false}
            onCheckedChange={checkFn}
        />);

        const button = screen.getByRole('switch')
        await waitFor(() => userEvent.click(button))

        expect(button).toBeDisabled();
        expect(checkFn).not.toHaveBeenCalled()
    })
}); 