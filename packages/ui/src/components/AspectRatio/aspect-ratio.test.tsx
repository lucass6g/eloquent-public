import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AspectRatio } from "./index";

describe("AspectRatio", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <AspectRatio ratio={1}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem]"
        />
      </AspectRatio>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem]"
        />
      </AspectRatio>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});