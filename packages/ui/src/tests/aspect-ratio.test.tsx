import { render } from "@testing-library/react";
import { AspectRatio } from "..";

describe("Aspect Ratio", () => {
    describe("should match the snapshot", () => {
        it("default", () => {
            const component = render(<AspectRatio />);

            expect(component.baseElement).toMatchSnapshot()
        })

        it("16 / 9", () => {
            const component = render(<AspectRatio ratio={16 / 9} />);

            expect(component.baseElement).toMatchSnapshot()
        })
    })
}); 