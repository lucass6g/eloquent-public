import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "..";

describe("Accordion", () => {
  it("should match the snapshot", () => {
    const component = render(
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>trigger</Accordion.Trigger>
          <Accordion.Content>content</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );

    expect(component.baseElement).toMatchSnapshot();
  });

  it("should open and close correctly", async () => {
    render(
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>trigger</Accordion.Trigger>
          <Accordion.Content>content</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );

    const trigger = screen.getByRole("button", { name: /trigger/i });
    await waitFor(() => userEvent.click(trigger));

    const content = screen.queryByText(/content/i);
    expect(content).toBeInTheDocument();

    await waitFor(() => userEvent.click(trigger));
    expect(content).not.toBeInTheDocument();
  });

  it("should render multiple contents", async () => {
    render(
      <Accordion.Root type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>trigger</Accordion.Trigger>
          <Accordion.Content>Item-1</Accordion.Content>
          <Accordion.Content>Item-2</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );

    const trigger = screen.getByRole("button", { name: /trigger/i });
    await waitFor(() => userEvent.click(trigger));

    const content = screen.queryByText(/content one/i);
    expect(content).toBeInTheDocument();
 
    const contentTwo = screen.queryByText(/content two/i);
    expect(contentTwo).toBeInTheDocument();
  });
});
