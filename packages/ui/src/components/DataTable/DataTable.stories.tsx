import { StoryObj } from "@storybook/react";
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table as ReactTable,
  Row,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { DropdownMenu } from "../DropdownMenu";
import { Pagination } from "../Pagination";
import { Table } from "../Table";
import { DataTable } from ".";

const data = Array(6).fill({
  cell1: "Data Label",
  cell2: "Data Label",
  cell3: "Data Label",
  cell4: "Data Label",
  cell5: "Data Label",
  cell6: "Data Label",
});

const menuCell = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <Button variant="none" className="h-8 w-8 p-0">
        <span className="sr-only">Abrir menu</span>
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
      <DropdownMenu.Label>Ações</DropdownMenu.Label>
      <DropdownMenu.Item>Visualizar</DropdownMenu.Item>
      <DropdownMenu.Item>Editar</DropdownMenu.Item>
      <DropdownMenu.Item>Apagar</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

const columns: ColumnDef<typeof data>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  ...data.map((_, index) => ({
    accessorKey: `cell${index + 1}`,
    header: "Header",
  })),
  {
    id: "actions",
    cell: menuCell,
  },
];

type DataTableProps = {};

export default {
  title: "Data Table",
  parameters: {
    docs: {
      description: {
        component:
          "São grids estruturados, responsivos e organizados para apresentar dados em formato de tabulação.",
      },
    },
  },
};

type Story = StoryObj<DataTableProps>;

export const PaginationStory: Story = {
  name: "Data Table",
  args: {},
  argTypes: {},
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
      {}
    );

    const [rowSelection, setRowSelection] = useState({});
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    });

    return (
      <DataTable.Root>
        <Table.Root>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Head key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Table.Head>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Table.Row
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={columns.length} className={"text-center"}>
                  Sem resultados.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
        <div className="flex gap-8 mt-2">
          <DataTable.RowsPerPage table={table} rows={[5, 10, 15, 20]} />
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
        </div>
      </DataTable.Root>
    );
  },
};
