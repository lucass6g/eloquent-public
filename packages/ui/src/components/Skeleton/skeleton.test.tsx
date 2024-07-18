import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Skeleton } from ".";

describe("Skeleton", () => {
    describe("should match the snapshot", () => {
        it("skeleton", () => {
            const component = render(
                <div className="flex flex-col gap-2">
                    <h1>title</h1>
                    <Skeleton className="h-4 w-[392px]" />
                    <p>text</p>
                </div>
            );

            expect(component.baseElement).toMatchSnapshot();
        });
    });
});
