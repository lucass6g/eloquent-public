import { describe, expect, test } from "vitest";
import { Caption } from ".";
import { render, screen } from "@testing-library/react";

describe("<Caption />", () => {
	test("renders the component with default props", () => {
		const { container } = render(<Caption as={"p"}>Hello, World!</Caption>);
		expect(container.firstChild).toBeDefined();
		expect(container.querySelector("p")).toBeDefined();
		const component = screen.getByText("Hello, World!");
		expect(component).toBeDefined();
		expect(component).not.toHaveClass("text-base-light-pure");
	});

	test("renders the component with mistaken prop", () => {
		expect(() => {
			render(
				<Caption inverse as="fake-prop">
					Nice try
				</Caption>
			);
		}).toThrow(
			'Invalid value "fake-prop" provided for prop "as" in Caption component.'
		);
	});
});