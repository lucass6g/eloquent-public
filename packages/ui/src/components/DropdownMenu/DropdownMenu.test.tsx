import { it, describe, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { userEvent } from 'storybook/test';
import { DropdownMenu } from ".";
import { LayoutGrid } from "lucide-react";
import { ReactNode } from "react";

const DefaultItem = (disabled: boolean) => (
  <DropdownMenu.Item disabled={disabled}>Item 1</DropdownMenu.Item>
);

const DefaultMenu = ({
  disabledTrigger = false,
  disabledItem = false,
  side = "bottom",
  align = "start",
  children = DefaultItem(disabledItem),
}: {
  disabledTrigger?: boolean;
  disabledItem?: boolean;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  children?: ReactNode;
}) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger disabled={disabledTrigger}>
      Items
    </DropdownMenu.Trigger>
    <DropdownMenu.Content side={side} align={align}>
      <DropdownMenu.Label>Título</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>{children}</DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

describe("Dropdown Menu", () => {
  describe("should match the snapshot", () => {
    describe("icon", () => {
      it("left", async () => {
        const component = render(
          DefaultMenu({
            children: (
              <DropdownMenu.Item>
                <DropdownMenu.Icon position="left">
                  <LayoutGrid
                    size={18}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                </DropdownMenu.Icon>
                Item 1
              </DropdownMenu.Item>
            ),
          })
        );

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
      it("right", async () => {
        const component = render(
          DefaultMenu({
            children: (
              <DropdownMenu.Item>
                Item 1
                <DropdownMenu.Icon position="right">
                  <LayoutGrid
                    size={18}
                    color="currentColor"
                    strokeWidth={1.5}
                  />
                </DropdownMenu.Icon>
              </DropdownMenu.Item>
            ),
          })
        );

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
      it("without", async () => {
        const component = render(DefaultMenu({}));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
    });
    describe("side", () => {
      it("left", async () => {
        const component = render(DefaultMenu({ side: "left" }));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
      it("right", async () => {
        const component = render(DefaultMenu({ side: "right" }));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
      it("top", async () => {
        const component = render(DefaultMenu({ side: "top" }));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
      it("bottom", async () => {
        const component = render(DefaultMenu({ side: "bottom" }));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
    });
    describe("align", () => {
      it("start", async () => {
        const component = render(DefaultMenu({ align: "start" }));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
      it("center", async () => {
        const component = render(DefaultMenu({ align: "center" }));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
      it("end", async () => {
        const component = render(DefaultMenu({ align: "end" }));

        const button = screen.getAllByRole("button", { name: "Items" });
        await waitFor(() => userEvent.click(button[0] as Element));

        expect(component.baseElement).toMatchSnapshot();
      });
    });
  });
  it("should open correctly", async () => {
    render(DefaultMenu({}));

    const button = screen.getAllByRole("button", { name: "Items" });
    await waitFor(() => userEvent.click(button[0] as Element));

    const item = screen.queryByText("Item 1");

    expect(item).toBeInTheDocument();
  });

  it("should be disabled", async () => {
    render(DefaultMenu({ disabledTrigger: true }));

    const button = screen.getAllByRole("button", { name: "Items" });
    await waitFor(() => userEvent.click(button[0] as Element));

    const item = screen.queryByText("Item 1");

    expect(item).not.toBeInTheDocument();
  });
});
