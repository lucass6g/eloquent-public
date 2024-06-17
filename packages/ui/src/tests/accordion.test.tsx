import { render, waitFor } from "@testing-library/react";
import { Accordion } from "..";

describe("Accordion", () => {
    it("should match the snapshot", () => {
        const component = render(<Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>trigger</Accordion.Trigger>
                <Accordion.Content>content</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>);

        expect(component.baseElement).toMatchSnapshot()
    })

    it("should open and close correctly", async () => {
        const component = render(<Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>trigger</Accordion.Trigger>
                <Accordion.Content>content</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>);

        const trigger = component.getByRole('button', { name: /trigger/i })
        await waitFor(() => trigger.click())

        const content = component.queryByText(/content/i)
        expect(content).toBeInTheDocument()

        await waitFor(() => trigger.click())
        expect(content).not.toBeInTheDocument()
    })
}); 