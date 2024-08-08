import { Meta, StoryObj } from "@storybook/react";
import { MoreHorizontal } from "lucide-react";

import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { DropdownMenu } from "../DropdownMenu";
import { ColumnDef, DataTable } from "./";

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

export const columns: ColumnDef<typeof data>[] = [
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

const meta: any = {
  title: "Data Table",
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component:
          "São grids estruturados, responsivos e organizados para apresentar dados em formato de tabulação.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DataTableStory: Story = {
  render: () => (
    <DataTable.Root
      columns={columns}
      data={data}
      hasPagination
      hasViewOptions
      filter={{ column: "cell1", placeholder: "filtre por cell1" }}
    />
  ),
};
