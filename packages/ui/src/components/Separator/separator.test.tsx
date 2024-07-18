import { render } from "@testing-library/react";
import { Separator } from ".";

describe("Separator", () => {
    describe("should match the snapshot", () => {
        it("horizontal", () => {
            const component = render(
                <div className="flex flex-col gap-2">
                    <h1>title</h1>
                    <Separator orientation="horizontal" />
                    <p>text</p>
                </div>
            );

            expect(component.baseElement).toMatchSnapshot();
        });

        it("vertical", () => {
            const component = render(
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>test 1</div>
                    <Separator orientation="vertical" />
                    <div>test 2</div>
                </div>
            );

            expect(component.baseElement).toMatchSnapshot();
        });
    });
});
