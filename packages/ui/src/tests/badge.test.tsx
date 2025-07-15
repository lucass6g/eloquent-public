import { render } from "@testing-library/react";
import { Badge } from "..";
import { describe, expect, it } from "vitest";

describe("Badge", () => {
  describe("should match the snapshot", () => {
    it("default", () => {
      const component = render(<Badge>badge</Badge>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("secondary", () => {
      const component = render(<Badge variant="secondary">badge</Badge>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("outline", () => {
      const component = render(<Badge variant="secondary">badge</Badge>);

      expect(component.baseElement).toMatchSnapshot();
    });

    it("destructive", () => {
      const component = render(<Badge variant="destructive">badge</Badge>);

      expect(component.baseElement).toMatchSnapshot();
    });
  });
});
