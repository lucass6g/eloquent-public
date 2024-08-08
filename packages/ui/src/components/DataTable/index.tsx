import { HTMLAttributes, useState } from "react";

import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table as ReactTable,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table } from "../Table";
import { Button } from "../Button";
import { Select } from "../Select";
import { Input } from "../Input";
import { DropdownMenu } from "../DropdownMenu";

import { cn } from "@eloquent/styles";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  CaretSortIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  EyeNoneIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { baseVariants } from "./variants";

const {
  filterWrapperVariants,
  filterVariants,
  tableWrapperVariants,
  noResultsVariants,
  sortHeaderVariants,
  sortHeaderButtonVariants,
  sortHeaderIconsVariants,
  sortHeaderMenuIconsVariants,
  viewOptionsButtonVariants,
  viewOptionsButtonIconVariants,
  viewOptionsMenuContentVariants,
} = baseVariants();

interface RootProps<TData, TValue> {
  hasPagination: boolean;
  hasViewOptions: boolean;
  filter?: { column: string; placeholder: string } | null | undefined;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className: string;
}

interface FilterProps<TData> {
  table: ReactTable<TData>;
  placeholder: string;

  column: string;
}

interface ColumnHeaderProps<TData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

interface PaginationProps<TData> {
  table: ReactTable<TData>;
}

interface ViewOptionsProps<TData> {
  table: ReactTable<TData>;
}

const ViewOptions = function EloquentDataTableViewOptions<TData>({
  table,
}: ViewOptionsProps<TData>) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className={viewOptionsButtonVariants()}
        >
          <MixerHorizontalIcon className={viewOptionsButtonIconVariants()} />
          Visualização
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="end"
        className={viewOptionsMenuContentVariants()}
      >
        <DropdownMenu.Label>Colunas</DropdownMenu.Label>
        <DropdownMenu.Separator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenu.CheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenu.CheckboxItem>
            );
          })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const Pagination = function EloquentDataTablePagination<TData>({
  table,
}: PaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select.Root
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <Select.Trigger className="h-8 w-[70px]">
              <Select.Value
                placeholder={table.getState().pagination.pageSize}
              />
            </Select.Trigger>
            <Select.Content side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <Select.Item key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="secondary"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const SortHeader = function EloquentDataTableSortHeader<TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={sortHeaderVariants({ className })}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            variant="none"
            size="sm"
            className={sortHeaderButtonVariants()}
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className={sortHeaderIconsVariants()} />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className={sortHeaderIconsVariants()} />
            ) : (
              <CaretSortIcon className={sortHeaderIconsVariants()} />
            )}
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Item onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className={sortHeaderMenuIconsVariants()} />
            Asc
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className={sortHeaderMenuIconsVariants()} />
            Desc
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className={sortHeaderMenuIconsVariants()} />
            Ocultar
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

const Filter = function EloquentDataTableFilter<TData>({
  table,
  column,
  placeholder,
}: FilterProps<TData>) {
  return (
    <Input.Root
      placeholder={placeholder}
      value={(table.getColumn(`${column}`)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(`${column}`)?.setFilterValue(event.target.value)
      }
      className={filterVariants()}
    />
  );
};

const Root = function EloquentDataTableRoot<TData, TValue>({
  columns,
  data,
  hasPagination,
  hasViewOptions,
  filter,
  className,
}: RootProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
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
    <>
      <div className={filterWrapperVariants()}>
        {filter && (
          <Filter
            placeholder={filter.placeholder}
            table={table}
            column={filter.column}
          />
        )}
        {hasViewOptions && <ViewOptions table={table} />}
      </div>
      <div className={tableWrapperVariants()}>
        <Table.Root className={cn(className)}>
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
                <Table.Cell
                  colSpan={columns.length}
                  className={noResultsVariants()}
                >
                  Sem resultados.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
      </div>
      {hasPagination && <Pagination table={table} />}
    </>
  );
};

export type { ColumnDef };

export const DataTable = {
  Root,
  SortHeader,
};
