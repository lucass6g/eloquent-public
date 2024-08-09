import { render } from "@testing-library/react";
import { Pagination } from "./index";
import { describe, expect, it, vi } from "vitest";

describe("Pagination", () => {
  describe("should match the snapshot", () => {
    it("default", () => {
      const component = render(
        <Pagination.Root>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.FirstPage disabled={true} />
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Previous />
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Button isActive={true}>1</Pagination.Button>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Button>2</Pagination.Button>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Button>3</Pagination.Button>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Next />
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.LastPage onClick={() => console.log("last")} />
            </Pagination.Item>
          </Pagination.Content>
        </Pagination.Root>
      );

      expect(component.baseElement).toMatchSnapshot();
    });
    it("label", () => {
      const component = render(
        <Pagination.Root>
          <Pagination.Label current={1} total={10} />
        </Pagination.Root>
      );

      expect(component.baseElement).toMatchSnapshot();
    });
    it("form", () => {
      const component = render(
        <Pagination.Form
          current={1}
          total={10}
          onChange={vi.fn()}
          onSubmit={vi.fn()}
        />
      );

      expect(component.baseElement).toMatchSnapshot();
    });
  });
});
