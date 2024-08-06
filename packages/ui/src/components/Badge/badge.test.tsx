import { render } from "@testing-library/react";
import { Badge } from ".";
import { describe, it, expect } from "vitest";

describe("Badge Component", () => {
  it("renders correctly with default variant", () => {
    const { container } = render(<Badge />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with the 'secondary' variant", () => {
    const { container } = render(<Badge variant="secondary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with the 'destructive' variant", () => {
    const { container } = render(<Badge variant="destructive" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with the 'outline' variant", () => {
    const { container } = render(<Badge variant="outline" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies additional className correctly", () => {
    const { container } = render(<Badge className="hover:bg-green-dark-600" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});