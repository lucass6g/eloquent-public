import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "..";
import { vi } from "vitest";

describe("Tabs", () => {
  it("should match the snapshot", () => {
    const component = render(
      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">tab trigger 1</Tabs.Trigger>
          <Tabs.Trigger value="password">tab trigger 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">tab content 1</Tabs.Content>
        <Tabs.Content value="password">tab content 2</Tabs.Content>
      </Tabs.Root>
    );

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should change tab correctly ", async () => {
    const tabsFn = vi.fn();

    render(
      <Tabs.Root defaultValue="account" onValueChange={tabsFn}>
        <Tabs.List>
          <Tabs.Trigger value="account">tab trigger 1</Tabs.Trigger>
          <Tabs.Trigger value="password">tab trigger 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">tab content 1</Tabs.Content>
        <Tabs.Content value="password">tab content 2</Tabs.Content>
      </Tabs.Root>
    );

    const content1 = screen.getByText("tab content 1");
    expect(content1).toBeInTheDocument();

    const trigger = screen.getByRole("tab", { name: /tab trigger 2/i });
    await waitFor(() => userEvent.click(trigger));

    const content2 = screen.getByText("tab content 2");
    expect(content2).toBeInTheDocument();

    expect(tabsFn).toHaveBeenCalled();
  });
});
