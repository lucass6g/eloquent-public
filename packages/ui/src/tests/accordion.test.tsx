import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion } from "..";

describe("Accordion", () => {
    it("should match the snapshot", () => {
        const component = render(<Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>teste</Accordion.Trigger>
                <Accordion.Content>teste</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>);

        expect(component.baseElement).toMatchSnapshot()
    })
}); 