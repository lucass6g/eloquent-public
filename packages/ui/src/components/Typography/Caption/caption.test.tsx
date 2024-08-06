import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import {Caption} from "./index.tsx";

describe("Caption Component", () => {
    it("renders with default tag when no tag is provided", () => {
        render(<Caption>Test Caption</Caption>);
        const captionElement = screen.getByText("Test Caption");
        expect(captionElement.tagName).toBe("H6");
        expect(captionElement).toHaveClass("text-sm");
    })

    it("render with small size" , () => {
        render(<Caption size="sm">Test Caption</Caption>);
        const captionElement = screen.getByText("Test Caption");
        expect(captionElement).toHaveClass("text-xs");
    })
})