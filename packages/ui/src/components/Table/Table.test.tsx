import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Table } from ".";

describe("Dropdown Menu", () => {
  it("should match the snapshot", () => {
    const component = render(
      <Table.Root>
        <Table.Caption>A test table</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Header 1</Table.Head>
            <Table.Head>Header 2</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell 1</Table.Cell>
            <Table.Cell>Cell 2</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell>$2,500.00</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Root>
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
