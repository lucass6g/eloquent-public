import { Table } from "@tanstack/react-table";
import { Select } from "../Select";
import { baseVariants } from "./variants";

const {
  rootVariants,
  rowsPerPageWrapperVariants,
  rowsPerPageVariants,
  rowsPerPageSelectTriggerVariants,
} = baseVariants();

const RowsPerPage = function EloquentDataTableRowsPerPage<TData>({
  table,
  rows,
  ...props
}: React.ComponentProps<"div"> & { table: Table<TData>; rows: number[] }) {
  return (
    <div className={rowsPerPageWrapperVariants()} {...props}>
      <p className={rowsPerPageVariants()}>Linhas por página</p>
      <Select.Root
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <Select.Trigger className={rowsPerPageSelectTriggerVariants()}>
          <Select.Value placeholder={table.getState().pagination.pageSize} />
        </Select.Trigger>
        <Select.Content side="top">
          {rows.map((pageSize) => (
            <Select.Item key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

const Root = function EloquentDataTable({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={rootVariants({ className })} {...props} />;
};

export const DataTable = {
  Root,
  RowsPerPage,
};
