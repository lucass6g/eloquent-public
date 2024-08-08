import { useState } from "react";

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
import { Pagination } from "../Pagination";

import { cn } from "@eloquent/styles";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import {
  CaretSortIcon,
  EyeNoneIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { baseVariants } from "./variants";
import {
  DataTableFilterProps,
  DataTableProps,
  DataTableRootProps,
  DataTableSortHeaderProps,
} from "./DataTable.props";

const {
  filterWrapperVariants,
  filterVariants,
  tableWrapperVariants,
  tableVariants,
  noResultsVariants,
  sortHeaderVariants,
  sortHeaderButtonVariants,
  sortHeaderIconsVariants,
  sortHeaderMenuIconsVariants,
  paginationCounterWrapperVariants,
  paginationWrapperVariants,
  paginationSelectedRowsVariants,
  paginationRowsPerPageWrapperVariants,
  paginationRowsPerPageVariants,
  paginationRowsPerPageSelectTriggerVariants,
  paginationCounterVariants,
  paginationVariants,
  viewOptionsButtonVariants,
  viewOptionsButtonIconVariants,
  viewOptionsMenuContentVariants,
} = baseVariants();

const ViewOptions = function EloquentDataTableViewOptions<TData>({
  table,
}: DataTableProps<TData>) {
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

const DataTablePagination = function EloquentDataTablePagination<TData>({
  table,
}: DataTableProps<TData>) {
  return (
    <div className={paginationWrapperVariants()}>
      <p className={paginationSelectedRowsVariants()}>
        {table.getFilteredSelectedRowModel().rows.length} de{" "}
        {table.getFilteredRowModel().rows.length} linha (s) selecionadas.
      </p>
      <div className={paginationCounterWrapperVariants()}>
        <div className={paginationRowsPerPageWrapperVariants()}>
          <p className={paginationRowsPerPageVariants()}>Linhas por página</p>
          <Select.Root
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <Select.Trigger
              className={paginationRowsPerPageSelectTriggerVariants()}
            >
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
        <p className={paginationCounterVariants()}>
          Página {table.getState().pagination.pageIndex + 1} de{" "}
          {table.getPageCount()}
        </p>
        <div className={paginationVariants()}>
          <Pagination.Root>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  onClick={() => table.previousPage()}
                  isActive={table.getCanPreviousPage()}
                />
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Next
                  onClick={() => table.nextPage()}
                  isActive={table.getCanNextPage()}
                />
              </Pagination.Item>
            </Pagination.Content>
          </Pagination.Root>
        </div>
      </div>
    </div>
  );
};

const SortHeader = function EloquentDataTableSortHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableSortHeaderProps<TData, TValue>) {
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
}: DataTableFilterProps<TData>) {
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
  data,
  columns,
  filter,
  hasPagination,
  hasViewOptions,
  className,
}: DataTableRootProps<TData, TValue>) {
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
        <Table.Root className={tableVariants({ className })}>
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
      {hasPagination && <DataTablePagination table={table} />}
    </>
  );
};

export type { Column, ColumnDef, ReactTable };

export const DataTable = {
  Root,
  SortHeader,
};
