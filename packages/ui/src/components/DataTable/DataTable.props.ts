import { ComponentProps } from "react";
import { Column, ColumnDef, ReactTable } from "./";

export type DataTableRootProps<TData, TValue> = ComponentProps<"div"> & {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  filter?: { column: string; placeholder: string } | null | undefined;
  hasPagination: boolean;
  hasViewOptions: boolean;
};

export type DataTableFilterProps<TData> = {
  table: ReactTable<TData>;
  column: string;
  placeholder: string;
};

export type DataTableSortHeaderProps<TData, TValue> = ComponentProps<"div"> & {
  column: Column<TData, TValue>;
  title: string;
};

export type DataTableProps<TData> = {
  table: ReactTable<TData>;
};
