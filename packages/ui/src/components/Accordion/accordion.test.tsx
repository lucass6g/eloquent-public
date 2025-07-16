import { it, describe, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react"
import { Accordion } from "..";
import { userEvent } from 'storybook/test';

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

  it("should render the single accordion correctly", async () => {
    render(
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>trigger 1</Accordion.Trigger>
          <Accordion.Content>content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>trigger 2</Accordion.Trigger>
          <Accordion.Content>content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );

    const triggerOne = screen.getByRole("button", { name: /trigger 1/i });
    await waitFor(() => userEvent.click(triggerOne));
    const contentOne = screen.queryByText(/content 1/i);
    expect(contentOne).toBeInTheDocument();

    const triggerTwo = screen.getByRole("button", { name: /trigger 2/i });
    await waitFor(() => userEvent.click(triggerTwo));
    const contentTwo = screen.queryByText(/content 2/i);
    expect(contentOne).not.toBeInTheDocument();
    expect(contentTwo).toBeInTheDocument();
  });

  it("should render the multiple accordion correctly", async () => {
    render(
      <Accordion.Root type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>trigger 1</Accordion.Trigger>
          <Accordion.Content>content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>trigger 2</Accordion.Trigger>
          <Accordion.Content>content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    );

    const triggerOne = screen.getByRole("button", { name: /trigger 1/i });
    await waitFor(() => userEvent.click(triggerOne));
    const contentOne = screen.queryByText(/content 1/i);
    expect(contentOne).toBeInTheDocument();

    const triggerTwo = screen.getByRole("button", { name: /trigger 2/i });
    await waitFor(() => userEvent.click(triggerTwo));
    const contentTwo = screen.queryByText(/content 2/i);
    expect(contentOne).toBeInTheDocument();
    expect(contentTwo).toBeInTheDocument();
  });
});
