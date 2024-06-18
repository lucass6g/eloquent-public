import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "..";

describe("Input", () => {
    it("should match the snapshot", () => {
        const component = render(<Input
            type="email"
            placeholder="email"
        />);

        expect(component.baseElement).toMatchSnapshot()
    })

    it("should be filled out correctly", async () => {
        const stateFn = vi.fn()

        render(<Input
            type="email"
            placeholder="email"
            onChange={stateFn}
        />);

        const input = screen.getByPlaceholderText('email')
        fireEvent.change(input, { target: { value: 'placeholder@elo.com' } })

        const filledInput = screen.getByDisplayValue('placeholder@elo.com')
        expect(filledInput).toBeInTheDocument()

        expect(stateFn).toHaveBeenCalled()
    })

    it("should be disabled", async () => {
        render(<Input
            type="email"
            placeholder="email"
            onChange={vi.fn()}
            disabled
        />);

        const input = screen.getByPlaceholderText('email')

        expect(input).toBeDisabled();
    })
}); 