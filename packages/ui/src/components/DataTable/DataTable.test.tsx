import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Pagination, Table } from "../";
import { DataTable } from ".";

describe("Data Table", () => {
  it("should match the snapshot", () => {
    const component = render(
      <DataTable.Root>
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
        <Pagination.Root className="flex items-center gap-4">
          <Pagination.Label current={1} total={10} />
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.FirstPage disabled={true} />
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Previous onClick={() => console.log("previous")} />
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Next onClick={() => console.log("next")} />
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.LastPage onClick={() => console.log("last")} />
            </Pagination.Item>
          </Pagination.Content>
        </Pagination.Root>
      </DataTable.Root>
    );

    expect(component.baseElement).toMatchSnapshot();
  });
});
